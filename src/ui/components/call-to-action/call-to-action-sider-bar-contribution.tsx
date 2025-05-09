import Image from "next/image"
import { Button } from "../../design-system/button/Button"
import { Typography } from "../../design-system/typography/Typography"
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri"

export const CallsToActionSiderBarContribution = () => {
    return (
        <div className="relative flex flex-col justify-center gap-5 py-8 overflow-hidden rounded  bg-primary">
            <Typography variant="h5" theme="white" weight="medium" className="text-center px-3">
                <span className="relative">
                    <RiDoubleQuotesL size={30} className="text-secondary-950" />
                </span>
                Le développement, c’est de la partage et de la contribution
                <span className="relative left-56">
                    <RiDoubleQuotesR size={30} className="text-secondary-950" />
                </span>
            </Typography>
            {/* <div className="flex justify-center">
                <Button variant="success" baseUrl="#" linkType="external">
                    Faire un don libre
                </Button>
            </div> */}
            {/* <Image width={103} height={103} src="/assets/svg/cake.svg" alt="donation pig" className="absolute w-auto -bottom-3 transform -translate-x-1/2 left-1/2" /> */}
        </div>
    )
}
