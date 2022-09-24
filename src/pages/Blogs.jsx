import React from "react";
import BlogArea from "../components/blog/BlogArea";
import { Breadcrumb } from "../components/blog/Breadcrumb";
import BlogDetailsArea from "../components/blogdetails/BlogDetailsArea";
import NewsDetails from "../components/blogdetails/NewsDetails";
import Footer from "../components/Footer";
// import Header from "../components/Header";
import HeaderTwo from "../components/HeaderTwo";
import NewsletterArea from "../components/homeone/NewsletterArea";
import FooteerBanner from "../components/hometwo/FooteerBanner";

const Blogs = () => {
  return (
    <>
      <HeaderTwo />
      <main>
       <Breadcrumb/>
      
       <BlogArea/>
       
       
      </main>
      {/* <FooteerBanner/> */}
      <Footer />
    </>
  );
};

export default Blogs;
