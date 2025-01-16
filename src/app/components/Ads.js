import React from "react";
import Image from "next/image";

// Import company logos
import companyLogo1 from "/public/company-logo-1.svg";
import companyLogo2 from "/public/company-logo-2.svg";
import companyLogo3 from "/public/company-logo-3.svg";
import companyLogo4 from "/public/company-logo-4.svg";

const CompanyAds = () => {
  const companyLogos = [companyLogo1, companyLogo2, companyLogo3, companyLogo4];

  return (
    <div className="max-w-7xl mx-auto flex justify-between items-center bg-gray-100 bg-opacity-90 my-5 shadow-lg py-2 px-5">
      {/* Section title */}
      <h3 className="text-primary-foreground">
        Companies We Have Helped Build
      </h3>
      <div className="flex gap-10">
        {companyLogos.map((logo, index) => (
          <Image key={index} src={logo} alt="company-logo" loading="lazy" />
        ))}
      </div>
    </div>
  );
};

export default CompanyAds;
