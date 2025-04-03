import Image from "next/image";
import React from "react";

export const Picsection = () => {
  return (
    <div className="flex justify-around">
      <div className="flex justify-around p-5">
        <h1 className="">RESIDENTS</h1>
        <p className="text-right p-5">
          We have zero tolerance for discrimination, harasment,.
        </p>
      </div>
      <section className="flex flex-row w-full overflow-hidden px-4 py-6 rounded-3xl">
        <div className="relative h-40 w-20">
          <Image src={"/Frame222.png"} alt="Frame 222" fill objectFit="cover" />
        </div>
        <div className="relative h-40 w-20">
          <Image src={"/Frame27.png"} alt="Frame 27" fill objectFit="cover" />
        </div>
        <div className="relative h-40 w-20">
          <Image src={"/Frame28.png"} alt="Frame 28" fill objectFit="cover" />
        </div>
      </section>
    </div>
  );
};

export default Picsection;
