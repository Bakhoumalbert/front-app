import { sessionStatusTypes } from "@/src/types/session-status-types"
import { Breadcrumbs } from "../breadcrumbs/breadcrumbs"
import { Container } from "../container/Container"
import { Footer } from "../navigation/Footer"
import { Navigation } from "../navigation/Navigation"
import { UserAccountNavigation } from "../navigation/user-account-navigation"
import { Session } from "../session/session"
import { CallsToActionSiderBarContribution } from "../call-to-action/call-to-action-sider-bar-contribution"
import { CallsToActionSiderBarJoin } from "../call-to-action/call-to-action-join"

interface Props {
  children: React.ReactNode,
  isDisplayBreadcrumbs?: boolean
  withSidebar?: boolean
  sessionStatus?: sessionStatusTypes
}
export const Layout = ({ children, isDisplayBreadcrumbs = true, withSidebar, sessionStatus }: Props) => {

  let view: React.ReactElement = <></>

  if (withSidebar) {
    view = (
      <Container className="mb-14">
        <div className="grid grid-cols-12 gap-7">
          <div className="col-span-3 space-y-8">
            <UserAccountNavigation />
            <CallsToActionSiderBarContribution />
            <CallsToActionSiderBarJoin />
          </div>
          <div className="col-span-9">{children}</div>
        </div>
      </Container>
    )
  } else {
    view = <>{children}</>
  }

  return (
    <Session sessionStatus={sessionStatus}>
      <Navigation />
      {isDisplayBreadcrumbs && <Breadcrumbs />}
      {view}
      <Footer />
    </Session>
  )
}
