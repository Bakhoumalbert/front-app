import { Container } from '@/src/ui/components/container/Container'
import { Box } from '@/src/ui/design-system/box/box'
import { Typography } from '@/src/ui/design-system/typography/Typography'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RegisterForm } from './register.form'
import { FormsType } from '@/src/types/forms'

interface Props {
    form: FormsType;
}

export const RegisterView = ({ form }: Props) => {
    return (
        <Container className="grid grid-cols-2 gap-20 mb-32">
            <div className="flex items-center">
                <div className='relative w-full h-[531px]'>
                    <Image fill priority src="/assets/svg/Welcome.svg" alt='welcome...' />
                </div>
            </div>
            <div className="flex items-center">
                <Box padding_y="py-5">
                    <div className='flex items-center justify-between'>
                        <Typography variant='h5' component='h1'>
                            Inscription
                        </Typography>
                        <div className='flex items-center gap-2'>
                            <Typography variant='caption4' component='span' theme='gray'>
                                Tu as déjà un compte ?
                            </Typography>
                            <Typography variant='caption4' component='span' theme='primary'>
                                <Link href="/connexion">Connexion</Link>
                            </Typography>
                        </div>
                    </div>
                    <RegisterForm form={form} />
                    <Typography variant='caption4' theme='gray' className='max-w-md mx-auto space-y-1 text-center'>
                        <div>En t'inscrivant tu accepte les</div>
                        <div>
                            <Link href="#/" className='text-gray'>
                                Condition d'utilisation
                            </Link>
                            {" "} et la {" "}
                            <Link href="#/" className='text-gray'>
                                Politique de confidentialité
                            </Link>
                        </div>
                    </Typography>
                </Box>
            </div>
        </Container>
    )
}
