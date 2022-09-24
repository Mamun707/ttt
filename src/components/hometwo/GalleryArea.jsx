import React from 'react'
import Slider from "react-slick";


function PrevArrow(props){
  const {className,onClick} = props;
  return(
    <button type='button' className ={ className } onClick={ onClick }><span className="slick-prev"><i className="fas fa-caret-left"></i> previous</span></button>
  );
}
function NextArrow(props){
  const {className,onClick} = props;
  return(
    <button type='button' className ={ className } onClick={ onClick }><span className="slick-next">Next <i className="fas fa-caret-right"></i></span></button>
  );
}
const GalleryArea = () => {

    const settings={
        centerMode: true,
        centerPadding: '350px',
        slidesToShow: 1,
        arrows:true,
        prevArrow:<PrevArrow/>,
        nextArrow: <NextArrow/>,
        appendArrows: ".slider-nav",
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '220px',
                    infinite: true,
                }
            },
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '180px',
                    infinite: true,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '160px',
                    arrows: false,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '60px',
                    arrows: false,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '0px',
                    arrows: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '0px',
                    arrows: false,
                }
            },
        ]

    }

  return (
    <div className="gallery-area position-relative">
    <div className="gallery-bg" />
    <div className="container-fluid p-0 fix">
    <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="section-title  text-center mb-40 livehome">
         
            <h2 className="title"> <img src='img/images/livehomeicon.svg'/> Live Matches</h2>
          </div>
        </div>
      </div>
      <Slider className="row gallery-active" {...settings}>
        <div className="col-12">
          <div className="gallery-item">
            <img src="img/images/livehome1.png" alt="" />
          </div>
        </div>
        <div className="col-12">
          <div className="gallery-item">
            <img src="img/images/livehome2.png" alt="" />
          </div>
        </div>
        <div className="col-12">
          <div className="gallery-item">
            <img src="img/images/livehome3.png" alt="" />
          </div>
        </div>
        {/* <div className="col-12">
          <div className="gallery-item">
            <img src="img/images/gallery_04.jpg" alt="" />
          </div>
        </div> */}
      </Slider>
    </div>
    <div className="slider-nav" />
  </div>
  )
}

export default GalleryArea