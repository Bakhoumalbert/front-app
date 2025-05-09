import { Container } from "@/src/ui/components/container/Container"
import { Button } from "@/src/ui/design-system/button/Button"
import { Typography } from "@/src/ui/design-system/typography/Typography"
import Image from "next/image"
import { RiArrowRightLine, RiCheckboxCircleLine } from "react-icons/ri"

export const HighlightListView = () => {
    return (
        <Container className="py-24 space-y-10 ">
            <div className="flex justify-center gap-24">
                <div className="w-[520px] h-[350px] relative mt-10">
                    <Image fill src="assets/svg/cake.svg" alt="illudtration d'un gateau ..." />
                </div>
                <div className="max-w-md space-y-7 ">
                    <Typography variant="h3" component="h2" className="mb-2.5">
                        De novice à expert en un clin d'oeil !
                    </Typography>
                    <div className="space-y-3">
                        <ListPoint>
                            Progresse rapidement.
                        </ListPoint>
                        <ListPoint>
                            Inspire-toi.
                        </ListPoint>
                        <ListPoint>
                            Gagne de l'assurance.
                        </ListPoint>
                    </div>
                    <div className="relative inline-block">
                        <Button baseUrl="" icon={{ icon: RiArrowRightLine }} iconPosition="right">Let's go</Button>
                        <Image width={25} height={27} src="assets/svg/cursor.svg" alt="un cursor ..." className="absolute right-7 -bottom-5" />
                    </div>
                </div>
            </div>
            <div className="flex flex-row-reverse justify-center gap-24">
                <div className="w-[520px] h-[350px] relative mt-10">
                    <Image fill src="assets/svg/top.svg" alt="illudtration d'un gateau ..." />
                </div>
                <div className="max-w-md space-y-7 ">
                    <Typography variant="h3" component="h2" className="mb-2.5">
                        Booste ta future carriere en tant qu'étudiant
                    </Typography>
                    <div className="space-y-3">
                        <ListPoint>
                            Partage tes projets, obtiens des feedbacks.
                        </ListPoint>
                        <ListPoint>
                            Connecte-toi, élargis ton réseau pro!
                        </ListPoint>
                        <ListPoint>
                            Reste inspiré, motivé avec notre communauté.
                        </ListPoint>
                    </div>
                    <div className="relative inline-block">
                        <Button variant="secondary" baseUrl="" icon={{ icon: RiArrowRightLine }} iconPosition="right">Démarrer</Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

interface Props {
    children: React.ReactNode
}

const ListPoint = ({ children }: Props) => (
    <div className="flex items-start gap-2">
        <RiCheckboxCircleLine size={24} className="mt-0.5 text-secondary" />
        <Typography variant="body-lg" component="span" className="mb-2.5">
            {children}
        </Typography>
    </div>
)