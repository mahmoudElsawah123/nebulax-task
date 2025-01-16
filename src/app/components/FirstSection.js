import React from "react";
import SearchBar from "./SearchBar";
import ProfileCard from "./ProfileCard";
import Image from "next/image";
import banner from "/public/banner.jpg";

const FirstSection = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl font-bold leading-tight text-primary-foreground">
            We Help You <br />
            Build & Grow an <br />
            Online Business
          </h1>
          <SearchBar />
          <div className="relative hidden md:block">
            <ProfileCard />
          </div>
        </div>

        <div className="relative lg:h-[600px]">
          <Image
            src={banner}
            alt="Business Growth"
            className="w-full h-full object-contain"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default FirstSection;
