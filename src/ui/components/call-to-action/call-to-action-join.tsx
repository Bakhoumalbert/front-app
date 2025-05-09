import Image from "next/image"
import { Button } from "../../design-system/button/Button"
import { Typography } from "../../design-system/typography/Typography"

export const CallsToActionSiderBarJoin = () => {
    return (
        <div className="relative flex flex-col justify-center gap-5 px-0 py-12 overflow-hidden rounded pb-44 bg-secondary">
            <Typography variant="lead" theme="white" weight="medium" className="text-center">
                Rejoins nous dans le groupe
            </Typography>
            <div className="flex justify-center">
                <Button variant="accent" baseUrl="https://discord.com/channels/1074446075596906576/1074446076058284046" linkType="external">
                    Rejoindre
                </Button>
            </div>
            <Image width={255} height={255} src="/assets/svg/cake.svg" alt="donation pig" className="absolute -bottom-3 transform -translate-x-1/2 left-1/2" />
        </div>
    )
}
