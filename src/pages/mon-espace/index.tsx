import { REGISTERED } from "@/src/lib/session-status";
import { Layout } from "@/src/ui/components/layout/layout";
import { Seo } from "@/src/ui/components/seo/Seo";
import { ProfileContainer } from "@/src/ui/modules/user-profile/profile.container";

export default function UserAccount() {
    return (

        <>
            <Seo title="Mon espace" description="Il s'agit de mon espace perso" />
            <Layout withSidebar sessionStatus={REGISTERED}>
                <ProfileContainer />
            </Layout>
        </>
    );
}
