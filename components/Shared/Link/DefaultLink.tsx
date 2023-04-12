import { useRouter } from "next/router";
import { LinkProps } from "./interface";

export const DefaultLink: React.FC<LinkProps> = ({ href, title, icon, customStyle }) => {
    const route = useRouter();
    const navigate = () => {
        route.push(href);
    }
    return (
        <button className={`hover:text-slate-100 flex items-center gap-3 transition ease-in hover:text-primary ${customStyle}`} onClick={navigate}>
            {icon}{title}
        </button>
    )
}