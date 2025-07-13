import type { Metadata } from "next";
import Navbar from "./_/components/Navbar";

export const metadata: Metadata = {
  title: "داشبورد ",
  description: "داشبورد مدیریت",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
