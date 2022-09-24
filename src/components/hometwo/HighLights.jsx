import React from 'react'
import Menu from "../HighlightMenu"
import { useNavigate } from "react-router-dom";

function HighLights() {
    const navigate=useNavigate();

    
    return(    <section className="top-rated-movie" style={{backgroundImage:'url("img/bg/tr_movies_bg.jpg")'}}>
 <div className="container">
    <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="section-title  text-center mb-40 livehome mt-40">
         
            <h2 className="title"> <img src='img/images/upcomingmatchicon.svg'/> Highlights</h2>
          </div>
        </div>
      </div>
      <div className="highlight-card">
        {Menu.map((item)=>{return <div  key={item.id}>
          
            
            <a  onClick={()=>{navigate("/highlightsdetails")}}><img  src={item.image} alt="" /></a>  
            
        </div>})}
      </div>
      <div className="tr-movie-btn text-end mt-25 pb-30">
        <a  className="btn" onClick={()=>{navigate("/live")}}>View All </a>
      </div>
     
    </div>

    </section>
    )
}

export default HighLights