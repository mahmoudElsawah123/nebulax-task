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
    <div className="max-w-7xl mx-auto flex justify-between items-center   my-5 shadow-md py-3 px-5">
      {/* Section title */}
      <h3 className="text-primary-foreground font-semibold text-[#333]">
        Companies We Have Helped Build
      </h3>
      <div className="flex gap-10">
        {companyLogos.map((logo, index) => (
          <Image key={index} src={logo} width={50} height={50} alt="company-logo" loading="lazy" />
        ))}
      </div>
    </div>
  );
};

export default CompanyAds;
