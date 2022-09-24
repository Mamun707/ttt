import React from "react";
import BlogArea from "../components/blog/BlogArea";
import BlogDetailsArea from "../components/blogdetails/BlogDetailsArea";
import { Breadcrumb } from "../components/blogdetails/Breadcrumb";
import Footer from "../components/Footer";
// import Header from "../components/Header";
import NewsletterArea from "../components/homeone/NewsletterArea";

const BlogDetails = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        {/* <Breadcrumb /> */}
      <BlogArea/>
        {/* <NewsletterArea /> */}
      </main>
      <Footer />
    </>
  );
};

export default BlogDetails;
