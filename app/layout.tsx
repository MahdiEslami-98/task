import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import GithubIcon from "@/util/icons/github";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Tasks",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // console.log(location.pathname);
  return (
    <html lang="en" className="h-full">
      <body className={`h-full flex flex-col font-sans text-white`}>
        <header className="bg-slate-800">
          <Navbar />
        </header>
        <main className="flex-1 bg-slate-600">{children}</main>
        <footer className="bg-slate-800">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:justify-between gap-y-2 py-4">
            <>
              <Link
                target="_blank"
                className="flex items-center gap-x-2"
                href={"https://github.com/MahdiEslami-98"}
              >
                Github
                <GithubIcon />
              </Link>
            </>
            <div>MahdiEslami&apos;s Tasks</div>
            <div>Tel: 09192532243</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
