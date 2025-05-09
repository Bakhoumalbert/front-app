import { CallToActionView } from "../../components/call-to-action/call-to-action.view";
import { CodersUamSlackView } from "./components/coders-uam-slack/coders-uam-slack.view";
import { CurrentCoursView } from "./components/current-cours/current-cours.view";
import { FeaturedView } from "./components/featured/featured-view";
import { HeroTopView } from "./components/hero-top/hero-top.view";
import { HighlightListView } from "./components/highlight-list/highlight-list.view";

export const LandingPageView = () => {
  return (
    <>
      <HeroTopView />
      <FeaturedView />
      <CodersUamSlackView />
      <CurrentCoursView />
      <HighlightListView />
      <CallToActionView />
    </>
  );
};
