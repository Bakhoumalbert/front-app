import { FormsType } from "@/src/types/forms";
import { Input } from "@/src/ui/design-system/forms/input";
import { Textarea } from "@/src/ui/design-system/forms/textarea";

interface Props {
    form: FormsType;
}

export const ProfileStepForm = ({ form }: Props) => {
    const { errors, control, isLoading, register, handleSubmit, onSubmit } = form;

    return (
        <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <Input
                label="Pseudo"
                id="displayName"
                placeholder="Indique ton pseudo"
                type="email"
                isAutocompleted={false}
                isLoading={isLoading}
                errors={errors}
                errorMsg="Ton pseudo est requis !"
                register={register}
            />
            <Input
                label="Spécialité"
                id="expertise"
                placeholder="Développeur FullStack freelance..."
                type="email"
                isAutocompleted={false}
                isLoading={isLoading}
                errors={errors}
                errorMsg="L'email est requis !"
                register={register}
            />
            <Textarea
                label="Biographie"
                id="biographie"
                placeholder="Indiquer une courte description de toi et de ton parcours..."
                isAutocompleted={false}
                isLoading={isLoading}
                errors={errors}
                errorMsg="La description est requis !"
                register={register}
            />

        </form>
    );
};
