import { useAuth } from "@/src/context/AuthUserContext";
import { FormsType } from "@/src/types/forms";
import { Button } from "@/src/ui/design-system/button/Button";
import { Input } from "@/src/ui/design-system/forms/input";
import { Textarea } from "@/src/ui/design-system/forms/textarea";
import { Typography } from "@/src/ui/design-system/typography/Typography";

interface Props {
    form: FormsType;
}

export const PublierProjetForm = ({ form }: Props) => {
    const { register, errors, isLoading, onSubmit, handleSubmit } = form;

    return (
        <form className="w-full space-y-4">
            <div className="flex justify-between pb-5">
                <div className="w-full space-y-5">
                    <Typography variant="h4" component="h2" className="mx-w-lg">
                        Publier un nouveau projet :
                    </Typography>
                    <Typography variant="body-sn" component="p" theme="gray" className="">
                        Prêt à faire passer ton génie au niveau supérieur ! Pulbier ton
                        projet maintenant et laisse les autres ingénieurs être ébloui par
                        tes compétences !
                    </Typography>
                </div>
            </div>

            <div className=" space-y-4">
                <Input
                    label="Titre du projet"
                    id="titre"
                    isLoading={isLoading}
                    placeholder="Portfolio de Dame Diop"
                    type="text"
                    register={register}
                    errors={errors}
                    errorMsg="Tu dois renseigner le titre du projet"
                />
                <Textarea
                    label="Description"
                    rows={8}
                    id="description"
                    isLoading={isLoading}
                    placeholder="Donne une description détaillée de ton projet, objectif / inspiration / doutes / succès..."
                    register={register}
                    errors={errors}
                    errorMsg="Tu dois donner une description de ton projet"
                    required={false}
                />
                <Input
                    label="URL du projet"
                    id="projet_url"
                    isLoading={isLoading}
                    placeholder="https://www.dame.diop.com"
                    type="url"
                    register={register}
                    errors={errors}
                    errorMsg="Tu dois indiquer l'url du projet"
                    required={false}
                />
            </div>
            <div className="flex justify-end">
                <Button isLoading={isLoading} type="submit">
                    Enregister
                </Button>
            </div>
        </form>
    );
};
