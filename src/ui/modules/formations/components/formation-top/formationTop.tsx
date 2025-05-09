import { Container } from "@/src/ui/components/container/Container"
import { Button } from "@/src/ui/design-system/button/Button"
import { Typography } from "@/src/ui/design-system/typography/Typography"
import Image from "next/image"

export const FormationTopView = () => {
    return (
        <Container className="relative pt-12 pb-40 overflow-hidden">
            <Image src="./assets/svg/learn.svg" alt="Illustration d'une fusée pour matérialiser l'évolution du level des développeurs front-end"
                width={600}
                height={400}
                className="absolute top-0 right-6 z-0"
            />
            <div className="w-full max-w-2xl space-y-5 pt-2">
                <Typography variant="h2" component="h2" className="max-w-xl">
                    Développe ta carrière avec de nouvelles compétences
                </Typography>
                <Typography variant="body-lg" component="p" theme="gray" className="max-w-lg">
                    Découvre les clés de la réussite informatique en t'immergeant dans notre programme de formation de pointe, là où chaque ligne de code forge l'avenir de ta carrière!
                </Typography>
            </div>
        </Container>
    )
}
