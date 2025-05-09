import { useAuth } from "@/src/context/AuthUserContext"
import { FormsType } from "@/src/types/forms";
import { Button } from "../../design-system/button/Button";
import { Input } from "../../design-system/forms/input";
import { Textarea } from "../../design-system/forms/textarea";
import { UploadAvatar } from "../../components/upload-avatar/upload-avatar";
import { Typography } from "../../design-system/typography/Typography";

interface Props {
    form: FormsType,
    imagePreview: string | ArrayBuffer | null
    handleImageSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
    uploadProgress: number
}

export const ProfileForm = ({ form, handleImageSelect,
    imagePreview,
    uploadProgress, }: Props) => {
    const { authUser } = useAuth()

    const { register, errors, isLoading, onSubmit, handleSubmit } = form;

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">

            <div className="flex items-center justify-between p-5">
                <div>
                    <UploadAvatar
                        handleImageSelect={handleImageSelect}
                        imagePreview={imagePreview}
                        uploadProgress={uploadProgress}
                        isLoading={isLoading}
                        variant="outline"
                    />
                </div>
                <div className="flex items-end gap-1">
                    <Typography variant="h3" component="div">
                        773
                    </Typography>
                    <Typography variant="caption4" component="div" theme="gray-600" className="mb-3">
                        abonnés
                    </Typography>

                </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-6 space-y-4">
                    <Input
                        label="Nom d'utilisateur"
                        id="displayName"
                        isLoading={isLoading}
                        placeholder="Alou bakhoum"
                        type="text"
                        register={register}
                        errors={errors}
                        errorMsg="Tu dois renseigner un pseudo"
                    />
                    <Input
                        label="Expertise"
                        id="expertise"
                        isLoading={isLoading}
                        placeholder="Developpeur front-end React Freelance"
                        type="text"
                        register={register}
                        errors={errors}
                        errorMsg="Tu dois renseigner ton expertise"
                    />
                </div>
                <div className="col-span-6 space-y-4">
                    <Input
                        label="linkedin"
                        id="linkedin"
                        isLoading={isLoading}
                        placeholder="linkedin.com/albert"
                        type="url"
                        register={register}
                        errors={errors}
                        errorMsg="Tu dois indiquer ton profil Linkedin"
                        required={false}
                    />
                    <Input
                        label="Github"
                        id="github"
                        isLoading={isLoading}
                        placeholder="github.com/Bakhoumalbert"
                        type="url"
                        register={register}
                        errors={errors}
                        errorMsg="Tu dois indiquer ton profil github"
                        required={false}
                    />
                </div>
            </div>
            <Textarea
                label="Biographie"
                rows={4}
                id="biographie"
                isLoading={isLoading}
                placeholder="indique ta biographie..."
                register={register}
                errors={errors}
                errorMsg="Tu dois indiquer ta biographie"
                required={false}
            />
            <div className="flex justify-end">
                <Button
                    isLoading={isLoading}
                    type="submit"
                >
                    Enregister
                </Button>
            </div>
        </form>
    )
}
