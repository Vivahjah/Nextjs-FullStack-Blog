"use client"

import { usePathname } from "next/navigation";
import styles from "./navlinks.module.css";
import Link from "next/link";

const NavLink = ({ items }) => {
  const pathName = usePathname();


  return (
    <Link
      href={items.path}
      className={`${styles.container} ${
        pathName === items.path && styles.active
      }`}
    >
      {items.title}
    </Link>
  );
};

export default NavLink;
