import React, { useEffect } from 'react'
import "magnific-popup";
import $ from "jquery";

const TopRatedMovies2 = () => {
  return (
  
    <section className="top-rated-movie tr-movie-bg2" style={{backgroundImage:'url("img/bg/tr_movies_bg.jpg")'}}>
    <div className="container">
    <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="section-title  text-center mb-40 livehome">
         
            <h2 className="title"> <img src='img/images/upcomingmatchicon.svg'/> Upcoming Matches</h2>
          </div>
        </div>
      </div>

      <div className="row movie-item-row">
        <div className="custom-col-">
          <div className="movie-item movie-item-two">
            <div className="movie-poster">
              <img src="img/poster/s_ucm_poster01.jpg" alt="" />
              <ul className="overlay-btn">
                <li><a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" className="popup-video btn">Watch Now</a></li>
                <li><a href="/movie-details" className="btn">Details</a></li>
              </ul>
            </div>
          
          </div>
        </div>

      </div>
      
      <div className="tr-movie-btn text-center mt-25">
        <a href="/#" className="btn">BROWSE ALL MOVIES</a>
      </div>
    </div>
  </section>
  )
}

export default TopRatedMovies2