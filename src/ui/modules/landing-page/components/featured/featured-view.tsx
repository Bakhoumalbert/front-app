import { Container } from "@/src/ui/components/container/Container";
import { SocialNetworksButtons } from "@/src/ui/components/navigation/social-networks-buttons";
import { Button } from "@/src/ui/design-system/button/Button";
import { Typography } from "@/src/ui/design-system/typography/Typography";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";

interface featuresListInterface {
    imagePath: string,
    imageAlt: string,
    title: string,
    description: string,
}

const featureData: featuresListInterface[] = [
    {
        imagePath: "./assets/svg/diskette.svg",
        imageAlt: "Illustration",
        title: "Ressources",
        description: "Consulte et partage des ressources",
    },
    {
        imagePath: "./assets/svg/joystick.svg",
        imageAlt: "Illustration",
        title: "Entrainement",
        description: "Entraine toi à devenir meilleur et trouve de l'inspiration"
    },
    {
        imagePath: "./assets/svg/loudspeaker.svg",
        imageAlt: "Illustration",
        title: "Visibilité",
        description: "Expose tess projets et crée toi des opportunités !"
    },
    {
        imagePath: "./assets/svg/compass.svg",
        imageAlt: "Illustration",
        title: "Relations",
        description: "Connecte-toi avec tes amis et booste ta carrière !",
    }
]


export const FeaturedView = () => {

    const featuredList = featureData.map((feature) => (
        <div key={uuidv4()} className="flex flex-col items-center justify-center bg-white rounded p-7">
            <div className="relative w-[130px] h-[130px] rounded-full mb-6 p-10 overflow-hidden">
                <Image src={feature.imagePath} alt={feature.imageAlt} fill className="object-scale-down blur-2xl" />
                <Image src={feature.imagePath} alt={feature.imageAlt} fill className="object-scale-down" />
            </div>
            <Typography variant="lead" component="h3" weight="medium" className="text-center mb-2.5">
                {feature.title}
            </Typography>
            <Typography variant="body-base" theme="gray" component="p" className="text-center">
                {feature.description}
            </Typography>
        </div>
    ))

    return (
        <div className="bg-gray-300">
            <Container className="grid grid-cols-12 gap-24 py-24">
                <div className="grid grid-cols-2 col-span-7 gap-7">{featuredList}</div>
                <div className="col-span-5 flex flex-col justify-between gap-10">
                    <div className="">
                        <Typography variant="h4" component="h4" className="mb-5">
                            L’endroit le plus cool pour apprendre et trouver de l’inspiration
                        </Typography>
                        <Typography variant="body-lg" theme="gray" component="p" className="mb-8">
                            Du partage, des connexions et des formations notre app gére tout ça pour toi. Rejoins le club et grimpe en grade, Let's go !
                        </Typography>
                        <Button variant="secondary" baseUrl="/#" icon={{ icon: RiArrowRightLine }} iconPosition="right">Commencer</Button>
                    </div>
                    <div className="">
                        <Typography variant="caption3" theme="gray" component="div" className="mb-8">
                            Nos Réseaux sociaux
                        </Typography>
                        <SocialNetworksButtons className="" theme="accent" />
                    </div>
                </div>
            </Container>
        </div>
    )
}
