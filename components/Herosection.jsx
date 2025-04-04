import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Herosection = () => {
  return (
    <div className="relative w-[100%] h-screen overflow-hidden flex justify-around">
      <img
        src="Regimange.png"
        alt="Reg"
        className="w-[100%] h-screen z-0 absolute "
      />
      <div className="w-[100%] h-screen bg-gray-900/80 absolute flex items-center justify-center">
        <h1 className="bg-none text-white p-5 text-6xl colo">
          THE N.1 CLUB EXPERIENCE IN THE <br className="p-5" />
          HEART OF BERLIN <br />
          <div className="flex flex-row justify-between mt-[3rem]">
            <Link href="/Buttonpage">
              <button className="bg-[#D7FF48] px-[1.5rem] h-[2.5rem] flex flex-row  justify-between items-center rounded-[2rem] text-2xl text-[15px] text-neutral-950">
                See events <ArrowRight />
              </button>
            </Link>
            <p className="text-[20px] self-end">
              explore our spaces and visit us on <br />
              instagram.
            </p>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default Herosection;
