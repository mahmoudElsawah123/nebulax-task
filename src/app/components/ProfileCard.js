import Image from "next/image";
import React from "react";
import banner from "/public//banner.jpg";
const ProfileCard = () => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-lg w-48">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 rounded-full bg-primary overflow-hidden">
          <Image
            src={banner}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">James Bruno</h3>
          <p className="text-sm text-gray-500">Digital Marketer</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
