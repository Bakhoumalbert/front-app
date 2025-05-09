import { Container } from "@/src/ui/components/container/Container"
import { Button } from "@/src/ui/design-system/button/Button"
import { Typography } from "@/src/ui/design-system/typography/Typography"
import Image from "next/image"

export const HeroTopView = () => {
  return (
    <Container className="relative pt-24 pb-52 overflow-hidden">
      <div className="w-full max-w-xl space-y-5">
        <Typography variant="h2" component="h1" className="max-w-xl">
          Rejoins le Club des Informatitiens de l'UAM
        </Typography>
        <Typography variant="body-lg" component="p" theme="gray" className="max-w-xl">
          Ici, on se prends la tête, <br />
          Rejoins notre club, partage tes projets les plus fous et fais-toi de nouveaux amis.
          Le club se veut un réseau qui te permettra d'acquérir des compétences  en informatique, mais aussi une communauté pour partager et apprendre.
        </Typography>
        <div className="space-x-5 pt-2.5">
          <Button baseUrl="">Commencer</Button>
          <Button variant="secondary" baseUrl="">En savoir plus {" "}</Button>
        </div>
      </div>
      <Image src="./assets/svg/rocket1.svg" alt="Illustration d'une fusée pour matérialiser l'évolution du level des développeurs front-end"
        width={701}
        height={566}
        className="absolute top-20 right-36 z-0"
      />
    </Container>
  )
}
