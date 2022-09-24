import React from  "react"
import Menu from "../UpMovieItemMenu"
import { useNavigate } from "react-router-dom";

export const UpcomingMatch=()=>{
    const navigate=useNavigate();

    
    return(    <section className="top-rated-movie tr-movie-bg2"  style={{backgroundImage:'url("img/images/upcomingback.png")'}}>
 <div className="container">
    <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="section-title  text-center mb-40 livehome">
         
            <h2 className="title"> <img src='img/images/upcomingmatchicon.svg'/> Upcoming Matches</h2>
          </div>
        </div>
      </div>
      <div className="row movie-item-row">
        {Menu.map((item)=>{return <div className="custom-col-" key={item.id}>
          <div >
            <div className="movie-poster">
              <img src={item.image} alt="" />
            
            </div>
            <div className="movie-content" style={{backgroundImage:'url("img/images/upcomingcard.svg")'}}>
                <h6> {item.title}</h6>
                <hr className="hr1"
        style={{
            color: "#676870",
            height:"1px"
        }}
    />
                <div className="upcoming-bottom-card">
                    <div><img src="img/images/ban.png"/>
                    <h6 className="text-start pt-10">Bangladesh</h6>
                    </div>
                    <div className="vs">
                        <p style={{color:"#FFFFFF",fontSize:"8px"}}>{item.date}</p>
                        <h5 style={{color:"#CE011B"}}>VS</h5>
                        <p style={{color:"#FFFFFF",fontSize:"8px"}}>{item.time}</p>
                    </div>
                    <div><img src="img/images/india.png"/>
                    <h6 className="text-start pt-10">India</h6></div>
                </div>
            
            </div>
          </div>
        </div>})}

        
      </div>
      <div className="tr-movie-btn text-end mt-25">
        <a  className="btn" onClick={()=>{navigate("/live")}}>View All <i className="fas fa-angle-double-right" style={{color:"#fff"}} /> </a>
      </div>
    </div>

    </section>
    )
}