import { Container } from "@/src/ui/components/container/Container"
import { Typography } from "@/src/ui/design-system/typography/Typography"
import Image from "next/image"
import { RiPlayCircleLine } from "react-icons/ri"

export const CurrentCoursView = () => {
    return (
        <div className="bg-gray-300">
            <Container className="py-24 text-center">
                <Typography variant="h2" component="h2" className="mb-2.5">
                    Formations React Js
                </Typography>
                <Typography variant="lead" component="h3" className="mb-5">
                    Apprends à utiliser l’éditeur de texte Word
                </Typography>
                <Typography variant="caption3" component="p" theme="gray" className="mb-16">
                    Si tu veux un CV plus belle que ton ex, suis cette formation compléte !
                </Typography>
                <a href="/#" target="_blank">
                    <div className="relative bg-gray-400 rounded h-[626px]">
                        <div className="relative flex flex-col items-center justify-center gap-2 h-full bg-gray z-10 text-white rounded opacity-0 hover:opacity-95 animate">
                            <RiPlayCircleLine size={42} />
                            <Typography variant="caption2" theme="white" className="uppercase" weight="medium">
                                Lire la formation
                            </Typography>
                        </div>
                        <Image fill src="assets/images/react-js.jpg" alt="" className="object-cover object-center rounded" />
                    </div>
                </a>
            </Container>
        </div>
    )
}
