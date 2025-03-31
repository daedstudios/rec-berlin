import React from "react";
import { X } from "lucide-react";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Link href="/">
        <div className="flex flex-col items-end p-4 g-2">
          <X text-2xl />
        </div>
      </Link>
      <div className="m-2 p-4  gap-2  flex flex-col items-end">
        <h1 className="flex justify-between font-bold gap-2 ">
          HOME <MoveUpRight className="inline text-red-800 text-[10px]" />
        </h1>
        <h1 className="flex justify-between items-center  gap-2 font-bold">
          EVENTS <MoveUpRight className="inline text-red-800 text-[10px]" />
        </h1>
        <h1 className="flex justify-between items-center  gap-2  font-bold ">
          CONTACT <MoveUpRight className="inline text-red-800 text-[10px]" />
        </h1>
        <h1 className="flex justify-between items-center  font-bold gap-2 ">
          <p>GALLERY</p>
          <MoveUpRight className="inline text-red-800 " />
        </h1>
      </div>
      <p className="flex flex-col items-end p-5">info@rec-berlin.com</p>
    </div>
  );
};

export default page;
