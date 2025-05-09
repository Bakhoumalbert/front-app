export interface BaseComponentProps {
    nextStep: () => void;
    prevStep: () => void;
    isFirstStep: () => boolean;
    isFinalStep: () => boolean; 
    stepsList: onboardingStepsListInterface[];
    getCurrentStep: () => onboardingStepsListInterface | undefined;
}
export interface onboardingStepsListInterface {
    id: number,
    label: string,
    component: {
        step: React.ComponentType<BaseComponentProps>,

    }
}