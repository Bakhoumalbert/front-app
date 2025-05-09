import { GUEST } from "@/src/lib/session-status";
import { Layout } from "@/src/ui/components/layout/layout";
import { Seo } from "@/src/ui/components/seo/Seo";
import { ForgetPasswordContainer } from "@/src/ui/modules/authentification/forget-password/forget-password.container";

export default function ForgetPassWord() {
    return (
        <>
            <Seo title="Codeur Alberto" description="description..." />       
            <Layout sessionStatus={GUEST }>
                <ForgetPasswordContainer />
            </Layout>

        </>
    );
}
