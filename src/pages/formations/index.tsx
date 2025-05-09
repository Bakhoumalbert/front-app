import { REGISTERED } from "@/src/lib/session-status";
import { Layout } from "@/src/ui/components/layout/layout";
import { Seo } from "@/src/ui/components/seo/Seo";
import { FormationsContainer } from "@/src/ui/modules/formations/formation.container";

export default function AllProjets() {
    return (
        <>
            <Seo title="Projets" description="Il s'agit des projets" />
            <Layout sessionStatus={REGISTERED}>
                <FormationsContainer />
            </Layout>
        </>
    );
}
