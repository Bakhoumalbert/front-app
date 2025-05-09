import Link from "next/link"
import { Button } from "../../design-system/button/Button"
import { Logo } from "../../design-system/logo/Logo"
import { Typography } from "../../design-system/typography/Typography"
import { Container } from "../container/Container"
import { ActiveLink } from "./active-link"
import { useAuth } from "@/src/context/AuthUserContext"
import { AccountAvatarLink } from "./account-avatar-link"

interface Props { }

export const Navigation = () => {

    const { authUser } = useAuth()

    const authentificationSystem = (
        <div className="flex items-center gap-2">
            <Button variant="secondary" size="small" baseUrl="/connexion">Connexion</Button>
            <Button size="small" baseUrl="/connexion/inscription">Rejoindre</Button>
        </div>
    )

    return (
        <div className="border-b-2 border-gray-400">
            <Container className="flex items-center justify-between gap-2">
                <Link href="/">
                    <div className="flex items-center gap-2.5 my-1">
                        <Logo size="medium"></Logo>
                        <div className="flex flex-col">
                            <div className="text-gray hover:text-primary font-extrabold text-[24px]">
                                CI - UAM
                            </div>
                            <Typography variant="caption4" theme="gray">
                                Les étudiants innovateurs
                            </Typography>
                        </div>
                    </div>
                </Link>
                <div className="flex items-center gap-7">
                    <Typography variant="caption4" component="div" className="flex items-center gap-7 pr-4">
                        {/* <ActiveLink className="text-[18px]" href="/design-system">design System</ActiveLink> */}
                        <ActiveLink className="text-[18px]" href="/projets">Projets</ActiveLink>
                        <ActiveLink className="text-[18px]" href="/formations">Formations</ActiveLink>
                        <ActiveLink className="text-[18px]" href="/about">A propos</ActiveLink>
                    </Typography>
                    {!authUser ? authentificationSystem : <AccountAvatarLink />}
                </div>
            </Container>
        </div>
    )
}
