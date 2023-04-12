import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { ButtonLink } from "../Shared/Link";
import { FiCompass, FiTv, FiSearch } from "react-icons/fi";

export const SidebarContainer: React.FC = () => {
  const route = useRouter();
  return (
    <div className={`col-span-1 px-5`}>
      <div className={`sticky top-10 w-full`}>
        <Link href="/">
          <Image
            src="/assets/Logo.png"
            alt="MOVIROOM_LOGO"
            width={150}
            height={100}
          />
        </Link>
        <div className={`flex flex-col gap-5 mt-5`}>
          <ButtonLink
            href="/"
            icon={<FiCompass />}
            title="Keşfet"
            customStyle={`text-xl ${
              route.pathname === "/" && "bg-primary pointer-events-none"
            }`}
          />
          <ButtonLink
            href="/series"
            icon={<FiTv />}
            title="Diziler"
            customStyle={`text-xl ${
              route.pathname === "/series" && "bg-primary pointer-events-none"
            }`}
          />
          <ButtonLink
            href="/search"
            icon={<FiSearch />}
            title="Arama Yap"
            customStyle={`text-xl ${
              route.pathname === "/search" && "bg-primary pointer-events-none"
            }`}
          />
        </div>
      </div>
    </div>
  );
};
