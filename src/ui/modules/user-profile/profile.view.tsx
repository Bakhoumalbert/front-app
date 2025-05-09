
import { ProfileForm } from "./profil.form";
import { Typography } from "../../design-system/typography/Typography";
import { FormsType } from "@/src/types/forms";

interface Props {
    form: FormsType,
    imagePreview: string | ArrayBuffer | null
    handleImageSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
    uploadProgress: number
}
export const ProfileView = ({ form, handleImageSelect,
    imagePreview,
    uploadProgress }: Props) => {
    return (
        <div className="space-y-5">
            <Typography variant="h3" component="h1">
                Mon compte
            </Typography>
            <ProfileForm
                handleImageSelect={handleImageSelect}
                imagePreview={imagePreview}
                uploadProgress={uploadProgress}
                form={form}
            />
        </div>
    )
}
