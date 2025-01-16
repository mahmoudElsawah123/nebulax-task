import React from "react";
import dynamic from "next/dynamic";
import Header from "./components/Header";
import FirstSection from "./components/FirstSection";

// Dynamic imports for better performance
const ProductOffer = dynamic(() => import("./components/ProductOffer"));
const DecorativeElement = dynamic(() =>
  import("./components/DecorativeElement")
);
const CardGallery = dynamic(() => import("./components/CardGallery"));
const Contact = dynamic(() => import("./components/Contact"));
const Ads = dynamic(() => import("./components/Ads"));

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-primary-light relative overflow-hidden">
      <Header />

      {/* Decorative elements */}
      <DecorativeElement />

      <main className="relative pt-32 pb-20 px-6">
        {/* First section */}
        <section>
          <FirstSection />
        </section>

        {/* Ads section */}
        <section>
          <Ads />
        </section>

        {/* Product offer section */}
        <section>
          <ProductOffer />
        </section>

        {/* Card gallery section */}
        <section>
          <CardGallery />
        </section>

        {/* Contact section */}
        <section>
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Page;
