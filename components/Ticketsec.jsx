import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ChevronDown } from "lucide-react";
export const Ticketsec = () => {
  return (
    <>
      <div className="relative w-full max-w-[77rem] mx-auto h-[60vh] overflow-hidden ">
        <Image
          src="/Rectangle23.png"
          alt="Rectangle 23"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 z-10 flex flex-col  gap-8 translate-y-50 px-[13rem] h-[6rem]">
          <h1 className="text-2xl text-left">BASS DROP FESTIVAL</h1>
          <div className="flex flex-row items-center justify-between w-full gap-4">
            <button className="px-5 h-10 rounded-full text-sm bg-[#D7FF48] text-stone-950 flex items-center gap-2">
              Tickets <ArrowRight />
            </button>
            <p>2023-10-01</p>
          </div>
        </div>
      </div>

      <div className="py-5 flex justify-center items-center">
        <p>
          Join us for an electrifying night of drum and bass! Experience the
          beats that will keep <br />
          you moving all night long. Our event promotes a vibrant and inclusive
          atmosphere <br />
          where everyone is welcome. Let's dance together in a space free from
          discrimination <br />
          and negativity!
        </p>
      </div>

      <div className="flex flex-row justify-between py-8 text-2xl px-[13rem] h-[6rem]">
        <h1>LINE UP</h1>
        <h1>YOUR DETAILS</h1>
      </div>

      <div className="flex flex-row justify-between px-50 h-[16rem]">
        <div className="flex flex-col gap-2 py-3 ">
          <p>DJ Vortex</p>
          <p>DJ EchoWave</p>
          <p>DJ Neon Pulse</p>
          <p>DJ Sonic Dream</p>
        </div>
        <div className=" flex flex-col  max-w-[77rem]     divide-y   ">
          <p className="flex flex-row justify-between  py-3 text-center w-70 mx-auto">
            First Name
          </p>
          <p className="flex flex-row justify-between w-full py-3 text-center">
            Last Name
          </p>
          <p className="flex flex-row justify-between w-full py-3 text-center ">
            Number of Tickets
            <ChevronDown
              size={18}
              className="text-[#D7FF48] inline-flex ml-full"
            />
          </p>
          <p>
            <p>
              Total: 15 USD
              <button className="px-5 py-16 h-10 rounded-full text-sm bg-[#D7FF48] text-stone-950 items-center gap-2 inline-flex">
                buy now
                <ArrowRight className="inline-flex  text-stone-950  t" />
              </button>
            </p>
          </p>
        </div>
      </div>
    </>
  );
};

export default Ticketsec;
