import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'ورود به داشبورد',
  description: 'داشبورد مدیریت'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
