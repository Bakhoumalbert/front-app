import { GUEST } from "@/src/lib/session-status";
import { Layout } from "@/src/ui/components/layout/layout";
import { Seo } from "@/src/ui/components/seo/Seo";
import { RegisterContainer } from "@/src/ui/modules/authentification/register/register.container";

export default function Register() {
    return (
        <>
            <Seo title="Inscription sur Codeurs UAM" description="Page d'inscription" />       
            <Layout sessionStatus={GUEST}>
                <RegisterContainer />
            </Layout>

        </>
    );
}
