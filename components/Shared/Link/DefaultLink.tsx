import NextLink from "next/link";
import { LinkProps } from "./interface";

export const DefaultLink: React.FC<LinkProps> = ({
  href,
  children,
  customStyle,
}) => {
  return (
    <NextLink href={href} className={`font-medium ${customStyle}`}>
      {children}
    </NextLink>
  );
};
