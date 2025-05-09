import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth as authInstance } from "../config/firebase-config";
import { FirebaseError } from "firebase/app";
import { getFirebaseErrorMessage } from "../utils/getFirebaseErrorMessage";

// Composant de formatage de la fonction de création de compte
export const firebaseCreateUser = async (email: string, password: string) => {
  // Cette fonction va soliccité firebase pour la creation d'un user
  try {
    // L'application firebase torune en asynchrone
    const userCredential = await createUserWithEmailAndPassword(
      authInstance,
      email,
      password
    );
    return { data: userCredential.user };
  } catch (error) {
    // Importation d'un type d'error venant de firebase
    const firebaseError = error as FirebaseError;

    const errorMessage = getFirebaseErrorMessage("createUserWithEmailAndPassword", firebaseError.message)
    return {
      error: {
        code: firebaseError.code,
        message: errorMessage,
      },
    };
  }
};

export const firebaseSignInUser = async (email: string, password: string) => {
  // Cette fonction va soliccité firebase pour la creation d'un user
  try {
    // L'application firebase torune en asynchrone
    const userCredential = await signInWithEmailAndPassword(
      authInstance,
      email,
      password
    );
    // En cas de succes, la fonction eretourne les données
    return { data: userCredential.user };
  } catch (error) {
    // Importation d'un type d'error venant de firebase
    const firebaseError = error as FirebaseError;

    const errorMessage = getFirebaseErrorMessage("signInWithEmailAndPassword", firebaseError.message)
    return {
      error: {
        code: firebaseError.code,
        message: errorMessage,
      },
    };
  }
};

export const firebaselogoutUser = async () => {
  // Cette fonction va soliccité firebase pour la creation d'un user
  try {
    // L'application firebase tourne en asynchrone
    await signOut(authInstance);
    // On attends aucune données
    return { data: true };
  } catch (error) {
    // Importation d'un type d'error venant de firebase
    const firebaseError = error as FirebaseError;

    const errorMessage = getFirebaseErrorMessage("signOut", firebaseError.message)
    return {
      error: {
        code: firebaseError.code,
        message: errorMessage,
      },
    };
  }
};

export const sendEmailToResetPassword = async (email: string) => {
  // Cette fo,nction va soliccité firebase pour la creation d'un user
  try {
    // L'application firebase torune en asynchrone
    await sendPasswordResetEmail(authInstance, email);
    // On attends aucune informations venant de firebase
    return { data: true };
  } catch (error) {
    // Importation d'un type d'error venant de firebase
    const firebaseError = error as FirebaseError;

    const errorMessage = getFirebaseErrorMessage("sendPasswordResetEmail", firebaseError.message)
    return {
      error: {
        code: firebaseError.code,
        message: errorMessage,
      },
    };
  }
};

// Fonction d'envoie de mail de vérification
export const sendEmailVerificationProcedure = async () => {
  // Cette fo,nction va soliccité firebase pour la creation d'un user
  if (authInstance.currentUser) {
    try {
      // L'application firebase torune en asynchrone
      await sendEmailVerification(authInstance.currentUser);
      // On attends aucune informations venant de firebase
      return { data: true };
    } catch (error) {
      // Importation d'un type d'error venant de firebase
      const firebaseError = error as FirebaseError;

      const errorMessage = getFirebaseErrorMessage("sendEmailVerification", firebaseError.message)
      return {
        error: {
          code: firebaseError.code,
          message: errorMessage,
        },
      };
    }
  } else {
    return {
      error: {
        code: "unknow",
        message: "Une erreur est survenue",
      }
    }
  }
};

// Fonctions de mise à jour des données de l'utilisateur 
export const updateUserIdentification = async (uid: string, data: any) => {
  // A noter que notre fonction n'est pas encore déployée
  // L'url va correspondre à celle obtenu lors du déploiement
  const result = await fetch("https://us-central1-coderapp.cloudfunctions.net/updateUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      uid: uid,
      data: data
    })
  });
  if (!result.ok) {
    const errorResponse = await result.json();
    const firebaseError = errorResponse as FirebaseError;

    const errorMessage = getFirebaseErrorMessage("updateUserIdentificationData", firebaseError.message)
    return {
      error: {
        code: firebaseError.code,
        message: errorMessage,
      },
    };
  }
  return { data: true }
};

