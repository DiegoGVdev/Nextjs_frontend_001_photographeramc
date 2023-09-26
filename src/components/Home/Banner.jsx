import Image from "next/image";
import profile from "@/assets/profile/profile.png";

function Banner() {
  return (
    <section className="w-full mx-auto h-[1080px]">
      <div className="container mx-auto flex justify-center p-4 m-4 ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-3xl">
            Anderson <span className="text-slate-500 text-5xl">MC</span>
          </h1>
          <div className="">
            <span>I am a</span>
            <h1 className="text-9xl">Photographer</h1>
          </div>
        </div>

        <div className="">
          <Image width={400} height={400} src={profile} alt="profile-image" className="" />
        </div>

      </div>
    </section>
  );
}

export default Banner;

