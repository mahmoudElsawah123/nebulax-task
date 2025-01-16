import React from "react";
import Image from "next/image";
import HumanImage from "/public/profile.png";

const Contact = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center mt-10">
        <div className="w-[80%] mx-auto mt-10 p-5 bg-white shadow-lg rounded-2xl">
          <h2 className="text-3xl font-bold text-center mb-10">Write Us</h2>

          <div className="max-w-md mx-auto space-y-6">
            <div>
              <input
                type="email"
                id="email4"
                placeholder="mahmoud@gmail.com"
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div>
              <textarea
                id="comment"
                placeholder="Leave a comment..."
                required
                rows={4}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div className="relative max-w-xl w-full mx-auto">
              <button className="flex justify-between items-center rounded-full bg-secondary text-white w-[200px] py-3 px-5">
                Send Your Message
              </button>
            </div>
          </div>
        </div>

        <div className="relative lg:h-[600px]">
          <Image
            src={HumanImage}
            alt="Business Growth"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
