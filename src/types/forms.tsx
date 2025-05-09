export interface FormsType {
    errors: any;
    control?: any;
    onSubmit: any;
    isLoading: boolean;
    register: any;
    handleSubmit: any;
}
export interface RegisterFormFielsType {
    email: string,
    password: string,
    how_did_hear: string,
}
export interface LoginFormFielsType {
    email: string,
    password: string,
}
export interface ForgetPasswordFormFielsType {
    email: string
}

export interface OnboardingProfileFormFielsType {
    displayName: string,
    expertise: string,
    biographie: string
}

export interface UserProfileFormFielsType {
    displayName: string,
    expertise: string,
    biographie: string,
    github: string,
    linkedin: string
}

export interface ProjetFormFielsType {
    status: string,
    titre: string,
    projet_url: string,
    description: string,
    stack: string,
    linkedin: string
}