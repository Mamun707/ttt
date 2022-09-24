import { map } from 'jquery'
import React from 'react'
const data=[{
  id:1,
  date:"11 Mar 2022",
  title:"Your Free Movie Streaming Purposes",
  details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exesa commodo consequat. Duis aute irure dolor in reprehend",
  images:"img/images/newsimage.png"

},{
  id:2,
  date:"10 Mar 2022",
  title:"Your Free Movie Streaming Purposes",
  details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exesa commodo consequat. Duis aute irure dolor in reprehend",
  images:"img/images/newsimage.png" 
},{
  id:3,
  date:"10 Mar 2022",
  title:"Your Free Movie Streaming Purposes",
  details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exesa commodo consequat. Duis aute irure dolor in reprehend",
  images:"img/images/newsimage.png" 
}]
const rdata=[{id:1,
images:"img/images/rnews1.png",
title:"Jason Roy leads the way for fearless England",
date:"10 Mar 2022"},
{id:2,
  images:"img/images/rnews1.png",
  title:"Jason Roy leads the way for fearless England",
  date:"10 Mar 2022"}
,
{id:3,
  images:"img/images/rnews1.png",
  title:"Jason Roy leads the way for fearless England",
  date:"10 Mar 2022"}]

const BlogArea = () => {
  return (
    <section className="blog-area blog-bg" style={{backgroundColor:"#12151E"}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          {data.map(item=>{return(
          
            <div className="blog-post-item" key={item.id}>
            <div className="blog-post-thumb">
              <a href="/blog-details"><img src={item.images} alt="" /></a>
            </div>
            <div className="blog-post-content">
              <span className="date"><i className="far fa-clock" /> {item.date}</span>
              <h2 className="title"><a href="/blog-details">{item.title}</a></h2>
              <p>{item.details}</p>
              <div className="blog-post-meta">
                <div className="blog-details-tags">
                  
                </div>
                <div className="read-more">
                  <a href="/blog-details">Read More <i className="fas fa-angle-double-right" /></a>
                </div>
              </div>
            </div>
          
          </div>
          )})}
        </div>
        <div className="col-lg-4">
          <aside className="blog-sidebar">
            
            
            <div className="widget blog-widget">
              <div className="widget-title mb-30">
                <h5 className="title">Recent Posts</h5>
              </div>
              <div className="rc-post">
                <ul>
                  {rdata.map(item=>{
                    return(<li className="rc-post-item" key={item.id}>
                    <div className="thumb thumb2">
                      <a href="/blog-details"><img src="img/images/recentnews2.png" alt="" /></a>
                    </div>
                    <div className="content">
                      <h5 className="title"><a href="/blog-details">{item.title}</a></h5>
                      <span className="date"><i className="far fa-clock" /> {item.date}</span>
                    </div>
                  </li>
                  )
                  })}
                  
                </ul>
              </div>
            </div>
            
          </aside>
        </div>
      </div>
    </div>
  </section>
  )
}

export default BlogArea