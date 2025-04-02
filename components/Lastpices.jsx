import Image from "next/image";
import React from "react";

export const Lastpices = () => {
  return (
    <div>
      <div className="flex flex-col flex-wrap justify-around p-10">
        <h1 className="text-right p-5">GALLERY</h1>
        <p>We have zero tolerance for discrimination, harasment,.</p>
      </div>
      <section className="flex flex-col md:flex-row justify-center w-screen overflow-hidden px-4 py-4 gap-4 h-screen ">
        <div className="relative h-100 w-100 rounded-md">
          <Image
            src={"/club1.png"}
            alt="club 1"
            fill
            className=""
            objectFit="cover "
          />
        </div>
        <div className="flex flex-col w-100 h-100">
          <div className="relative w-full h-[50%]">
            <Image src={"/club2.png"} alt="club 2" fill objectFit="cover" />
          </div>
          <div className="relative w-full h-[70%] md:h-[50%]">
            <Image src={"/club3.png"} alt="club 2" fill objectFit="cover" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lastpices;
