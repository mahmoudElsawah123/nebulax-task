import React from "react";
import Image from "next/image";
import { Card } from "flowbite-react";

// Import fashion images
import FashionImage1 from "/public/establishing-shot-stylish-apartment-with-comfortable-bed-rezidential-area.jpg";

// Data array for fashion images
const fashionData = [
  {
    image: FashionImage1,
    title: "Fashion Store 1",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page.",
  },
  {
    image: FashionImage1,
    title: "Fashion Store 2",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page.",
  },
  {
    image: FashionImage1,
    title: "Fashion Store 3",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page.",
  },
];

const CardGallery = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 justify-center items-center gap-5">
        {fashionData.map((item, index) => (
          <Card key={index} className="max-w-sm bg-white min-h-[350px]">
            <Image
              src={item.image}
              alt={item.title}
              className="w-full h-full"
            />
            <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              {item.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {item.desc}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardGallery;
