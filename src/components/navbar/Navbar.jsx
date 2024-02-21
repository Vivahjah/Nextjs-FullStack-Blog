import Link from "next/link";
import Links from "./Links";
import styles from "./navbar.module.css";

const Navbar = async () => {
  return (
    <div className={styles.container}>
      <Link href="/ad" className={styles.logo}>
        Logo
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
