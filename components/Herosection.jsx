import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Herosection = () => {
  return (
    <div className="relative w-[100%] h-screen overflow-hidden ">
      <img
        src="Frame 20 (3).png"
        alt="Frame 20"
        className="w-[100%] h-screen z-0 absolute"
      />
      <div
        className="w-screen max-w-[70rem] mx-auto h-screen relative z-10 left-0 top-0 p-5
                flex flex-col justify-center items-center"
      >
        <h1 className="bg-none text-white text-[20px]">
          THE N.1 CLUB EXPERIENCE IN THE <br className="py-5" />
          HEART OF BERLIN <br />
        </h1>
        <div className="flex flex-row flex-wrap gap-16 w-full mt-[3rem] items-center justify-center px-[2rem] h-[rem]">
          <Link href="/Buttonpage">
            <button className="px-[1.5rem] h-[2.5rem] flex flex-row  justify-between items-center rounded-[2rem] text-[15px] bg-[#D7FF48] text-stone-950">
              See events <ArrowRight />
            </button>
          </Link>
          <p className="text-right pr-10">
            explore our spaces and visit us on <br />
            instagram.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
