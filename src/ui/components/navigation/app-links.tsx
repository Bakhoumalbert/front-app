import { AppLinks } from "@/src/types/app-links";
import { RiDiscordFill, RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";

export const footerApplicationLinks: AppLinks[] = [
    {
        label: "Accueil",
        baseUrl: "/",
        type: "internal"
    },
    {
        label: "Projets",
        baseUrl: "/mes-projets",
        type: "internal"
    },
    {
        label: "CI-UAM",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Formations",
        baseUrl: "https://youtube.com/@remotemonkey",
        type: "external"
    },
]
export const footerUsersLinks: AppLinks[] = [
    {
        label: "Mon espace",
        baseUrl: "/mon-espace",
        type: "internal"
    },
    {
        label: "Connexion",
        baseUrl: "/connexion",
        type: "internal"
    },
    {
        label: "Inscription",
        baseUrl: "/connexion/inscription",
        type: "internal"
    },
    {
        label: "Mot de passe oublié",
        baseUrl: "/connexion/mots-de-passe-perdu",
        type: "internal"
    },
]
export const footerInformationLinks: AppLinks[] = [
    {
        label: "CGU",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Confidentialité",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "A propos",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Contact",
        baseUrl: "/#",
        type: "internal"
    },
]
export const footerSocialNetworksLinks: AppLinks[] = [
    {
        label: "Youtube",
        baseUrl: "https://youtube.com/@remotemonkey",
        type: "external",
        icon: RiYoutubeFill
    },
    {
        label: "LinkedIn",
        baseUrl: "https://www.linkedin.com/in/albert-sandokh-bakhoum-020305266/",
        type: "external",
        icon: RiLinkedinFill
    },
    {
        label: "Discord",
        baseUrl: "https://discord.com/channels/963075796216446976/963079640719704095",
        type: "external",
        icon: RiDiscordFill
    },
]

export const footerLinks = [
    {
        label: "App",
        links: footerApplicationLinks
    },
    {
        label: "Utilisateurs",
        links: footerUsersLinks
    },
    {
        label: "Informations",
        links: footerInformationLinks
    },
    {
        label: "Réseaux",
        links: footerSocialNetworksLinks
    },
]