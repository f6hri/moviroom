import { useRouter } from "next/router";
import { LinkProps } from "./interface";

export const ButtonLink: React.FC<LinkProps> = ({ href, title, icon, customStyle }) => {
    const route = useRouter();
    const navigate = () => {
        route.push(href);
    }
    return (
        <button className={`p-3 px-4 flex gap-3 items-center rounded-lg transition ease-in duration-100 hover:bg-primary/50 ${customStyle}`} onClick={navigate}>
            {icon} {title}
        </button>
    )
}