import React from 'react'
import NewsDetails from './NewsDetails'

const BlogDetailsArea = () => {
  return (
    <section className="blog-details-area blog-bg" style={{backgroundColor:'#12151E'}}>
    <div className="container">
    <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="section-title  text-center mb-40 livehome">
         
            <h2 className="title"> <img src='img/images/newsicon.svg'/> T-Sports News</h2>
          </div>
        </div>
      </div>
    
    <div  className="row break-news">
    
    
      <p><img src='img/images/breaknews2.svg'/>&emsp; England, Pakistan build for T20 World Cup in long-awaited series</p>
     
     
      
    </div>
      <div className="row">
        <div className="col-lg-8">  
          <NewsDetails/>  
        </div>
        <div className="col-lg-4">
          <aside className="blog-sidebar">
            <div className="widget blog-widget">
              <div className="widget-title mb-30">
                <h5 className="title">Recent Posts</h5>
              </div>
              <div className="rc-post">
                <ul>
                  <li className="rc-post-item">
                    <div className="thumb thumb2">
                      <a href="/blog-details"><img src="img/images/recentnews2.png" alt="" /></a>
                    </div>
                    <div className="content">
                      <h5 className="title"><a href="/blog-details">Express Management Effective</a></h5>
                      <span className="date"><i className="far fa-clock" /> 10 Mar 2022</span>
                    </div>
                  </li>
                  <li className="rc-post-item">
                    <div className="thumb thumb2">
                      <a href="/blog-details"><img src="img/images/recentnews3.png" alt="" /></a>
                    </div>
                    <div className="content">
                      <h5 className="title"><a href="/blog-details">Where watch English movies free?</a></h5>
                      <span className="date"><i className="far fa-clock" /> 10 Mar 2022</span>
                    </div>
                  </li>
                  <li className="rc-post-item">
                    <div className="thumb thumb2">
                      <a href="/blog-details"><img src="img/images/recentnews1.png" alt="" /></a>
                    </div>
                    <div className="content">
                      <h5 className="title"><a href="/blog-details">House movie streaming website</a></h5>
                      <span className="date"><i className="far fa-clock" /> 10 Mar 2022</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <div className="tr-movie-btn text-end mt-25">
        <a  className="btn" onClick={()=>{navigate("/live")}}>Read More</a>
      </div>
    </div>
  </section>
  )
}

export default BlogDetailsArea