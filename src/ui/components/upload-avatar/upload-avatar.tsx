import { RiCameraFill } from "react-icons/ri";
import { Avatar } from "../../design-system/avatar/Avatar";
import clsx from "clsx";
import { useAuth } from "@/src/context/AuthUserContext";

interface Props {
    handleImageSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
    imagePreview: string | ArrayBuffer | null;
    uploadProgress: number;
    isLoading: boolean;
    variant?: "primary" | "outline"
}

export const UploadAvatar = ({
    handleImageSelect,
    imagePreview,
    uploadProgress,
    isLoading,
    variant = "primary"
}: Props) => {

    const { authUser } = useAuth()
    // Définition de notre barre de progression
    const uploadProgressBarStyle = `fixed top-0 left-0 w-full h-1 bg-primary animate ${uploadProgress > 0 ? "" : "hidden"}`

    return (
        <div className="flex items-center gap-5">
            {/* Defini */}
            <div className={uploadProgressBarStyle} style={{ width: `${uploadProgress}%` }} />
            <label
                className={clsx(
                    isLoading ? "cursor-not-allowed" : "cursor-pointer",
                    variant === "primary" && "bg-primary hover:bg-primary-400/50 text-white",
                    variant === "outline" && "bg-white hover:bg-gray-400/50 border border-gray-500 text-gray-800",
                    "inline-block  rounded px-[18px] py-[15px] text-caption2 font-medium cursor-pointer animate"
                )}
            >
                <div className="flex items-center gap-2">
                    <RiCameraFill />
                    <span>Choisir un fichier</span>
                </div>
                <input disabled={isLoading} type="file" className="hidden" onChange={handleImageSelect} />
            </label>
            <Avatar
                src={
                    imagePreview
                        ? typeof imagePreview === "string"
                            ? imagePreview
                            : String(imagePreview)
                        : authUser.userDocument.photoURL ? authUser.userDocument.photoURL
                            : "/assets/svg/camera.svg"
                }
                size="extra-large"
                alt="Avatar"
                isLoading={isLoading}
            />
        </div >
    );
};
