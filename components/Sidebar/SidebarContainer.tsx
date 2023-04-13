import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import SidebarLink from "./SidebarLink";
import { FiCompass, FiTv, FiSearch } from "react-icons/fi";

export const SidebarContainer: React.FC = () => {
  const route = useRouter();
  return (
    <div className={`
      ${styles.root.style}
      ${styles.root.responsive}
    `}>
      <div className={`
        ${styles.content.style}
      `}>
        <Link href="/">
          <Image
            src="/assets/Logo.png"
            alt="MOVIROOM_LOGO"
            width={150}
            height={100}
          />
        </Link>
        <div className={`flex flex-col gap-5 mt-5`}>
          <SidebarLink href="/" icon={<FiCompass />} title="Keşfet" />
          <SidebarLink href="/series" icon={<FiTv />} title="Diziler" />
          <SidebarLink href="/search" icon={<FiSearch />} title="Arama Yap" />
        </div>
      </div>
    </div>
  );
};

const styles = {
  root:{
    style: `col-span-1 px-5 `,
    responsive:`hidden md:block `
  },
  content:{
    style:`sticky top-10 w-full `
  }, 
}
