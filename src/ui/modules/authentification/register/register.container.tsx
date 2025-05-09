import { RegisterFormFielsType } from "@/src/types/forms";
import { RegisterView } from "./register.view";
import { useForm, SubmitHandler } from "react-hook-form";
import { firebaseCreateUser, sendEmailVerificationProcedure } from "@/src/api/authentification";
import { toast } from 'react-toastify';
import { useToggle } from "@/src/hooks/use-toggle";
import { FirestoreCreateDocument } from "@/src/api/firestore";

export const RegisterContainer = () => {

  const { value: isLoading, setValue: setIsLoading } = useToggle({ initial: false });

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<RegisterFormFielsType>();

  // Fonction d'envoie du document de l'utilisateur vers firestore lors de l'inscription
  const handleCreateUserDocument = async (collectionName: string, documentID: string, document: object) => {
    const { error } = await FirestoreCreateDocument(collectionName, documentID, document);
    if (error) {
      toast.error(error.message);
      setIsLoading(false)
      return;
    }
    toast.success("Bienvenue sur l'app des codeurs de l'uam")
    setIsLoading(false)
    reset()
    // ... @todo send email confirmation procedure
    sendEmailVerificationProcedure()
  }

  const handleCreateUserAuthentication = async ({ email, password, how_did_hear }: RegisterFormFielsType) => {
    // cette fonction fait un traitement vers notre api pour vérification de l'existance du user  
    const { error, data } = await firebaseCreateUser(email, password);

    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    // formattage des informations à enregistrer
    const userDocument = {
      email: email,
      how_did_hear: how_did_hear,
      uid: data.uid,
      creation_date: new Date(),
    }
    handleCreateUserDocument("users", data.uid, userDocument)

  };

  // Le submit va déclencher le handleCreateUserAuthentication (fonction de creation de user) que si on n'a pas d'erreur de saisie
  const onSubmit: SubmitHandler<RegisterFormFielsType> = async (formData) => {
    setIsLoading(true)

    const { password, email } = formData;

    // Vérification de l'email uam.edu.sn
    const emailRegex = /@uam\.edu\.sn$/;

    if (password.length <= 5) {
      setError("password", {
        type: "manual",
        message: "Ton mot de passe doit comporter au minimum 6 caractéres",
      });
      return;
    }

    if (!emailRegex.test(email)) {
      setIsLoading(false);
      toast.error("L'email n'est pas de l'UAM");
      return;
    }

    handleCreateUserAuthentication(formData)
  };
  return (

    <RegisterView
      form={{ errors, isLoading, register, handleSubmit, onSubmit }}
    />
  );
};
