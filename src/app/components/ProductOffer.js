import React from "react";
import Image from "next/image";
import product1 from "/public/beautiful-shot-stylish-grey-chair-isolated-white-background.png";
import product2 from "/public/music-podcast-background-with-headphones-cup-coffee-blue-table-flat-lay-top-view-flat-lay.png";
import { SearchIcon, ShoppingCart } from "lucide-react";

const ProductOffer = () => {
  return (
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <p className="font-semibold text-white">We Help You</p>
        <h1 className="text-5xl font-bold leading-tight text-primary-foreground">
          Sell <br />
          Stunning <br />
          Our Product
        </h1>
        <p>
          we will guide you through our <br /> unique 5-step brand building
          framework
        </p>
        <div className="relative max-w-xl w-full">
          <button className="flex justify-between items-center rounded-full bg-secondary text-white w-[200px] py-3 px-5">
            <p>More details</p>
            <SearchIcon />
          </button>
        </div>
      </div>

      <div className="relative lg:h-[600px] ">
        <div className="absolute top-32 left-0 w-[200px] h-[200px] bg-[#ffd54f40] rounded-full hidden md:block">
          <div className="relative w-full h-full">
            <div className="absolute bottom-0 right-5">
              <Image
                src={product1}
                alt="Minimal Chair"
                width={200}
                height={200}
                loading="lazy"
              />
              <div className="relative w-full h-full">
                <div className="absolute bottom-5 bg-white shadow-lg p-2 rounded-lg">
                  <p className="text-sm mb-1">Minimal Chair</p>
                  <hr className="border-gray-300 mb-1" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary">$205</span>
                    <ShoppingCart className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Product Image */}
        <div className=" absolute bottom-20 left-[50%] w-[200px] h-[200px] bg-[#9b87f58c] rounded-full">
          <div className="relative w-full h-full">
            <div className="absolute bottom-0 right-5">
              <Image
                src={product2}
                alt="Beats HeadPhone"
                width={200}
                height={200}
                loading="lazy"
              />
              <div className="relative w-full h-full">
                <div className="absolute bottom-5 bg-white shadow-lg p-2 rounded-lg">
                  <p className="text-sm mb-1">Beats HeadPhone</p>
                  <hr className="border-gray-300 mb-1" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary">$205</span>
                    <ShoppingCart className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOffer;
