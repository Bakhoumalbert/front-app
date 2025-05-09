import clsx from "clsx";

interface Props {
    className?: string;
    children: React.ReactNode
}
export const OnboardingLayout = ({ className, children }: Props) => {
  return (
    <div className={clsx(className, "relative h-screen pb-[91px]")}>
        {children}
    </div>
  )
}
