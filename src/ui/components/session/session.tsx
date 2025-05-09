import { useAuth } from "@/src/context/AuthUserContext"
import { ScreenSpinner } from "../../design-system/spinner/screen-spinner"
import { useRouter } from "next/router";
import { sessionStatusTypes } from "@/src/types/session-status-types";
import { GUEST, REGISTERED } from "@/src/lib/session-status";

interface Props {
    children: React.ReactNode,
    sessionStatus?: sessionStatusTypes
}
export const Session = ({ children, sessionStatus }: Props) => {
    const router = useRouter()
    const { authUser, authUserIsLoading } = useAuth();



    const onboardingIsCompleted = authUser?.userDocument?.onboardingIsCompleted

    const shouldRedirectToOnboarding = () => {
        return (
            !authUserIsLoading &&
            authUser &&
            !onboardingIsCompleted &&
            router.asPath !== "/onboarding"
        )
    }

    const shouldNotRedirectToOnboarding = () => {
        return (
            !authUserIsLoading &&
            authUser &&
            onboardingIsCompleted &&
            router.asPath === "/onboarding"
        )
    }

    if (shouldRedirectToOnboarding()) {
        router.push("/onboarding")
        return <ScreenSpinner />
    }

    if (shouldNotRedirectToOnboarding()) {
        router.push("/mon-espace")
        return <ScreenSpinner />
    }

    if (sessionStatus === GUEST && !authUserIsLoading) {
        if (!authUser) {
            return <>{children}</>
        } else {
            router.push("/mon-espace")
        }
    }

    if (sessionStatus === REGISTERED && !authUserIsLoading) {
        if (authUser) {
            return <>{children}</>
        } else {
            router.push("/connexion")
        }
    }

    if (!sessionStatus && !authUserIsLoading) {
        return <>{children}</>
    }
    return <ScreenSpinner />
}
