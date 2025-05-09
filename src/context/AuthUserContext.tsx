import { UserDocument } from "../types/user"
import UseFirebaseAuth from "../hooks/use-firebase-auth"
import { createContext, useContext } from "react";
interface Props {
    children: React.ReactNode
}

const init = {
    uid: "",
    email: "",
    displayName: "",
    emailVerified: false,
    phoneNumber: "",
    photoURL: "",
    userDocument: {} as UserDocument
}

const authUserContext = createContext({
    authUser: init,
    authUserIsLoading: true,
    reloadAuthUserData: () => { }
})

export const AuthUserProvider = ({ children }: Props) => {

    const auth = UseFirebaseAuth();

    return (
        <authUserContext.Provider
            value={{
                authUser: auth.authUser as {
                    uid: string;
                    email: string;
                    displayName: string;
                    emailVerified: boolean;
                    phoneNumber: string;
                    photoURL: string;
                    userDocument: UserDocument;
                },
                authUserIsLoading: auth.authUserIsLoading,
                reloadAuthUserData: auth.reloadAuthUserData
            }}
        >
            {children}
        </authUserContext.Provider>
    )
}

export const useAuth = () => useContext(authUserContext);