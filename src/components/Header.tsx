import Link from "next/link";

import styles from "@/styles/components/header.module.css";

import { IconLogoLarge, IconLogoSmall } from "../../public/svgs";

export default function Header() {
  return (
    <div className={styles.header_container}>
      <div className={styles.header}>
        <Link href="/" >
          <IconLogoLarge />
        </Link>
      </div>
      <div className={styles.header_mobile}>
        <Link href="/" >
          <IconLogoSmall />
        </Link>
      </div>
    </div>
  );
};

