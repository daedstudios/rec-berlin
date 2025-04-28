import Image from "next/image";
import React from "react";

export const Picsection = () => {
  return (
    <div className="h-auto flex flex-col max-w-[77rem] justify-around w-full mx-auto p-5 ">
      <div className="">
        <h1 className="">RESIDENTS</h1>
        <p className="text-right ">
          We have zero tolerance for discrimination, harasment,.
        </p>
      </div>
      <section className="flex flex-row w-full overflow-hidden px-4 gap-4 h-auto flex-wrap justify-center pt-8">
        <div>
          <div className="relative overflow-hidden rounded-xl w-64 h-64">
            <Image
              src={"/Frame222.png"}
              alt="Frame 222"
              fill
              objectFit="cover"
            />
          </div>
          <p>resident 1</p>
        </div>
        <div>
          <div className="relative overflow-hidden rounded-xl w-64 h-64">
            <Image src={"/Frame27.png"} alt="Frame 27" fill objectFit="cover" />
          </div>
          <p>resident 1</p>
        </div>
        <div>
          <div className="relative overflow-hidden rounded-xl w-64 h-64">
            <Image src={"/Frame28.png"} alt="Frame 28" fill objectFit="cover" />
          </div>
          <p>resident 1</p>
        </div>
      </section>
      <div className="flex flex-row gap-2 ml-20 pt-4">
        <Image
          src={"/ARROW 3.png"}
          alt="arrow 3"
          height={24}
          width={24}
          objectFit="cover"
        />
        <Image
          src={"/ARROW 2.png"}
          alt="arrow 2"
          height={24}
          width={24}
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Picsection;
