import { useState } from "react";
import { FiDelete, FiMenu, FiX } from "react-icons/fi";

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
      </div>
    </>
  );
};

const styles = {
  menuContainer: {
    style: `fixed z-20 left-0 top-0 right-0 bottom-0 bg-primary `,
    transition:`transition transform ease-in `
  },
  menuButton: {
    style: ` text-2xl `,
  },
  closeButton: {
    style: `absolute right-5 top-5 text-4xl `,
  },
};

export default NavbarMenu;
