import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <div>
          <Navbar2 />
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
