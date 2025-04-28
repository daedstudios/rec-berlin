import React from "react";
import { X } from "lucide-react";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex flex-col  ">
      <Link href="/">
        <div className="flex flex-col items-end p-4 g-2">
          <X text-2xl />
        </div>
      </Link>
      <div className="m-2 p-4  gap-2  flex flex-row justif w-full">
        <h1 className="font-bold gap-2 ">HOME</h1>
        <Image
          src={"/arrow_outward.png"}
          alt="arrow"
          height={14}
          width={18}
          objectFit="contain"
        />
      </div>
      <div>
        <h1 className="flex justify-between items-center  gap-2 font-bold">
          EVENTS <MoveUpRight className="inline text-[#D7FF48] text-[10px]" />
        </h1>
        <h1 className="flex justify-between items-center  gap-2  font-bold ">
          CONTACT <MoveUpRight className="inline text-[#D7FF48] text-[10px]" />
        </h1>
        <h1 className="flex justify-between items-center  font-bold gap-2 ">
          <p>GALLERY</p>
          <MoveUpRight className="inline text-[#D7FF48] " />
        </h1>
      </div>
      <p className="flex flex-col items-end p-5">info@rec-berlin.com</p>
    </div>
  );
};

export default page;
