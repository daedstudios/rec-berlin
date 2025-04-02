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
      <div className="relative h-40 w-20">
        <Image src={"/Frame_20.png"} alt="Frame 20" fill />
      </div>
      <div className="relative h-40 w-20">
        <Image src={"/Frame27.png"} alt="Frame 27" fill objectFit="cover" />
      </div>
      <div className="relative h-40 w-20">
        <Image src={"/Frame28.png"} alt="Frame 28" fill />
      </div>
    </div>
  );
};

export default Picsection;
