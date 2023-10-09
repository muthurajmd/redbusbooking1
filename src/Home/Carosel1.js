import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import  './Carosel.css';
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export default class AutoPlay22 extends Component {
 
 
  render() {
    
   
    const settings = {
      // dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      // autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "ease-in-out",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
            // dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      
    };

    
    return (
      <>
      <Slider {...settings}>

     <div style={{marginRight:"10px",padding:"1rem",width:"90%"}}>
       <img src="https://platforms.makemytrip.com/contents/47ef6101-e28f-432a-b794-34bd40a996d3" style={{width:"90%",height:"4.5rem",borderRadius: "0.5rem",marginTop:"5px",marginRight:"25px"}} alt="img"/>
     </div>
     <div style={{margin:"10px",padding:"1rem",width:"90%"}}>
     <img src="https://platforms.makemytrip.com/contents/e8cd4718-5af0-4f63-b650-327b5642d129" style={{width:"90%",height:"4.5rem",borderRadius: "0.5rem",marginTop:"5px"}} alt="img"/>

     </div>
     <div style={{margin:"10px",padding:"1rem",width:"90%"}}>
     <img src="https://platforms.makemytrip.com/contents/7673b5e1-da1a-4a1d-b3b9-c6fe6ade787d" style={{width:"90%",height:"4.5rem",borderRadius: "0.5rem",marginTop:"5px"}} alt="img"/>
     </div>
        </Slider>
        </>
    );
  }
}