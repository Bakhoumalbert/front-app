import { Button } from "../../design-system/button/Button"
import { Typography } from "../../design-system/typography/Typography"
import { IoIosAddCircle } from "react-icons/Io";
import { PublierProjetForm } from "./components/publier-projet/mesprojets.form";
import { FormsType } from "@/src/types/forms";

interface Props {
    form: FormsType,
}

export const MesProjetPageView = ({ form }: Props) => {
    return (
        <div className="">
            <div className="flex justify-between">
                <div className="w-full max-w-xl space-y-5">
                    <Typography variant="h1" component="h1" className="mx-w-lg">
                        Mes projets
                    </Typography>
                    <Typography variant="h5" component="h3" theme="gray" className="">
                        Montre nous ce que tu sais faire !
                    </Typography>
                </div>
                <div className="flex pt-8">
                    <div className="">
                        <Button icon={{ icon: IoIosAddCircle }} iconPosition="left" baseUrl="">Publier un projet</Button>
                    </div>
                </div>
            </div>
            <div className="absolute flex justify-center ">
                <PublierProjetForm form={form} />
            </div>
        </div>
    )
}
