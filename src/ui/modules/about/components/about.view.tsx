import { Container } from "@/src/ui/components/container/Container"
import { Button } from "@/src/ui/design-system/button/Button"
import { Typography } from "@/src/ui/design-system/typography/Typography"

export const AboutPageView = () => {
    return (
        <Container className="flex flex-col pt-14 pb-52 items-center">
            <div className="flex flex-col space-y-5 px-16">
                <Typography variant="h3" component="h1" className="pb-14">
                    🚀 A propos 🌟
                </Typography>
                <div className="flex flex-col text-justify max-w-6xl gap-8">
                    <Typography variant="lead" component="p" theme="black" className="flex flex-row gap-2">
                        <span>🌟</span>
                        Bienvenue dans notre Club d'Informaticiens, bien plus qu'un simple groupe !
                    </Typography>
                    <Typography variant="lead" component="p" theme="black" className="flex flex-row gap-2">
                        <span>💡</span>
                        Explore un réseau dynamique où chaque étudiant peut développer ses compétences en informatique,
                        tout en participant à des discussions stimulantes et enrichissantes.
                    </Typography>
                    <Typography variant="lead" component="p" theme="black" className="flex flex-row gap-2">
                        <span>🌐</span>
                        Ouvre-toi au monde ! Notre club accueille des communautés internationales pour des débats
                        passionnants sur les sujets les plus brûlants de l'actualité technologique.
                    </Typography>
                    <Typography variant="lead" component="p" theme="black" className="flex flex-row gap-2">
                        <span>🚀</span>
                        Nous sommes bien plus qu'un simple club, nous sommes un espace de partage de projets et de connaissances.
                    </Typography>
                    <Typography variant="lead" component="p" theme="black" className="flex flex-row gap-2">
                        <span>🤝</span>
                        Partage tes projets les plus fous et fais-toi de nouveaux amis dans une communauté
                        passionnée et collaborative.
                    </Typography>
                    <Typography variant="lead" component="p" theme="black" className="flex flex-row gap-2">
                        <span>🚀</span>
                        Plonge dans l'univers de l'informatique, explore les tendances technologiques du moment
                        et démarque-toi dans ce monde en constante évolution. L'aventure commence ici !
                    </Typography>
                </div>
                <div className=" space-x-36 pt-6 pl-4">
                    <Button variant="secondary" baseUrl="/">En savoir plus {" "} 🚀</Button>
                </div>
            </div>
        </Container>

    )
}
