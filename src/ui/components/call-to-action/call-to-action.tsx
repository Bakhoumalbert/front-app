import { LinkTypes } from "@/src/lib/link-type"
import { Button } from "../../design-system/button/Button"
import { Typography } from "../../design-system/typography/Typography"
import { Container } from "../container/Container"
import Image from "next/image"

interface Props {
    title: string
    titlecolor: "white" | "gray"
    imgPath: string
    themebutton: "accent" | "success" | "black"
}

export const CallToAction = () => {
  return (
    <div className="relative overflow-hidden bg-primary">
        <Container className="py-20">
            <div className="relative z-10 max-w-3xl space-y-5">
                <Typography variant="h2" theme="white" component="h2">
                    N'attend pas pour développer tes compétences...
                </Typography>
                <div>
                    <Button variant="success" baseUrl="#/" linkType={LinkTypes.EXTERNAL}>
                        Formations React gratuite
                    </Button>
                </div>
            </div>
            <div>
                <Image width={1220} height={1220} src="assets/svg/bomb.svg" alt="c'est de la bomb..." className="absolute -bottom-[460px] -right-[250px]" />
            </div>
        </Container>
    </div>
  )
}
