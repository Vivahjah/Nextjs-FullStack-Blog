"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./NavLinks";
import Image from "next/image";
const links = [
  { title: "Homepage", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];

const isAdmin = true;
const session = true;

const Links = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.links}>
      {links.map((link) => (
        <NavLink items={link} key={link.title} />
      ))}
      {session ? (
        <>
          {isAdmin && <NavLink items={{ title: "Admin", path: "/admin" }} />}
          <button className={styles.logout}>Logout</button>
        </>
      ) : (
        <NavLink items={{title : "Login", path : "/login"}} />
      )}
     <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;