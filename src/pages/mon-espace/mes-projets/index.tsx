import { REGISTERED } from "@/src/lib/session-status";
import { Layout } from "@/src/ui/components/layout/layout";
import { Seo } from "@/src/ui/components/seo/Seo";
import { MesProjetPageContainer } from "@/src/ui/modules/mesprojets/mesprojets.container";

export default function UserAccount() {
    return (
        <>
            <Seo title="Projets" description="Il s'agit des projets" />
            <Layout withSidebar sessionStatus={REGISTERED}>
                <MesProjetPageContainer />
            </Layout>
        </>
    );
}
