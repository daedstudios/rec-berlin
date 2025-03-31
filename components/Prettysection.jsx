import React from "react";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
export const Prettysection = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap justify-around p-10">
        <h1 className="font-stretch-semi-condensed text-[40px]">
          FEEL THE TECH <br />
          VIBE
        </h1>
        <Link href="/Prettypage">
          <p className="text-red-800 ">
            see events <MoveUpRight className="inline" />
          </p>
        </Link>
      </div>
      <div className="flex flex-row justify-around">
        <p className="text-red-800 ">
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
