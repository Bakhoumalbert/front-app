import { Container } from "@/src/ui/components/container/Container"
import { Button } from "@/src/ui/design-system/button/Button"
import { Typography } from "@/src/ui/design-system/typography/Typography"
import Image from "next/image"

export const ProjetHeroTopView = () => {
    return (
        <Container className="relative pt-16 pb-20 overflow-hidden">
            <div className="w-full max-w-2xl space-y-5">
                <Typography variant="h2" component="h1" className="mx-w-lg">
                    Les projets Etudiants des innovateurs
                </Typography>
                <Typography variant="body-lg" component="p" theme="gray" className="max-w-xl">
                    Faites le tour des projets, trouve de l'inspiration et faites un feetback pour plus d'informations
                </Typography>
                <div className="space-x-5 pt-2.5">
                    <Button baseUrl="">Publier un projet</Button>
                    <Button variant="secondary" baseUrl="">Comment ça marche ? {" "}</Button>
                </div>
            </div>
            <Image src="./assets/svg/folder2.svg" alt="Illustration d'une fusée pour matérialiser l'évolution du level des développeurs front-end"
                width={450}
                height={490}
                className="absolute top-6 right-12 z-0"
            />
        </Container>
    )
}
