import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderTwo from "../components/HeaderTwo";
import EpipsodeArea from "../components/moviedetails/EpipsodeArea";
import MovieDetail from "../components/moviedetails/MovieDetail";
import TvSeries from "../components/moviedetails/TvSeries";

const MovieDetails = () => {
  return (
    <div>
      <HeaderTwo />
      <main>
        <MovieDetail />
        <EpipsodeArea />
        <TvSeries />
      </main>
      <Footer />
    </div>
  );
};

export default MovieDetails;
