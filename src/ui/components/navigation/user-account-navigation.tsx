import React from 'react'
import { Box } from '../../design-system/box/box'
import { firebaselogoutUser } from '@/src/api/authentification'
import { toast } from 'react-toastify'
import { Button } from '../../design-system/button/Button'
import { Typography } from '../../design-system/typography/Typography'
import { ActiveLink } from './active-link'

export const UserAccountNavigation = () => {

    const handleLogoutUser = async () => {
        const { error } = await firebaselogoutUser()

        if (error) {
            toast.error(error.message)
            return;
        }
        toast.success("A bientôt sur coders UAM")
        
    }

  return (
    <Box className='flex flex-col gap-7'>
        <div className='flex flex-col gap-3'>
            <Typography variant="caption2" weight='medium'>
                <ActiveLink href="/mon-espace">Mon compte</ActiveLink>
            </Typography>
            <Typography variant="caption2" weight='medium'>
                <ActiveLink href="/mon-espace/mes-projets">Mes projets</ActiveLink>
            </Typography>
        </div>
        <Button action={handleLogoutUser} variant="danger">
            Déconnexion
        </Button>
    </Box>
  )
}
