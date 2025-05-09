import { useAuth } from "@/src/context/AuthUserContext";
import { publicationsListInterface } from "@/src/types/publicationsListInterface";
import { Container } from "@/src/ui/components/container/Container"
import { Avatar } from "@/src/ui/design-system/avatar/Avatar";
import { Typography } from "@/src/ui/design-system/typography/Typography"
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";


const listPublication: publicationsListInterface[] = [
    {
        status: "publier",
        title: "Formation ReactJS",
        listImg: [{
            imagePath: "assets/images/react-js.jpg",
            imageAlt: "img react"
        }],
        description: "Lancer ta formation en tant que développeur avec ReactJS.",
        url: "https://youtube.com/playlist?list=PLtKaauZVThjAe3U3AQqa-C1fLwHR48aMM&si=jd10mVUHzBjWYwaj",
        stack: ["React", "firebase", "tailwindCSS"],
    }
];

export const Formations = () => {

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
                            {/* <Typography variant="caption4" theme="secondary">
                                Projet
                            </Typography> */}
                            <Typography variant="body-lg">
                                {publi.title}
                            </Typography>
                            <Typography variant="body-base" component="p">
                                {publi.description}
                            </Typography>
                            {/* <div className="flex items-center gap-3">
                                <Avatar src={authUser.photoURL} alt="albert" size="small" />
                                <Typography variant="caption4" theme="gray-600">
                                    {authUser.userDocument.displayName}
                                </Typography>
                            </div> */}
                        </div>
                        <div className="flex gap-2">
                            {
                                publi.stack.slice(0, 3).map(tech => (
                                    <div key={uuidv4()} className="flex bg-secondary-300/20 py-2 rounded-full items-center justify-center">
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

    // const publication = (
    //     <div className="grid grid-cols-9 gap-7 pb-9" >
    //         {
    //             listPublication.map((publi) => (
    //                 <div key={uuidv4()} className="flex flex-col justify-between rounded col-span-3">
    //                     <a href={publi.url} rel="noopener noreferrer">
    //                         <div className="relative flex-shrink-0 inline-block w-full bg-gray-400 border border-gray-300 rounded group aspect-video">
    //                             <Image alt={publi.listImg[0].imageAlt} src={publi.listImg[0].imagePath} fill className="object-cover object-center rounded group-hover:opacity-80 animate" />
    //                         </div>
    //                     </a>
    //                     <div className="flex flex-col justify-between h-full mt-4 bg-white rounded space-y-4">
    //                         <Typography variant="caption4" theme="secondary">
    //                             Projet
    //                         </Typography>
    //                         <Typography variant="body-lg">
    //                             {publi.title}
    //                         </Typography>
    //                         <div className="flex items-center gap-3">
    //                             <Avatar src={authUser.photoURL} alt="albert" size="small" />
    //                             <Typography variant="caption4" theme="gray-600">
    //                                 {authUser.userDocument.displayName}
    //                             </Typography>
    //                         </div>
    //                         <div className="flex gap-2">
    //                             {
    //                                 publi.stack.slice(0, 3).map(tech => (
    //                                     <div key={uuidv4()} className="flex bg-secondary-300/20 p-2 rounded-full items-center justify-center">
    //                                         <Typography variant="caption4" theme="secondary">
    //                                             {tech}
    //                                         </Typography>
    //                                     </div>
    //                                 ))
    //                             }
    //                             {
    //                                 publi.stack.length > 3 &&
    //                                 <div className="flex bg-secondary-300/20 p-2 rounded-full items-center justify-center">
    //                                     +1
    //                                 </div>
    //                             }
    //                         </div>
    //                     </div>
    //                 </div>
    //             ))
    //         }
    //     </div >
    // )


    return (
        <Container className="relative pt-20 pb-20 overflow-hidden">
            <div className="flex items-center justify-between pb-9">
                <div className="w-full space-y-5">
                    <Typography variant="h1" component="h2" className="mx-w-lg">
                        Derniers publications
                    </Typography>
                    <Typography variant="body-lg" component="p" theme="gray" className="">
                        Découvre de nouvelles technologies et projets en constante évolution.
                    </Typography>
                </div>
            </div>
            {recentPublication}
        </Container >
    )
}
