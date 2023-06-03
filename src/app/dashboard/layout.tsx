import { Metadata } from "next";
import style from "./style.module.css";

export const metadata: Metadata = {
  title: "Simple Dashboard",
  description: "Job booking website made easy for you and me",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={style.main}>
      <div className={style.navBar}> This is Nav</div>
      <div>{children}</div>
    </main>
  );
}
