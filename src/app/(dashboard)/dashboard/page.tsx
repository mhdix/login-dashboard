"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import styles from './Dashboard.module.scss'
const Dashboard = () => {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/dashboard");
    } else {
      router.push("/auth");
    }
  }, []);
  return <div className={styles.dashboard}>
    <div className={styles.message}>به داشبورد مدیریت خوش آمدید</div>
  </div>;
};

export default Dashboard;
