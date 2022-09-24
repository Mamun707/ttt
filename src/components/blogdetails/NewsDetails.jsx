import React from 'react'

function NewsDetails() {
  return (
    <div className="blog-post-item blog-details-wrap">
            <div className="blog-post-thumb">
              <a href="/blog-details"><img src="img/images/news2.png" alt="" /></a>
            </div>
            <div className="blog-post-content">
              <div className="blog-details-top-meta">
                <span className="date"><i className="far fa-clock" /> 10 Mar 2022</span>
              </div>
              <h2 className="title">Congratulations Bangladesh Cricket Team</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typetting industry. Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                book. It has survived not only five centuies, but also the leap into electronic typesetting, remaining essentially
                unchanged. It was populrised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                recently .</p>
              
              
              
             
              <div className="blog-post-meta">
                <div className="blog-details-tags">
                  
                </div>
                <div className="read-more">
                  <a href="/blog-details">Read More <i className="fas fa-angle-double-right" /></a>
                </div>
              </div>
            </div>
            </div>
  )
}

export default NewsDetails