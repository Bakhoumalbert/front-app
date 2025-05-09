import { BaseComponentProps } from "@/src/types/onboarding-steps-list";
import { useState } from "react";
import { OnboardingFooter } from "../../footer/onboarding-footer";
import { OnboardingTabs } from "../../tabs/onboardingTabs";
import { OnboardingLayout } from "../../onboarding-layout";
import { useAuth } from "@/src/context/AuthUserContext";
import { useToggle } from "@/src/hooks/use-toggle";
import { Typography } from "@/src/ui/design-system/typography/Typography";
import { Container } from "@/src/ui/components/container/Container";
import { UploadAvatar } from "@/src/ui/components/upload-avatar/upload-avatar";
import { StorageReference, UploadTask, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "@/src/config/firebase-config";
import { toast } from "react-toastify";
import { updateUserIdentification } from "@/src/api/authentification";
import { firestoreUpdateDocument } from "@/src/api/firestore";

export const AvatarStep = ({
  nextStep,
  prevStep,
  isFinalStep,
  isFirstStep,
  stepsList,
  getCurrentStep,
}: BaseComponentProps) => {
  const { value: isLoading, toggle } = useToggle();
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  // Etat qui sera le prevoui 
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(null)

  const { authUser } = useAuth();
  // Etat de téléversement de l(image)
  const [uploadProgress, setuploadProgress] = useState<number>(0)

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

  // Fonction de mise à jour du document de l'utilisateur avec l'image
  const updateUserDocument = async (photoURL: string) => {
    const body = {
      photoURL: photoURL
    }

    // await updateUserIdentification(authUser.uid, body);

    const { error } = await firestoreUpdateDocument("users", authUser.uid, body);

    if (error) {
      toggle();
      toast.error(error.message)
      return
    }

    toggle();
    nextStep();
  }

  // La fonction qui va nous permettre de déployer notre image en ligne
  const handleImageUpload = () => {
    let storageRef: StorageReference;
    let uploadTask: UploadTask;

    if (selectedImage !== null) {
      toggle();
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
          toggle();
          toast.error("Une erreur inconnue est survenue")
        },
        // Indication de l'url d'envoie au document
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(
            (downloadURL) => {
              updateUserDocument(downloadURL)
            }
          )
        }
      )
    } else {
      nextStep()
    }
  }

  return (
    <OnboardingLayout>
      <div className="h-full overflow-auto">
        <Container className="grid h-full grid-cols-12 items-center justify-center">
          <div className="relative z-10 flex items-center h-full col-span-6 py-10">
            <div className="w-full space-y-5 pb-4.5">
              <OnboardingTabs
                tabs={stepsList}
                getCurrentStep={getCurrentStep}
              />
              <Typography variant="h1" component="h1">
                Dèrnière étape !
              </Typography>
              <Typography variant="body-base" component="p" theme="gray" className="text-justify">
                Bientôt, vous serez parmi nous ! Cependant on a
                besoin de ta plus belle photo de profil pour que tout le monde
                puisse voir à quel point tu es incroyable. Mettre une photo
                sympa, c'est la garantie de te faire remarquer et de faire
                craquer les développeurs en quête de nouveaux contacts. Alors
                montre-nous ta belle gueule et rejoins la communauté !
              </Typography>
            </div>
          </div>
          <div className="flex h-full col-span-6 items-center">
            <div className="flex justify-center w-full">
              <UploadAvatar
                handleImageSelect={handleImageSelect}
                imagePreview={imagePreview}
                uploadProgress={uploadProgress}
                isLoading={isLoading}
              />
            </div>
          </div>
        </Container>
      </div>
      <OnboardingFooter
        prevStep={prevStep}
        nextStep={handleImageUpload}
        isFirstStep={isFirstStep}
        isFinalStep={isFinalStep}
        isLoading={isLoading}
      />
    </OnboardingLayout>
  );
};
