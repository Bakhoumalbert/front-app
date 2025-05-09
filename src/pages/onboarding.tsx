import { REGISTERED } from "../lib/session-status";
import { Seo } from "../ui/components/seo/Seo";
import { Session } from "../ui/components/session/session";
import { OnboardingContainer } from "../ui/modules/onboarding/onboarding.container";

export default function Onboarding() {
    return (
        <>
            <Seo title="Codeur Alberto" description="description de la page onboarding" />
            <Session sessionStatus={REGISTERED}>
                <OnboardingContainer />
            </Session>
        </>
    );
}
