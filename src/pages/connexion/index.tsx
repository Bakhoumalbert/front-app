import { GUEST } from "@/src/lib/session-status";
import { Layout } from "@/src/ui/components/layout/layout";
import { Seo } from "@/src/ui/components/seo/Seo";
import { LoginContainer } from "@/src/ui/modules/authentification/login/login.container";

export default function Connexion() {
    return (
        <>
            <Seo title="Connexion sur Codeurs-UAM" description="Page de connexion" />
            <Layout sessionStatus={GUEST}>
                <LoginContainer />
            </Layout>
        </>
    );
}
