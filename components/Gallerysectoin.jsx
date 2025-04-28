import Image from "next/image";
import React from "react";

const Gallerysectoin = () => {
  return (
    <div className=" ">
      <div className="flex flex-row max-w-[77rem] py-10 mx-auto justify-between px-[9rem] h-[6rem] flex-wrap md:text-base">
        <p className="text-sm">
          At our gallery, we are committed to maintaining a <br />
          zero-tolerance stance on discrimination and <br />
          harassment. Dive into our previous exhibitions <br /> that reflect our
          passion for creating a welcoming <br /> and inclusive space for
          everyone.
        </p>
        <h1 className="text-2xl">GALLERY</h1>
      </div>
      <section className="flex flex-col md:flex-row justify-center w-screen overflow-hidden px-4 py-16 gap-4 h-auto">
        <div className="relative h-90 w-90 ">
          <Image
            src={"/Frame_20.png"}
            alt="Frame 20"
            fill
            className="rounded-xl overflow-hidden"
            objectFit="cover "
          />
        </div>
        <div className="flex flex-col w-90 gap-4  h-90 ">
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
      <section className="flex flex-col md:flex-row justify-center w-screen overflow-hidden px-4  gap-4 h-auto py-none">
        <div className="flex flex-col w-90 gap-4  h-90 ">
          <div className="relative w-full h-[50%] overflow-hidden rounded-xl flex flex-col-reverse">
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
        <div className="relative h-90 w-90 ">
          <Image
            src={"/Frame_20.png"}
            alt="Frame 20"
            fill
            className="rounded-xl overflow-hidden"
            objectFit="cover "
          />
        </div>
      </section>
    </div>
  );
};

export default Gallerysectoin;
