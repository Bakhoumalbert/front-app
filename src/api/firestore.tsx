import { doc, setDoc, updateDoc } from "firebase/firestore"
import { db } from "../config/firebase-config"
import { FirebaseError } from "firebase/app"
import { updateCurrentUser } from "firebase/auth"

export const FirestoreCreateDocument = async (collectionName: string, documentID: string, data: object) => {
  try {
    // Creation de la refference du document 
    const documentRef = doc(db, collectionName, documentID)
    await setDoc(documentRef, data)
    // On attends aucune informations venant de firebase
    return { data: true }
  } catch (error) {

    // Importation d'un type d'error venant de firebase
    const firebaseError = error as FirebaseError

    //... @todo format error
    return {
      error: {
        code: firebaseError.code,
        message: firebaseError.message
      }
    }
  }

}


export const firestoreUpdateDocument = async (collectionName: string, documentID: string, data: object) => {
  try {
    // Creation de la refference du document 
    const documentRef = doc(db, collectionName, documentID)

    await updateDoc(documentRef, data)
    // On attends aucune informations venant de firebase
    return { data: true }
  } catch (error) {

    // Importation d'un type d'error venant de firebase
    const firebaseError = error as FirebaseError

    //... @todo format error
    return {
      error: {
        code: firebaseError.code,
        message: firebaseError.message
      }
    }
  }

}



export const updateUserIdentificationData = async (collectionName: string, documentID: string, data: object) => {
  try {
    // Creation de la refference du document 
    const documentRef = doc(db, collectionName, documentID)

    //await updateCurrentUser(documentRef, data)
    // On attends aucune informations venant de firebase
    return { data: true }
  } catch (error) {

    // Importation d'un type d'error venant de firebase
    const firebaseError = error as FirebaseError

    //... @todo format error
    return {
      error: {
        code: firebaseError.code,
        message: firebaseError.message
      }
    }
  }

}
