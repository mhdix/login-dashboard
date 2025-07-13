"use client";
import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.scss";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const handleLogOut = (): void => {
    localStorage.removeItem("token");
    router.push("/auth");
  };
  return (
    <header className={styles.header}>
      <nav aria-label="Main Navigation" className={styles.header__container}>
        <ul>
          <li className={styles.header__items}>
            <Link
              className={pathname.startsWith("/dashboard") ? styles.active : ""}
              href="/dashboard"
            >
              خانه
            </Link>
            <a onClick={() => handleLogOut()} className={styles.logOut}>
              خروج از حساب
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
