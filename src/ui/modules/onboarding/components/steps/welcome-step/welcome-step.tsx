import { BaseComponentProps } from "@/src/types/onboarding-steps-list";
import { OnboardingFooter } from "../../footer/onboarding-footer";
import { Container } from "@/src/ui/components/container/Container";
import { Typography } from "@/src/ui/design-system/typography/Typography";
import Image from "next/image";
import { OnboardingTabs } from "../../tabs/onboardingTabs";
import { OnboardingLayout } from "../../onboarding-layout";

export const WelcomeStep = ({
  nextStep,
  isFinalStep,
  isFirstStep,
  getCurrentStep,
  stepsList,
}: BaseComponentProps) => {
  return (
    <OnboardingLayout>
      <div className="h-full overflow-auto">
        <Container className="grid h-full grid-cols-12">
          <div className="relative z-10 flex items-center h-full col-span-6 py-10">
            <div className="w-full space-y-5 pb-4.5">
              <OnboardingTabs
                tabs={stepsList}
                getCurrentStep={getCurrentStep}
              />
              <Typography variant="h2" component="h1">
                Bienvenus sur l'appli du Club Fédérateur des Sciences de l'UAM
              </Typography>
              <Typography variant="body-base" component="p" theme="gray" className="text-justify">
                Anciennement nommé Club des sciences et techniques de
                l’ingénieur (CSTI), le Club Fédérateur des Sciences(CFS) a été
                créé le mercredi 02 février 2022 à l'Université Amadou Makhtar
                Mbow(UAM). Le Club Fédérateur des Sciences de l'UAM (CFS-UAM en
                abréviation) se veut indispensable à la communauté universitaire
                et pas seulement à celle de l’UAM mais tant au niveau national
                qu'international. Le club se veut un outil complémentaire aux
                différentes formations que nous sommes en train d’acquérir dans
                les grandes écoles de l’UAM et ailleurs.
              </Typography>
            </div>
          </div>
          <div className="flex items-center h-full col-span-6">
            <div className="w-full">
              <Image
                src="./assets/svg/rocket1.svg"
                alt="Illustration d'une fusée pour matérialiser l'évolution du level du CFS"
                width={811}
                height={596}
              />
            </div>
          </div>
        </Container>
      </div>
      <OnboardingFooter
        nextStep={nextStep}
        isFirstStep={isFirstStep}
        isFinalStep={isFinalStep}
      />
    </OnboardingLayout>
  );
};
