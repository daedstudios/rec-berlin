"use client";
import Midsection from "@/components/Midsection";
import Herosection from "@/components/Herosection";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import { useState } from "react";
import Prettysection from "@/components/Prettysection";
import Picsection from "@/components/Picsection";
import { Lastpices } from "@/components/Lastpices";

export default function Home() {
  return (
    <>
      {/* <NavBar /> */}
      <Herosection />
      <Midsection />
      <Prettysection />
      <Picsection />
      <Lastpices />
    </>
  );
}
