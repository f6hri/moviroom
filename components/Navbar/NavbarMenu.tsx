import { useState } from "react";
import { FiCompass, FiDelete, FiMenu, FiSearch, FiTv, FiX } from "react-icons/fi";
import NavbarMenuLink from "./NavbarMenuLink";

const NavbarMenu: React.FC = () => {
  const [isOpen, open] = useState(false);
  return (
    <>
      <button
        className={`${styles.menuButton.style}`}
        onClick={() => {
          open(true);
        }}
      >
        <FiMenu />
      </button>
      <div
        className={`${styles.menuContainer.style} ${
          isOpen === true ? "block" : "hidden"
        } ${styles.menuContainer.transition}`}
      >
        <button
          className={`${styles.closeButton.style}`}
          onClick={() => {
            open(false);
          }}
        >
          <FiX />
        </button>
        <nav className={`${styles.navContent.style}`}>
          <NavbarMenuLink href="/" icon={<FiCompass />} title="Keşfet"/>
          <NavbarMenuLink href="/series" icon={<FiTv />} title="Diziler"/>
          <NavbarMenuLink href="/search" icon={<FiSearch />} title="Arama Yap"/>
        </nav>
      </div>
    </>
  );
};

const styles = {
  menuContainer: {
    style: `fixed z-20 left-0 top-0 right-0 bottom-0 bg-dark flex justify-center items-center `,
    transition:`transition transform ease-in `
  },
  menuButton: {
    style: ` text-2xl `,
  },
  closeButton: {
    style: `absolute right-5 top-5 text-4xl `,
  },
  navContent:{
    style:`flex flex-col gap-6 `
  }
};

export default NavbarMenu;
