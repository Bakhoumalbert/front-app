import { REGISTERED } from "@/src/lib/session-status";
import { Layout } from "@/src/ui/components/layout/layout";
import { Seo } from "@/src/ui/components/seo/Seo";
import { ProjetPageContainer } from "@/src/ui/modules/projets/projetsPage.container";

export default function AllProjets() {
    return (
        <>
            <Seo title="Projets" description="Il s'agit des projets" />
            <Layout sessionStatus={REGISTERED}>
                <ProjetPageContainer />
            </Layout>
        </>
    );
}
