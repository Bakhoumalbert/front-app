import Link from 'next/link'
import React from 'react'
import { Avatar } from '../../design-system/avatar/Avatar'
import { Typography } from '../../design-system/typography/Typography'
import { useAuth } from '@/src/context/AuthUserContext'

export const AccountAvatarLink = () => {

    const { authUser } = useAuth()

    const { photoURL, displayName } = authUser.userDocument;

    return (
        <Link href="/mon-espace" className='flex items-center gap-2'>
            <Avatar src={photoURL} alt={displayName ? `avatar de ${displayName}` : "Avatar de l'utilisateur"} size='large' />
            <div className='max-w-[160px] flex flex-col justify-center space-y-1'>
                <Typography variant='caption2' weight='medium' className='truncate'>
                    {displayName ? displayName : "Bienvenue"}
                </Typography>
                <Typography variant='caption4' theme='gray'>
                    Mon compte
                </Typography>
            </div>
        </Link>
    )
}
