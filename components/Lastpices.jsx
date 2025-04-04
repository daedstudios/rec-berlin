import Image from "next/image";
import React from "react";
import { MoveUpRight } from "lucide-react";
import { Autour_One } from "next/font/google";

export const Lastpices = () => {
  return (
    <div>
      <div className="w-[100%] flex flex-col flex-wrap justify-around  ">
        <h1 className="text-right p-5">GALLERY</h1>
        <p>We have zero tolerance for discrimination, harasment,.</p>
      </div>
      <section className="flex flex-col md:flex-row justify-center w-screen overflow-hidden px-4 py-4 gap-4 h-screen ">
        <div className="relative h-100 w-100">
          <Image
            src={"/Frame_20.png"}
            alt="Frame 20"
            fill
            className="bg-amber-100"
            objectFit="cover "
          />
        </div>
        <div className="flex flex-col w-100 h-100">
          <div className="relative w-full h-[50%]">
            <Image src={"/Frame21.png"} alt="Frame 21" fill objectFit="cover" />
          </div>
          <div className="relative w-full h-[50%] ">
            <Image
              src={"/Frame 22.png"}
              alt="Frame 22"
              fill
              objectFit="cover"
            />
          </div>
          <div className="flex flex-row gap-4 items-end justify-end">
            <p>see more </p>
            <Image
              src={"/ARROW.png"}
              alt="ARROW"
              height={24}
              width={24}
              objectFit="cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lastpices;
