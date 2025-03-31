import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

export const NavBar = () => {
  return (
    <div className="flex flex-row w-full justify-between bg-gray-900/80 ">
      <Link href="/">
        <h1 className="text-[2rem] font-bold text-red-800">Reg</h1>
      </Link>
      <Link href="/mynewpage">
        <Menu />
      </Link>
    </div>
  );
};

export default NavBar;
