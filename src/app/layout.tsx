"use client"
import "./globals.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from './page.module.scss'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/auth");
    } 
  }, []);

  return (
    <html lang="fa" dir="rtl">
      <body className={styles.main}>
        {children}
      </body>
    </html>
  );
}
