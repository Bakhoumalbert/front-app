import { Container } from "@/src/ui/components/container/Container";
import { Typography } from "@/src/ui/design-system/typography/Typography";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

interface featuresListInterface {
    imagePath: string,
    imageAlt: string,
    title: string,
    description: string,
}

const featureData: featuresListInterface[] = [
    {
        imagePath: "./assets/svg/light-bulb.svg",
        imageAlt: "Illustration",
        title: "Inspire-toi",
        description: "Trouve de l'inspiration, code et publier tes projets",
    },
    {
        imagePath: "./assets/svg/like.svg",
        imageAlt: "Illustration",
        title: "Note les projets",
        description: "Note les idées et les réalisations des codeurs"
    },
    {
        imagePath: "./assets/svg/comment.svg",
        imageAlt: "Illustration",
        title: "Donne ton avis",
        description: "Envoie et reçois des feedbacks constructifs (ou fais toi descendre)"
    },
]


export const ProjetHighlight = () => {

    const featuredList = featureData.map((feature) => (
        <div key={uuidv4()} className="flex max-w-sm items-center justify-center gap-6">
            {/* <Image src={feature.imagePath} alt={feature.imageAlt} fill className="object-scale-down blur-2xl" /> */}
            <Image src={feature.imagePath} alt={feature.imageAlt} width={70} height={45} className="" />
            <div className="flex flex-col max-w-xl">
                <Typography variant="lead" component="h3" weight="medium" className="mb-2.5">
                    {feature.title}
                </Typography>
                <Typography variant="caption3" theme="gray-600" component="p" className="">
                    {feature.description}
                </Typography>
            </div>
        </div>
    ))

    return (
        <div className="bg-gray-300">
            <Container className="flex gap-14 py-20">
                {featuredList}
            </Container>
        </div>
    )
}
