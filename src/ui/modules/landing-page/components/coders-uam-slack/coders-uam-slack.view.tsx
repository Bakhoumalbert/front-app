import { LinkTypes } from "@/src/lib/link-type"
import { Container } from "@/src/ui/components/container/Container"
import { Button } from "@/src/ui/design-system/button/Button"
import { Logo } from "@/src/ui/design-system/logo/Logo"
import { Typography } from "@/src/ui/design-system/typography/Typography"
import Image from "next/image"
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri"

export const CodersUamSlackView = () => {
    return (
        <Container className="flex justify-between">
            <div className="flex flex-col justify-center max-w-2xl space-y-5">
                <div className="flex items-center gap-2">
                    <Logo size="very-small" />
                    <Typography variant="caption2" component="span" weight="medium">
                        Codeurs UAM
                    </Typography>
                </div>
                <span className="relative top-12 -left-8">
                    <RiDoubleQuotesL size={40} className="text-secondary-950" />
                </span>
                <Typography variant="h2" component="h2" className="pl-2">
                    Rejoins-nous sur le slack des codeurs UAM
                </Typography>
                <span className="relative -top-12 left-80">
                    <RiDoubleQuotesR size={40} className="text-secondary-950" />
                </span>
                <Typography variant="body-lg" component="p" theme="gray" className="max-w-lg">
                    Rejoins-nous et obtiens de l'aide, des conseils et pourquoi pas des nouveaux potes !
                </Typography>
                <Button baseUrl="https://discord.com/channels/1074446075596906576/1074446076058284046" linkType={LinkTypes.EXTERNAL}>Rejoindre le groupe d'aide</Button>
            </div>
            <div className="relative w-[500px] h-[500px]">
                <Image fill src="/assets/svg/discord.svg" alt="Groupe Slack Coders UAM" className="blur-2xl" />
                <Image fill src="/assets/svg/discord.svg" alt="Groupe Slack Coders UAM" />
            </div>
        </Container>
    )
}
