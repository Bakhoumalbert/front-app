import { User, onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../config/firebase-config";
import { UserDocument, UserInterface } from "../types/user";

export default function UseFirebaseAuth() {

    const [authUser, setAuthUser] = useState<UserInterface | null>(null);
    // Gestion de l'état de chargement des informations de l'utilisateur
    const [authUserIsLoading, setAuthUserIsLoading] = useState<boolean>(true);

    // Reload authUsertData Function
    const reloadAuthUserData = () => {
        // s'applique à l'utilisateur couramment connecter
        if (auth.currentUser) {
            auth.currentUser.reload().then(() => {
                authStateChanged(auth.currentUser)
            })
        }
    }

    // Fonction de formattage des informations primaires du user lors qu'il y a un user
    const formatAuthUser = (user: UserInterface) => ({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        emailVerified: user.emailVerified,
        phoneNumber: user.phoneNumber,
        photoURL: user.photoURL,
    })

    // Fonction de récupération des données du user de firestore
    const getUserDocument = async (user: UserInterface) => {
        if (auth.currentUser) {
            // get document firestore
            const documentRef = doc(db, "users", auth.currentUser.uid);
            const compactUser = user;

            onSnapshot(documentRef, async (doc) => {
                // récuperation des données primaires et/ou secondaire
                if (doc.exists()) {
                    compactUser.userDocument = doc.data() as UserDocument;
                }
                setAuthUser((prevAuthUser) => (
                    {
                        ...prevAuthUser,
                        ...compactUser
                    }
                ));
                setAuthUserIsLoading(false);
            });
        }
    }

    // authState peut avoir un type de firebase (User)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const authStateChanged = async (authState: UserInterface | User | null) => {
        // Si on a pas de user connecté
        if (!authState) {
            setAuthUser(null);
            setAuthUserIsLoading(false);
            return;
        }
        // Si on a un user connecté
        setAuthUserIsLoading(true);
        const formattedUser = formatAuthUser(authState);

        // avoir les informations de l'utilisateur
        await getUserDocument(formattedUser)
    }


    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, authStateChanged);

        // On va jouer la fonction avec le return suivant
        return () => unsubscribe()
    }, [authStateChanged])


    return {
        authUser,
        authUserIsLoading,
        reloadAuthUserData
    }
}
