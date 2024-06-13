import Link from "next/link";

import styles from "@/styles/components/header.module.css";

import { IconLogoLarge, IconLogoSmall } from "../../public/svgs";

export default function Header() {
  return (
    <div className={styles.header_container}>
      <Link href="/" >
        <div className={styles.header}>
          <IconLogoLarge />
        </div>
        <div className={styles.header_mobile}>
          <IconLogoSmall />
        </div>
      </Link>
    </div>
  );
};

