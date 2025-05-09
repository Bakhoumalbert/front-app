import { Container } from '@/src/ui/components/container/Container'
import { Box } from '@/src/ui/design-system/box/box'
import { Typography } from '@/src/ui/design-system/typography/Typography'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ForgetPasswordForm } from './forget-password.form'
import { FormsType } from '@/src/types/forms'

interface Props {
    form: FormsType;
}

export const ForgetPasswordView = ({ form }: Props) => {
    return (
        <Container className="grid grid-cols-2 gap-20 mb-32">
            <div className="flex items-center">
                <div className="relative w-full h-[531px]">
                    {/* <Image fill src="/assets/svg/forget-password.svg" alt="desrcription de l'illustration..."
                        className='object-scale-down'
                    /> */}
                    <Image fill priority src="/assets/svg/forget-password.svg" alt='welcome...' />
                </div>
            </div>
            <div className="flex items-center">
                <Box padding_x='px-9' padding_y="py-5">
                    <div className='flex items-center justify-between'>
                        <Typography variant='h5' component='h1'>
                            Mot de passe perdu ?
                        </Typography>
                        <Typography variant='caption4' component='span' theme='primary'>
                            <Link href="/connexion">Connexion</Link>
                        </Typography>
                    </div>
                    <ForgetPasswordForm form={form} />
                </Box>
            </div>
        </Container>
    )
}
