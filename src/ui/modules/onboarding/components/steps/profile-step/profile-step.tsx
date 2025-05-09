import { BaseComponentProps } from "@/src/types/onboarding-steps-list";
import { OnboardingFooter } from "../../footer/onboarding-footer";
import { OnboardingTabs } from "../../tabs/onboardingTabs";
import { OnboardingLayout } from "../../onboarding-layout";
import { Typography } from "@/src/ui/design-system/typography/Typography";
import { Container } from "@/src/ui/components/container/Container";
import { ProfileStepForm } from "./profile-step-form";
import { useToggle } from "@/src/hooks/use-toggle";
import { OnboardingProfileFormFielsType } from "@/src/types/forms";
import { SubmitHandler, useForm } from "react-hook-form";
import { firestoreUpdateDocument } from "@/src/api/firestore";
import { useAuth } from "@/src/context/AuthUserContext";
import { toast } from "react-toastify";
import { updateUserIdentification } from "@/src/api/authentification";

export const ProfileStep = ({
  nextStep,
  prevStep,
  isFinalStep,
  isFirstStep,
  stepsList,
  getCurrentStep,
}: BaseComponentProps) => {
  const { value: isLoading, setValue: setIsLoading } = useToggle({
    initial: false,
  });
  const { authUser } = useAuth();

  const {
    register,
    control,
    handleSubmit,
    setError,
    setValue,
    reset,
    formState: { errors },
  } = useForm<OnboardingProfileFormFielsType>();

  console.log("user.document : ", authUser.userDocument);
  const { displayName, expertise, biographie } = authUser.userDocument;


  const handleUpdateUserDocument = async (
    formData: OnboardingProfileFormFielsType
  ) => {
    const { error } = await firestoreUpdateDocument(
      "users",
      authUser.uid,
      formData
    );

    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    setIsLoading(false);
    reset();
    nextStep();
  };

  const onSubmit: SubmitHandler<OnboardingProfileFormFielsType> = async (
    formData
  ) => {
    setIsLoading(true);

    // Si on fait un retour après l'envoie le formulaire on vérifie l'état des  des donées
    if (
      displayName !== formData.displayName ||
      expertise !== formData.expertise ||
      biographie !== formData.biographie
    ) {
      //...
      // Le premier displayName fait réference à à celui du userDocument
      // le deuxieme à celui des informations primaire (a la racine)
      if (
        displayName !== formData.displayName ||
        authUser.displayName !== formData.displayName
      ) {
        const data = {
          displayName: formData.displayName,
        };
        // send function updateUserIdentification
        // const { error } = await updateUserIdentification(authUser.uid, data);

        // if (error) {
        //   setIsLoading(false);
        //   toast.error(error.message);
        //   return;
        // }
      }
      handleUpdateUserDocument(formData);
    }
    setIsLoading(false);
    nextStep();
  };

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
                Présente-toi !
              </Typography>
              <Typography variant="body-base" component="p" theme="gray">
                Dis-nous tout sur toi ! Remplis notre formulaire de présentation
                pour qu'on puisse mieux te connaître. On veut savoir qui tu es,
                ce que tu fais et comment t'as atterri ici. Plus on en saura sur
                toi, mieux on pourra personnaliser ton expérience sur notre
                plateforme.
              </Typography>
            </div>
          </div>
          <div className="flex w-full col-span-6 justify-end">
            <ProfileStepForm
              form={{
                errors,
                control,
                isLoading,
                register,
                handleSubmit,
                onSubmit,
              }}
            />
          </div>
        </Container>
      </div>
      <OnboardingFooter
        prevStep={prevStep}
        nextStep={handleSubmit(onSubmit)}
        isFirstStep={isFirstStep}
        isFinalStep={isFinalStep}
        isLoading={isLoading}
      />
    </OnboardingLayout>
  );
};
