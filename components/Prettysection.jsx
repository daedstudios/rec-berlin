import React from "react";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
export const Prettysection = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap justify-between mx-auto items-center py-10 w-full max-w-[77rem]">
        <h1 className="font-stretch-semi-condensed text-[40px]">
          FEEL THE TECH <br />
          VIBE
        </h1>
        <Link href="/Prettypage">
          <p className="text-[#D7FF48] ">
            see events <MoveUpRight className="inline" />
          </p>
        </Link>
      </div>
      <div className="flex flex-row flex-wrap justify-between mx-auto items-center py-10 w-full max-w-[77rem]">
        <p className="text-[#D7FF48] ">
          see events <MoveUpRight className="inline" />
        </p>
        <h1 className="font-stretch-semi-condensed text-[40px]">
          JUMP INTO TOP TECH <br />
          BEATS.
        </h1>
      </div>
    </div>
  );
};

export default Prettysection;
