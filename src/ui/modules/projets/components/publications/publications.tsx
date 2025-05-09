import { useAuth } from "@/src/context/AuthUserContext";
import { publicationsListInterface } from "@/src/types/publicationsListInterface";
import { Container } from "@/src/ui/components/container/Container"
import { Avatar } from "@/src/ui/design-system/avatar/Avatar";
import { Button } from "@/src/ui/design-system/button/Button"
import { Typography } from "@/src/ui/design-system/typography/Typography"
import Image from "next/image";
import { TfiAngleDown } from "react-icons/tfi";
import { v4 as uuidv4 } from "uuid";


const listPublication: publicationsListInterface[] = [
    {
        status: "publier",
        title: "Portfolio Albert",
        listImg: [{
            imagePath: "assets/images/mon-portfolio.png",
            imageAlt: "mon portfolio"
        }],
        description: "Page d'accueil de mon portefeuille",
        url: "https://monportfoliobakhoum.web.app/",
        stack: ["React", "firebase", "tailwindCSS"],
    },
    {
        status: "publier",
        title: "E-commerce",
        listImg: [{
            imagePath: "assets/images/e-commerce.png",
            imageAlt: "E-commerce"
        }],
        description: "Page d'accueil du site d'E-commerce",
        url: "#",
        stack: ["React", "tailwindCSS"],
    },
    {
        status: "publier",
        title: "SENETOUR",
        listImg: [{
            imagePath: "assets/images/senetour.png",
            imageAlt: "site touristique"
        }],
        description: "Page d'accueil d'un site touristique'",
        url: "#",
        stack: ["React", "tailwindCSS"],
    },
];

export const ProjetsPublications = () => {

    const { authUser } = useAuth()

    const recentPublication = (
        <div className="grid md:grid-cols-6 gap-7 pb-9" >
            {
                listPublication.slice(0, 2).map((publi) => (
                    <div key={uuidv4()} className="flex flex-col justify-between rounded col-span-3">
                        <a href={publi.url} rel="noopener noreferrer">
                            <div className="relative flex-shrink-0 inline-block w-full bg-gray-400 border border-gray-300 rounded group aspect-video">
                                <Image alt={publi.listImg[0].imageAlt} src={publi.listImg[0].imagePath} fill className="object-cover object-center rounded group-hover:opacity-80 animate" />
                            </div>
                        </a>
                        <div className="flex flex-col justify-between h-full mt-4 bg-white rounded space-y-4">
                            <Typography variant="caption4" theme="secondary">
                                Projet
                            </Typography>
                            <Typography variant="body-lg">
                                {publi.title}
                            </Typography>
                            <div className="flex items-center gap-3">
                                <Avatar src={authUser.photoURL} alt="albert" size="small" />
                                <Typography variant="caption4" theme="gray-600">
                                    {authUser.userDocument.displayName}
                                </Typography>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            {
                                publi.stack.slice(0, 3).map(tech => (
                                    <div key={uuidv4()} className="flex bg-secondary-300/20 p-2 rounded-full items-center justify-center">
                                        <Typography variant="caption4" theme="secondary">
                                            {tech}
                                        </Typography>
                                    </div>
                                ))
                            }
                            {
                                publi.stack.length > 3 &&
                                <div className="flex bg-secondary-300/20 p-2 rounded-full items-center justify-center">
                                    +1
                                </div>
                            }
                        </div>
                    </div>
                ))
            }
        </div >
    )

    const publication = (
        <div className="grid grid-cols-9 gap-7 pb-9" >
            {
                listPublication.map((publi) => (
                    <div key={uuidv4()} className="flex flex-col justify-between rounded col-span-3">
                        <a href={publi.url} rel="noopener noreferrer">
                            <div className="relative flex-shrink-0 inline-block w-full bg-gray-400 border border-gray-300 rounded group aspect-video">
                                <Image alt={publi.listImg[0].imageAlt} src={publi.listImg[0].imagePath} fill className="object-cover object-center rounded group-hover:opacity-80 animate" />
                            </div>
                        </a>
                        <div className="flex flex-col justify-between h-full mt-4 bg-white rounded space-y-4">
                            <Typography variant="caption4" theme="secondary">
                                Projet
                            </Typography>
                            <Typography variant="body-lg">
                                {publi.title}
                            </Typography>
                            <div className="flex items-center gap-3">
                                <Avatar src={authUser.photoURL} alt="albert" size="small" />
                                <Typography variant="caption4" theme="gray-600">
                                    {authUser.userDocument.displayName}
                                </Typography>
                            </div>
                            <div className="flex gap-2">
                                {
                                    publi.stack.slice(0, 3).map(tech => (
                                        <div key={uuidv4()} className="flex bg-secondary-300/20 p-2 rounded-full items-center justify-center">
                                            <Typography variant="caption4" theme="secondary">
                                                {tech}
                                            </Typography>
                                        </div>
                                    ))
                                }
                                {
                                    publi.stack.length > 3 &&
                                    <div className="flex bg-secondary-300/20 p-2 rounded-full items-center justify-center">
                                        +1
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </div >
    )


    return (
        <Container className="relative pt-20 pb-20 overflow-hidden">
            <div className="flex items-center justify-between pb-9">
                <div className="w-full max-w-2xl space-y-5">
                    <Typography variant="h1" component="h2" className="mx-w-lg">
                        Derniers publications
                    </Typography>
                    <Typography variant="body-lg" component="p" theme="gray" className="max-w-xl">
                        Les étudiants de l'UAM ont encore frappé, découvre les derniers projets et risque une overdose d'inspiration !
                    </Typography>
                </div>
                <div className="space-x-5 pt-2.5">
                    <Button icon={{ icon: TfiAngleDown }} variant="outline" baseUrl="">Filter                  {"|"}</Button>
                </div>
            </div>
            {recentPublication}
            {publication}
            {/* <div className="flex flex-col justify-between rounded col-span-3">
                    <a className="group" href="#">
                        <div className="relative flex-shrink-0 inline-block w-full bg-gray-400 border border-gray-300 rounded group aspect-video">
                            <Image alt="illustration du projet Portfolio de Albert Bakhoum" fill className="object-cover object-center rounded group-hover:opacity-80 animate" src="assets/images/e-commerce.png" />
                        </div>
                    </a>
                    <div className="text-caption2 text-secondary font-light Capitalise">Projet</div>
                </div> */}
            {/* <div className="flex flex-col justify-between h-full mt-4 bg-white rounded space-y-7">
                    <div className="space-y-3">
                        <div className="text-caption2 text-secondary font-light Capitalise">Projet</div>
                        <a href="/#" target="_blank">
                            <div className="relative bg-gray-400 rounded h-[626px]">
                                <div className="relative flex flex-col items-center justify-center gap-2 h-full bg-primary-200 z-10 text-white rounded opacity-0 hover:opacity-95 animate">
                                </div>
                                <Image fill src="assets/images/officeword.png" alt="" className="object-cover object-center rounded" />
                            </div>
                        </a>
                    </div>
                </div>
                <a href="/#" target="_blank">
                    <div className="relative bg-gray-400 rounded h-[626px]">
                        <div className="relative flex flex-col items-center justify-center gap-2 h-full bg-gray z-10 text-white rounded opacity-0 hover:opacity-95 animate">
                            <RiPlayCircleLine size={42} />
                            <Typography variant="caption2" theme="white" className="uppercase" weight="medium">
                                Lire la formation
                            </Typography>
                        </div>
                        <Image fill src="assets/images/officeword.png" alt="" className="object-cover object-center rounded" />
                    </div>
                </a> */}
            {/* </div> */}
        </Container >
    )
}
