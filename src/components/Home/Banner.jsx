"use client";

import Image from "next/image";
import profile from "@/assets/profile/profile.png";

function Banner() {
  return (
    <section className="w-full mx-auto md:h-[720px] h-auto flex justify-center items-center">
      <div className="container mx-auto flex flex-col md:flex-row justify-center">
        <div className="flex flex-col justify-center items-end p-2 mx-auto">
          <h1 className="font-bold  text-slate-500 text-7xl">AMC</h1>
          <div className="flex flex-col justify-center items-end">
            <h1 className="text-3xl font-semibold">Photographer</h1>
            <span className="">IN NYC</span>
          </div>
        </div>

        <div className="">
          <Image
            width={400}
            height={400}
            src={profile}
            alt="profile-image"
            className="w-min-400 md:w-[600px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
