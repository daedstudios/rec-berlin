import React from "react";
import { MoveUpRight } from "lucide-react";

export const Midsection = () => {
  return (
    // <div className="">
    <>
      <div className="flex flex-col max-w-[77rem] justify-center py-10 mx-auto">
        <h1 className="text-right font-stretch-semi-condensed text-[40px]">
          UPCOMING EVENTS
        </h1>
        <p className="">
          We have zero tolerance for discrimination, harasment..
        </p>
      </div>
      <div className="w-full flex flex-col justify-center max-w-[77rem] overflow-hidden items-center align-middle  divide-y py-3 mx-auto">
        <p className=" flex flex-row justify-between w-full py-3 text-center">
          2023-10-01 Bass Drop Festival Tickets
          <MoveUpRight className="inline text-[#D7FF48]" />
        </p>
        <p className="flex flex-row justify-between w-full py-3 text-center">
          2023-10-01 Neon Nights{" "}
          <MoveUpRight className="inline text-[#D7FF48]" />
        </p>
        <p className="flex flex-row justify-between w-full py-3 text-center">
          2023-10-15 Rave Under The Stars{" "}
          <MoveUpRight className="inline text-[#D7FF48]" />
        </p>
        <p className="flex flex-row justify-between w-full py-3 text-center">
          2023-10-15 Drum & Bass Extravaganza{" "}
          <MoveUpRight className="inline text-[#D7FF48]" />
        </p>
      </div>
    </>
  );
};

export default Midsection;
