import { IconProps } from "@/src/types/IconProp";
import clsx from "clsx";
import React from "react";
import { Spinner } from "../spinner/Spinner";
import { LinkType, LinkTypes } from "@/src/lib/link-type";
import Link from "next/link";

interface Props {
  size?: "small" | "medium" | "large";
  variant?: "accent" | "secondary" | "outline" | "disabled" | "success" | "danger" | "ico";
  icon?: IconProps;
  iconTheme?: "accent" | "secondary" | "gray";
  iconPosition?: "left" | "right";
  disabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode; // optionnel s'il y a une icone ou pas
  baseUrl?: string;
  linkType?: LinkType;
  action?: Function;
  fullWith?: boolean;
  type?: "button" | "submit"
}

export const Button = ({
  size = "medium",
  variant = "accent",
  icon,
  iconTheme = "accent",
  iconPosition = "right",
  disabled,
  isLoading,
  children,
  baseUrl,
  linkType = "internal",
  type = "button",
  fullWith = false,
  action = () => {},
}: Props) => {
  let variantStyles: string = "",
    sizeStyles: string = "",
    iconSize: number = 0;

  switch (variant) {
    case "accent":
      variantStyles = "bg-primary hover:bg-primary-400 text-white rounded";
      break;
    case "secondary":
      variantStyles =
        "bg-primary-300 hover:bg-primary-300/50 text-primary rounded";
      break;
    case "outline":
      variantStyles =
        "bg-white hover:bg-gray-400/50 border border-gray-500 text-gray-900 rounded";
      break;
    case "disabled":
      variantStyles =
        "bg-gray-400 border-gray-500 text-gray-600 rounded cursor-not-allowed";
      break;
    case "success":
      variantStyles =
      "bg-secondary hover:bg-secondary-400 text-white rounded";
      break;
    case "danger":
      variantStyles =
      "bg-alert-danger hover:bg-alert-danger/75 text-white rounded";
      break;
    case "ico":
      if (iconTheme === "accent") {
        // Default
        variantStyles =
          "bg-primary hover:bg-primary-400 text-white rounded-full";
      }
      if (iconTheme === "secondary") {
        variantStyles =
          "bg-primary-300 hover:bg-primary-300/50 text-primary rounded-full";
      }
      if (iconTheme === "gray") {
        variantStyles = "bg-gray-800 hover:bg-gray-700 text-white rounded-full";
      }
      break;
    default:
      break;
  }

  switch (size) {
    case "small":
      sizeStyles = `text-caption3 font-medium ${
        variant === "ico"
          ? "flex items-center justify-center w-[40px] h-[40px]"
          : "px-[14px] py-[12px]"
      }`;
      iconSize = 18
      break;
    case "medium": // Default
      sizeStyles = `text-caption2 font-medium ${
        variant === "ico"
          ? "flex items-center justify-center w-[50px] h-[50px]"
          : "px-[18px] py-[15px]"
      } }`;
      iconSize = 20;
      break;
    case "large":
      sizeStyles = `text-caption1 font-medium ${
        variant === "ico"
          ? "flex items-center justify-center w-[60px] h-[60px]"
          : "px-[22px] py-[18px]"
      } }`;
      iconSize = 24;
      break;
    default:
      break;
  }

  const buttonContent = (
  <> 
    {
      isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            {variant === "accent" || variant === "ico" ? (<Spinner size="small" variant="white" />) : variant === "secondary" || iconTheme === "secondary" ? (<Spinner size="small" variant="secondary" />) : (<Spinner size="small" />)}
          </div>
    )}
    <div className={clsx(isLoading && "invisible")}>

      {icon && variant === "ico" ? (
        <icon.icon size={iconSize} />
        ) : (
          <div className={clsx(icon && "flex items-center gap-1")}>
          {icon && iconPosition === "left" && (
            <icon.icon size={iconSize} />
            
            )}
        {children}
        {icon && iconPosition === "right" && (
          <icon.icon size={iconSize} />
          
          )}

        </div>
      )}
    </div>
  </>
  )

  const handleClick = () => {
    if(action) {
      action()
    }
  }

  const buttonElement = (
    <button
      type={type}
      className={clsx(variantStyles, sizeStyles, iconSize, isLoading && "cursor-not-allowed", fullWith && "w-full", "relative animate")}
      onClick={handleClick}
      disabled={disabled || isLoading ? true : false}
    >
     {buttonContent} 
    </button>
  )

  if (baseUrl) {
    if(linkType === LinkTypes.EXTERNAL){
      return(
        <a href={baseUrl} target="_blank">
          {buttonElement}
        </a>
        )
    } else {
      return <Link href={baseUrl}>{buttonElement}</Link>
    }
  }
  return buttonElement
};
