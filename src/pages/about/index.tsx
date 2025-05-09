import { REGISTERED } from "@/src/lib/session-status";
import { Layout } from "@/src/ui/components/layout/layout";
import { Seo } from "@/src/ui/components/seo/Seo";
import { AboutPageContainer } from "@/src/ui/modules/about/components/about.container";

export default function AboutPage() {
    return (
        <>
            <Seo title="Mon espace" description="Il s'agit de la page A propos" />
            <Layout sessionStatus={REGISTERED}>
                <AboutPageContainer />
            </Layout>
        </>
    );
}
