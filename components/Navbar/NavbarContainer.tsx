import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { Container } from "../Layout";
import { ButtonLink } from "../Shared/Link";
import { FiArrowLeft, FiSearch } from "react-icons/fi";

export const NavbarContainer: React.FC = () => {
  const route = useRouter();
  return (
    <nav className={`py-5 bg-dark sticky top-0 z-10`}>
      <Container>
        <div className="flex items-center gap-8">
          {route.pathname != "/" && (
            <button onClick={() => route.back()}>
              <FiArrowLeft />
            </button>
          )}
          <Link href="/">
            <Image
              src="/assets/Logo.png"
              alt="MOVIROOM_LOGO"
              width={150}
              height={100}
            />
          </Link>
          <div className={`flex items-center gap-2`}>
            <ButtonLink
              href="/series"
              title="Diziler"
              customStyle={`${
                route.pathname === "/series" && "bg-primary pointer-events-none"
              }`}
            />
            <ButtonLink
              href="/search"
              icon={<FiSearch />}
              customStyle={`${
                route.pathname === "/search" && "bg-primary pointer-events-none"
              }`}
            />
          </div>
        </div>
      </Container>
    </nav>
  );
};
