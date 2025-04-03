import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
export const NavBar = () => {
  return (
    <div className="flex flex-row w-full justify-between bg-gray-900/80 px-[2rem] h-[6rem]">
      <div className="w-[6rem] h-auto relative">
        <Link href="/">
          <Image className="object-contain" src="/LOGO.svg" alt="Logo" fill />
        </Link>
      </div>
      <div className="flex flex-row w-[2rem] items-center h-auto relative">
        <Link href="/mynewpage">
          <Menu className="w-[2rem] h-auto" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
