import errors from "@/src/config/locales/errors.json";

type FirebaseErrorType = {
    [key: string]: string
}
type FirebaseErrors = {
    [key: string]: FirebaseErrorType
}

const firebaseErrors: FirebaseErrors = {
    ...errors,
    an_unknown_error_has_occurred: {
        an_unknown_error_has_occurred: errors.an_unknown_error_has_occurred
    }
}


export function getFirebaseErrorMessage(method: string, errorCode: string): string {
    const defaultErrorMessage = errors.an_unknown_error_has_occurred

    // Si on ne retrouve pas le contexte (la methode) d'erreur
    if(!firebaseErrors[method]) {
        return defaultErrorMessage;
    }
    // Si on retrouve la methode et on ne retrouve pas le code d'erreur
    if(!firebaseErrors[method][errorCode]) {
        return defaultErrorMessage;
    }
    // Ici on a la methode et le code d'erreur
    const errorMessage = firebaseErrors[method][errorCode];

    return errorMessage;
    
}