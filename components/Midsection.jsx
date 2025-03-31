import React from "react";
import { MoveUpRight } from "lucide-react";

export const Midsection = () => {
  return (
    <div>
      <div className="flex justify-around">
        <h1 className="text-right p-5">UPCOMING EVENTS</h1>
        <p className="p-5">
          We have zero tolerance for discrimination, harasment..
        </p>
      </div>
      <div className="flex flex-col justify-around items-center border-b border-t divide-y py-3">
        <p className="w-full py-3 text-center">
          2023-10-01 Bass Drop Festival Tickets
          <MoveUpRight className="inline text-blue-600" />
        </p>
        <p className="w-full py-3 text-center">
          2023-10-01 Neon Nights{" "}
          <MoveUpRight className="inline text-blue-600" />
        </p>
        <p className="w-full py-3 text-center">
          2023-10-15 Rave Under The Stars{" "}
          <MoveUpRight className="inline text-blue-600" />
        </p>
        <p className="w-full py-3 text-center">
          2023-10-15 Drum & Bass Extravaganza{" "}
          <MoveUpRight className="inline text-blue-600" />
        </p>
      </div>
    </div>
  );
};

export default Midsection;
