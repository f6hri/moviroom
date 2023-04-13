import { useRouter } from "next/router";
import { DefaultLink } from "../Shared/Link";

interface NavbarMenuLinkProps{
    href:string;
    icon?:React.ReactNode;
    title:string;
}

const NavbarMenuLink:React.FC<NavbarMenuLinkProps> = ({href,icon,title}) => {
    const pathname = useRouter().pathname;
    return(
        <DefaultLink href={href} customStyle={`
            ${pathname === href && styles.root.isDisabled} 
            ${styles.root.style}
            ${styles.root.transition}
        `}>
            {icon} {title}
        </DefaultLink>
    );
}

const styles = {
    root:{
        style:`flex items-center gap-2 text-2xl p-3 px-4 rounded-lg `,
        transition:`transition ease delay-[0.2s] hover:bg-primary/75 `,
        isDisabled:`pointer-events-none bg-primary `
    }
}

export default NavbarMenuLink;