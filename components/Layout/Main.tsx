import { LayoutProps } from "./interface";

export const Main: React.FC<LayoutProps> = ({ children, customStyle }) => (
  <main className={`md:my-10 my-3 ${customStyle}`}>{children}</main>
);
