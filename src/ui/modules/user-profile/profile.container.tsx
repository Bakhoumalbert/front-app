import { firestoreUpdateDocument } from "@/src/api/firestore";
import { storage } from "@/src/config/firebase-config";
import { useAuth } from "@/src/context/AuthUserContext";
import { useToggle } from "@/src/hooks/use-toggle";
import { UserProfileFormFielsType } from "@/src/types/forms";
import { StorageReference, UploadTask, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ProfileView } from "./profile.view";

export const ProfileContainer = () => {
  const { authUser, reloadAuthUserData } = useAuth()
  const { value: isLoading, setValue: setLoading } = useToggle()
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  // Etat qui sera le prevoui 
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(null)
  const [uploadProgress, setuploadProgress] = useState<number>(0)


  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    setValue,
    setError,
  } = useForm<UserProfileFormFielsType>()

  const handleUpdateUserDocument = async (formData: UserProfileFormFielsType) => {
    setLoading(true)

    const { error } = await firestoreUpdateDocument(
      "users",
      authUser.uid,
      formData
    );

    if (error) {
      setLoading(false);
      toast.error(error.message);
      return;
    }

    toast.success("Ton profil a été mise à jour avec succès");
    setLoading(false);
  };

  const { displayName, expertise, biographie, linkedin, github } = authUser.userDocument;
  console.log("authUser : ", authUser);

  useEffect(() => {
    // On crée un simple array qu'on a typer
    const fieldsToUpdate: (
      | 'displayName'
      | 'expertise'
      | 'biographie'
      | 'linkedin'
      | 'github'
    )[] = ["displayName", "expertise", "biographie", "linkedin", "github"]

    for (const field of fieldsToUpdate) {
      setValue(field, authUser.userDocument[field])
    }
  }, [authUser.userDocument, setValue])

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    // On va prendre le premier élément uploader
    const file = e.target.files?.[0];
    console.log('file', file)
    if (file) {
      setSelectedImage(file)

      // l'instance fileReader permet de lire un fichier
      const reader = new FileReader()
      // Une fois que le fichier est charger le code de ce gestionnaire de fichier sera executé
      reader.onload = (e) => {
        let imgDataURL: string | ArrayBuffer | null = null;
        if (e.target) {
          imgDataURL = e.target.result
        }
        setImagePreview(imgDataURL)
      }
      // convertion du fichier file en une url de données base 64
      reader.readAsDataURL(file)
    }
  }

  // La fonction qui va nous permettre de déployer notre image en ligne
  const handleImageUpload = () => {
    let storageRef: StorageReference;
    let uploadTask: UploadTask;

    if (selectedImage !== null) {
      setLoading(true);
      // Creation de la référence de stockage
      storageRef = ref(
        storage,
        `users-media/${authUser.uid}/avatar/avatar-${authUser.uid}`
      )
      uploadTask = uploadBytesResumable(storageRef, selectedImage);

      // Téléversement des données avec une notion de progression  
      uploadTask.on(
        "state_changed", (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          setuploadProgress(progress)
        },
        (error) => {
          setLoading(false);
          toast.error("Une erreur inconnue est survenue")
          setuploadProgress(0)
        },
        // Indication de l'url d'envoie au document
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(
            (downloadURL) => {
              updateUserAvatar(downloadURL);
              setSelectedImage(null)
              setTimeout(() => { // attendre le chargement de l'image
                setuploadProgress(0)
              }, 1000)
            }
          )
        }
      )
    }
  }

  const updateUserAvatar = async (photoURL: string) => {
    const body = {
      photoURL: photoURL
    }
    // await updateUserIdentificationData(authUser.uid, body);

    // Mise à jour du document
    const { error } = await firestoreUpdateDocument(
      "users",
      authUser.uid,
      body
    );
    if (error) {
      setLoading(false);
      toast.error(error.message);
      return;
    }
    reloadAuthUserData();
    setLoading(false);
  }

  const onSubmit: SubmitHandler<UserProfileFormFielsType> = async (formData) => {

    // Mise à jour si une image est selectionnée
    if (selectedImage) {
      handleImageUpload()
    }

    // l'avatar ne fait pas partir du formulaire
    if (formData.linkedin && !formData.linkedin.includes("linkedin.com/")) {
      setError("linkedin", {
        type: "manual",
        message: 'Le lien doit être de LinkedIn',
      })
      return;
    }
    if (formData.github && !formData.github.includes("github.com/")) {
      setError("github", {
        type: "manual",
        message: 'Le lien doit être de github',
      })
      return;
    }

    if (
      displayName != formData.displayName ||
      expertise != formData.expertise ||
      biographie != formData.biographie ||
      linkedin != formData.linkedin ||
      github != formData.github
    ) {

      if (displayName != formData.displayName || authUser.displayName != formData.displayName) {
        const body = {
          displayName: formData.displayName
        }
        // await updateUserIdentificationData(authUser.uid, body);

        // Mise à jour du document
        // const { error } = await updateUserIdentification(
        //   authUser.uid,
        //   body
        // );
        // if (error) {
        //   setLoading(false);
        //   toast.error(error.message);
        //   return;
        // }
        // reloadAuthUserData()
      }

      // Suppression des valeurs valeurs undefine de formData
      for (const key in formData) {
        if (
          formData.hasOwnProperty(key) &&
          formData[key as keyof UserProfileFormFielsType] === undefined
        ) {
          delete formData[key as keyof UserProfileFormFielsType];
        }
      }

      handleUpdateUserDocument(formData);
      console.log(formData)
      return;
    }

    console.log("Pas besoin de mise à jour");

  }

  return (
    <ProfileView
      handleImageSelect={handleImageSelect}
      imagePreview={imagePreview}
      uploadProgress={uploadProgress}
      form={{
        errors,
        control,
        register,
        handleSubmit,
        onSubmit,
        isLoading,
      }}
    />
  )
}
