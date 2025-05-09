import { BaseComponentProps } from "@/src/types/onboarding-steps-list";
import { OnboardingFooter } from "../footer/onboarding-footer";
import { OnboardingLayout } from "../onboarding-layout";
import { Container } from "@/src/ui/components/container/Container";
import { Typography } from "@/src/ui/design-system/typography/Typography";
import { useAuth } from "@/src/context/AuthUserContext";
import { useToggle } from "@/src/hooks/use-toggle";
import { Logo } from "@/src/ui/design-system/logo/Logo";
import { useCallback, useRef, useEffect } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import { firestoreUpdateDocument } from "@/src/api/firestore";
import { toast } from "react-toastify";

export const FinalStep = ({ isFinalStep }: BaseComponentProps) => {
    const { authUser, reloadAuthUserData } = useAuth();
    const { value: isLoading, toggle } = useToggle();

    // Setting confetti animation
    const refAnimationInstance = useRef<((opts: any) => void) | null>(null);
    const getInstance = useCallback((instance: any) => {
        refAnimationInstance.current = instance;
    }, []);
    // Création des particules
    const makeShot = useCallback((particuleRatio: number, opts: any) => {
        if (refAnimationInstance.current !== null) {
            refAnimationInstance.current({
                ...opts,
                origin: { y: 0.7 },
                particleCount: Math.floor(200 * particuleRatio),
            });
        }
    }, []);

    // Commande lancement des confettis
    const fire = useCallback(() => {
        makeShot(0.25, {
            spread: 26,
            startVelocity: 55, // la vitesse de lancement des confettis
        });
        makeShot(0.2, {
            spread: 60,
        });
        makeShot(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8,
        });
        makeShot(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2,
        });
        makeShot(0.1, {
            spread: 120,
            startVelocity: 45,
        });
    }, [makeShot]);

    useEffect(() => {
        setTimeout(() => {
            fire()
        }, 50)
    }, [fire])


    const handleCloseOnboarding = async () => {
        toggle();
        const data = { onboardingIsCompleted: true }
        const { error } = await firestoreUpdateDocument("users", authUser.uid, data);
        if (error) {
            toggle();
            toast.error(error.message);
            return;
        }
        reloadAuthUserData()
        toggle();
    };

    return (
        <>
            <ReactCanvasConfetti
                refConfetti={getInstance}
                style={{
                    zIndex: 9999,
                    position: "fixed",
                    width: "100%",
                    height: "100%",
                    top: -80,
                    left: -0,
                }}
            />
            <OnboardingLayout>
                <div className="h-full overflow-auto">
                    <Container className="h-full">
                        <div className="relative z-10 flex items-center h-full py-10">
                            <div className="w-full max-w-xl mx-auto pb-4.5">
                                <div className="flex justify-center">
                                    <Logo size="very-large" />
                                </div>
                                <Typography variant="h1" component="h1" className="text-center">
                                    Félicitations!
                                </Typography>
                                <Typography
                                    variant="body-base"
                                    component="p"
                                    theme="gray"
                                    className="text-center"
                                >
                                    Tu fais maintenant partie de la tribu des singes codeurs !
                                    Nous sommes ravis de t'accueillir parmi nous. Tu vas pouvoir
                                    te lancer dans l'aventure, partager tes projets les plus fous
                                    et rencontrer des passionnés de la tech que toi. Alors
                                    prépare-toi, car notre club est prête à te secouer les
                                    branches et à te faire grimper au sommet de l'arbre de la science!
                                </Typography>
                            </div>
                        </div>
                    </Container>
                </div>
                <OnboardingFooter
                    nextStep={handleCloseOnboarding}
                    isFinalStep={isFinalStep}
                    isLoading={isLoading}
                />
            </OnboardingLayout>
        </>
    );
};
