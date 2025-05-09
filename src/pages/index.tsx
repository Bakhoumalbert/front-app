import { Layout } from "../ui/components/layout/layout";
import { Seo } from "../ui/components/seo/Seo";
import { LandingPageContainer } from "../ui/modules/landing-page/landing-page.container";

export default function Home() {
    return (
        <>
            <Seo title="Codeur Alberto" description="description..." />
            <Layout isDisplayBreadcrumbs={false}>
                <LandingPageContainer />
            </Layout>
        </>
    );
}
