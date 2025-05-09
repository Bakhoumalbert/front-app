import { useRouter } from "next/router"
import { v4 as uuidv4 } from "uuid";
import { Typography } from "../../design-system/typography/Typography";
import clsx from "clsx";
import { RiHome3Line } from "react-icons/ri";
import { Container } from "../container/Container";
import Link from "next/link";

export const Breadcrumbs = () => {

  const router = useRouter()
  const asPath = router.asPath;
  const segment = asPath.split("/");
  const lastsegment = segment[segment.length - 1]

  segment[0] = "Accueil"
  if (lastsegment === "projets") segment[segment.indexOf(lastsegment)] = "Projets Informatitiens UAM"


  const view = segment.map((path, index) => (
    <div key={uuidv4()} className="flex items-center">
      <Link href={
        index > 0 ? `/${segment.slice(1, index + 1).join("/")}` : "/"}>
        <Typography variant="caption3" component="span" className={clsx(path !== lastsegment ? "text-gray-600" : "text-gray", "capitalize hover:text-gray animate")}>
          {
            path !== "Accueil" ? path.replace(/-/g, " ") : <RiHome3Line className="inline -mt-1.5" />
          }
        </Typography>
        {
          (lastsegment !== path) && <Typography variant="caption2" component="span" className="ml-2 text-gray-600">/</Typography>
        }
      </Link>
    </div >
  ))


  return (
    <Container className="flex items-center gap-2 py-7">
      {view}
    </Container>
  )
}
