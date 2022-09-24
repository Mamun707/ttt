import React from "react";
import Footer from "../components/Footer";
// import Header from "../components/Header";
import HeaderTwo from "../components/HeaderTwo";
import NewsletterArea from "../components/homeone/NewsletterArea";
import PricingArea from "../components/hometwo/PricingArea";
import { Breadcrumb } from "../components/pricing/Breadcrumb";

const Pricing = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb />
        <PricingArea />
        <NewsletterArea />
      </main>
      <Footer />
    </>
  );
};

export default Pricing;
