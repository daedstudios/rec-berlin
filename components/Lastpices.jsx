import Image from "next/image";
import React from "react";
import { MoveUpRight } from "lucide-react";
import { Autour_One } from "next/font/google";
import Gallerysectoin from "./Gallerysectoin";

export const Lastpices = () => {
  return (
    <div>
      <div className="w-[100%] flex flex-col flex-wrap justify-between ">
        <h1 className="text-right p-5">GALLERY</h1>
        <p className="p-5">
          We have zero tolerance for discrimination, harasment,.
        </p>
      </div>
      {/* <Gallerysectoin /> */}
      <section className="flex flex-col md:flex-row justify-center w-screen overflow-hidden px-4 py-10 gap-4 h-auto">
        <div className="relative h-100 w-100 ">
          <Image
            src={"/Frame_20.png"}
            alt="Frame 20"
            fill
            className="rounded-xl overflow-hidden"
            objectFit="cover "
          />
        </div>
        <div className="flex flex-col w-100 gap-4  h-100 ">
          <div className="relative w-full h-[50%] overflow-hidden rounded-xl">
            <Image
              src={"/Frame21.png"}
              alt="Frame 21"
              fill
              objectFit="cover"
              className=" "
            />
          </div>
          <div className="relative w-full h-[50%] overflow-hidden rounded-xl ">
            <Image
              src={"/Frame 22.png"}
              alt="Frame 22"
              fill
              objectFit="cover"
            />
          </div>
        </div>
      </section>
      <div className="flex w-screen flex-row gap-4 ml-[-3rem] items-end justify-end pr-12">
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
  );
};

export default Lastpices;
