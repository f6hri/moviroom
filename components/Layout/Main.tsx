import { LayoutProps } from "./interface";

export const Main: React.FC<LayoutProps> = ({ children, customStyle }) => (
  <main className={`my-10 ${customStyle}`}>{children}</main>
);
