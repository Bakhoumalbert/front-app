import { BaseComponentProps } from "@/src/types/onboarding-steps-list";

export const OnboardingView = ({
  getCurrentStep,
  nextStep,
  prevStep,
  isFirstStep,
  isFinalStep,
  stepsList,
}: BaseComponentProps) => {
  // Vérification de la presence de composant
  if (getCurrentStep()?.component) {
    const Component = getCurrentStep()?.component.step;
    return (
      <div>
        {Component && (
          <Component
            getCurrentStep={getCurrentStep}
            nextStep={nextStep}
            prevStep={prevStep}
            isFirstStep={isFirstStep}
            isFinalStep={isFinalStep}
            stepsList={stepsList}
          />
        )}
      </div>
    );
  }
  return null;
};
