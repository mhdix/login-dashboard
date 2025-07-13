"use client";
import React from "react";
import Button from "./_/components/Button";
import { useRouter } from "next/navigation";
import styles from "./not-found.module.scss";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className={styles.notFound}>
      <p className={styles.notFound__message}>صفحه ی مورد نظر پیدا نشد</p>
      <Button
        className={styles.notFound__button}
        onClick={() => router.push("/dashboard")}
      >
        رفتن به داشبورد
      </Button>
    </div>
  );
}
