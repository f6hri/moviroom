import { useRouter } from "next/router";
import { DefaultLink } from "../Shared/Link";

interface SidebarLinkProps {
  href: string;
  icon: React.ReactNode;
  title: string;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ href, icon, title }) => {
  const pathname = useRouter().pathname;
  return (
    <DefaultLink
      href={href}
      customStyle={`
        ${pathname === href && styles.root.isActive} 
        ${styles.root.style} 
        ${styles.root.transition} 
        ${styles.root.isHover} 
        ${styles.root.responsive}
      `}
    >
      <>
        {icon} <span className={`${styles.title.style}`}>{title}</span>
      </>
    </DefaultLink>
  );
};

const styles = {
  root: {
    style: `flex items-center p-3 px-4 rounded-lg `,
    transition: `transition ease-in delay-[0.1s] `,
    isHover: `hover:bg-primary/50 `,
    isActive: `bg-primary pointer-events-none `,
    responsive: `lg:flex-row flex-col justify-center lg:justify-start gap-1 lg:gap-3 `,
  },
  title:{
    style:`text-center `
  }
};

export default SidebarLink;
