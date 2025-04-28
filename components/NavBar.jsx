import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
export const NavBar = () => {
  return (
    <div className="top-0 z-80 absolute flex flex-row w-full justify-between  px-[2rem] h-[6rem] bg-transparent max-w-screen">
      <div className="w-[3rem] h-auto relative bg-transparent">
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
