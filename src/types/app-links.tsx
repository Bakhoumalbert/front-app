import { IconType } from "react-icons/lib"
import { LinkType } from "../lib/link-type"

export interface AppLinks {
    label: string,
    baseUrl: string,
    type: LinkType,
    icon?: IconType,
}

export interface FooterLinks {
    label: string,
    links: AppLinks[]
}
