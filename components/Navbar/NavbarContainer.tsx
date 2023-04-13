import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { Container } from "../Layout";
import NavbarMenu from "./NavbarMenu";

export const NavbarContainer: React.FC = () => {
  const pathname = useRouter().pathname;
  console.log(pathname)
  return (
    <nav className={`${styles.root.style} ${(pathname != "/series/[id]" && pathname != "/watch/[id]") && styles.root.responsive}`}>
      <Container>
        <div className={`${styles.navContent.style}`}>
          <Link href="/">
            <Image
              src="/assets/Logo.png"
              alt="MOVIROOM_LOGO"
              width={150}
              height={100}
            />
          </Link>
          <NavbarMenu />
        </div>
      </Container>
    </nav>
  );
};

const styles = {
  root: {
    style: `py-3 bg-dark sticky top-0 z-20 `,
    responsive: `md:hidden block `,
  },
  navContent: {
    style: `flex items-center justify-between gap-8 `
  }
};
