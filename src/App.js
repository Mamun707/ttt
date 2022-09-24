import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeTwo from "./pages/HomeTwo";
import Movie from "./pages/Movie";
import MovieDetails from "./pages/MovieDetails";
import TvSeries from "./pages/TvSeries";
import { useEffect } from "react";
import $ from "jquery";
import Pricing from "./pages/Pricing";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import ContactPage from "./pages/ContactPage";
import HighLightsDetails from "./components/highlight/HighLightsDetails";

function App() {
  useEffect(() => {
    function preloader() {
      $("#preloader").delay(0).fadeOut();
    }
    $(window).on("load", function () {
      preloader();
    });
  });
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route exact={true} path="/">
            <Homeone/>
          </Route> */}

          <Route exact={true} path="/" element={<HomeTwo />}>
            
          </Route>
          <Route exact={true} path="/highlightsdetails" element={<HighLightsDetails />}>
            
            </Route>
  

          <Route exact={true} path="/live" element={ <Movie />}>
           
          </Route>
          <Route exact={true} path="/movie-details" element={ <MovieDetails />}>
           
          </Route>
          <Route exact={true} path="/highlights" element={ <TvSeries />}>
           
          </Route>
          <Route exact={true} path="/pricing" element={ <Pricing />}>
           
          </Route>
          <Route exact={true} path="/news" element={<Blogs/>}>
          
          </Route>
          <Route exact={true} path="/blog-details" element={<BlogDetails />}>
            
          </Route>

          <Route exact={true} path="/contact" element={ <ContactPage />}>
           
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
