import { ProjetHighlight } from "./components/highlight-projets/highlightProjets"
import { ProjetHeroTopView } from "./components/projet-top/projetTopView"
import { ProjetsPublications } from "./components/publications/publications"

export const ProjetPageView = () => {
    return (
        <div>
            <ProjetHeroTopView />
            <ProjetHighlight />
            <ProjetsPublications />
        </div>
    )
}
