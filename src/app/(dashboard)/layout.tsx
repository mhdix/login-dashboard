import type { Metadata } from "next";
import Navbar from "./_/components/Navbar";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard layout",
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
