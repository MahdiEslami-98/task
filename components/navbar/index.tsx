"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="px-6 py-4 container mx-auto">
      <ul className="flex items-center gap-x-6">
        <li
          className={`${
            pathname === "/" ? "underline" : ""
          } underline-animate underline-offset-4`}
        >
          <Link href={"/"}>Question1</Link>
        </li>
        <li
          className={`${
            pathname === "/q2" ? "underline" : ""
          } underline-animate underline-offset-4`}
        >
          <Link href={"/q2"}>Question2</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
