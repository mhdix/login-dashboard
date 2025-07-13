"use client";
import { useEffect, useState } from "react";
import styles from "./Auth.module.scss";
import Button from "@/app/_/components/Button";
import { useRouter } from "next/navigation";

interface RandomUser {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

export default function Auth() {
  const [user, setUser] = useState<RandomUser>();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const router = useRouter();
  const api = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/dashboard");
    }
  }, []);

  useEffect(() => {
    fetch(`${api}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data.results[0]);
        console.log("Random User Data:", data.results[0]);
      })
      .catch((error) => console.error("Error fetching random user:", error));
  }, [api]);

  const authUser = (): void => {
    const token = JSON.stringify(user);
    localStorage.setItem("token", token);
    router.push("/dashboard");
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${styles.loginContainer} ${styles.lightMode}`}>
      <div className={styles.loginBox}>
        <h1 className={styles.title}>ورود</h1>
        {user ? (
          <div className={styles.userInfo}>
            <p>آیا می‌خواهید با این حساب وارد شوید؟</p>
            <img
              src={user.picture.medium}
              alt={`${user.name.first} ${user.name.last}`}
              style={{ borderRadius: "50%", marginBottom: "10px" }}
            />
            <h2>
              {user.name.title}. {user.name.first} {user.name.last}
            </h2>
            <p>{user.email}</p>
            <div className={styles.inputGroup}>
              <label htmlFor="username" className={styles.inputLabel}>
                نام کاربری :
              </label>
              <input
                id="username"
                type="text"
                value={`${user.name.first} ${user.name.last}`}
                disabled
                className={styles.inputField}
              />
            </div>
            <Button onClick={authUser} className={styles.button}>
              ورود
            </Button>
          </div>
        ) : (
          <p>در حال بارگذاری اطلاعات کاربر...</p>
        )}
        {/* <button onClick={toggleDarkMode} className={styles.toggleButton}>
          {isDarkMode ? "حالت روشن" : "حالت تاریک"}
        </button> */}
      </div>
    </div>
  );
}
