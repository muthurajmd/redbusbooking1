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

export default class Carosel2 extends Component {
 
 
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
            dots: true
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

      <div style={{margin:"10px",padding:"1rem",width:"90%"}}>
     <img src="https://st.redbus.in/Images/perzcards/referAndEarn.webp" style={{width:"90%",height:"9.5rem",borderRadius: "0.5rem",marginTop:"5px"}} alt="img"/>
     </div>
     <div style={{margin:"10px",padding:"1rem",width:"90%"}}>
     <img src="https://st.redbus.in/Images/perzcards/primo.webp" style={{width:"90%",height:"9.5rem",borderRadius: "0.5rem",marginTop:"5px"}} alt="img"/>
     </div>

     <div style={{marginRight:"10px",padding:"1rem",width:"90%"}}>
       <img src="https://st.redbus.in/Images/home/lightning_fast_refund.png" style={{width:"90%",height:"9.5rem",borderRadius: "0.5rem",marginTop:"5px",marginRight:"25px"}} alt="img"/>
     </div>
     <div style={{margin:"10px",padding:"1rem",width:"90%"}}>
     <img src="https://st.redbus.in/btt/inv/btt_app_card.webp" style={{width:"90%",height:"9.5rem",borderRadius: "0.5rem",marginTop:"5px"}} alt="img"/>

     </div>
     <div style={{margin:"10px",padding:"1rem",width:"90%"}}>
     <img src="https://st.redbus.in/Images/perzcards/FlexiTicket.webp" style={{width:"90%",height:"9.5rem",borderRadius: "0.5rem",marginTop:"5px"}} alt="img"/>
     </div>
     
     <div style={{margin:"10px",padding:"1rem",width:"90%"}}>
     <img src="https://st.redbus.in/Images/perzcards/FlexiTicket.webp" style={{width:"90%",height:"9.5rem",borderRadius: "0.5rem",marginTop:"5px"}} alt="img"/>
     </div>
        </Slider>
        </>
    );
  }
}