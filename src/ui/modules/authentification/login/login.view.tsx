import { Box } from "@/src/ui/design-system/box/box"
import { Typography } from "@/src/ui/design-system/typography/Typography"
import Link from "next/link"
import { LoginForm } from "./login.form"
import Image from "next/image"
import { Container } from "@/src/ui/components/container/Container"
import { FormsType } from "@/src/types/forms"

interface Props {
    form: FormsType;
}

export const LoginView = ({ form }: Props) => {
    return (
        <Container className="grid grid-cols-2 gap-20 mb-32">
            <div className="flex items-center">
                <div className='relative w-full h-[531px]'>
                    <Image fill priority src="/assets/svg/connexion.svg" alt='welcome...' />
                </div>
            </div>
            <div className="flex items-center">
                <Box padding_x='px-9' padding_y="py-5">
                    <div className='flex items-center justify-between'>
                        <Typography variant='h5' component='h1'>
                            Connexion
                        </Typography>
                        <div className='flex items-center gap-2'>
                            <Typography variant='caption4' component='span' theme='gray'>
                                Tu n'as pas de compte ?
                            </Typography>
                            <Typography variant='caption4' component='span' theme='primary'>
                                <Link href="/connexion/inscription">S'inscrire</Link>
                            </Typography>
                        </div>
                    </div>
                    <LoginForm form={form} />
                    <Typography variant='caption4' theme='primary'>
                        <Link href="/connexion/mots-de-passe-perdu" className="flex justify-center">Mot de passe perdu ?</Link>
                    </Typography>
                </Box>
            </div>
        </Container>
    )
}
