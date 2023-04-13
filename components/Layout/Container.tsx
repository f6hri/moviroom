import { LayoutProps } from "./interface";

export const Container: React.FC<LayoutProps> = ({ children, customStyle }) => (
    <div className={`container mx-auto px-5 md:px-0 ${customStyle}`}>{children}</div>
);