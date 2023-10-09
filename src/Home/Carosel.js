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

export default class AutoPlay extends Component {
 
 
  render() {
    const  offer=[{ 
      img:"https://st.redbus.in/images/FIRST/first_26th_sep_2022_ravi/tile-80X80.png",
      bus:"BUS",
       save:"Save up to Rs 250 on bus tickets",
       validity:"Valid till 31 OCT",
       code:"First",
       class:"first",	
       image:"./icons/available.jpg"
       },
       { 
      img:"https://st.redbus.in/Images/INDOFFER/SUPERHIT/80x80_SUPERHIT.png",
      bus:"BUS",
       save:"Save up to Rs 250 on bus tickets",
       validity:"Valid till 31 OCT",
       code:"SUPERHIT",
       class:"super",	
       image:"./icons/available.jpg"
       },        
       { 
      img:"https://st.redbus.in/Images/INDOFFER/BUS300/80x80.png",
      bus:"BUS",
       save:"Save up to Rs 300 on Manipur,Assam",
       validity:"Valid till 31 OCT",
       code:"BUS200",
       class:"bus200",
       image:"./icons/available.jpg"
       }, { 
        img:"https://st.redbus.in/Images/APSRTC/new/APSRTC_3.png",
        bus:"BUS",
         save:"Save up to Rs 300 on Kerala,karnataka",
         validity:"Valid till 31 OCT",
         code:"APSRTC",
         class:"asprtc",
         image:"./icons/available.jpg"
         }, { 
          img:"https://st.redbus.in/Images/INDOFFER/80x80/BUS300.png",
          bus:"BUS",
           save:"Save up to Rs 250 on bus tickets",
           validity:"Valid till 31 OCT",
           code:"UPSRTC",
           class:"upsrtc",
           image:"./icons/available.jpg"
           },
           { 
            img:"https://st.redbus.in/Images/INDOFFER/80x80/RBTRIP.png",
            bus:"BUS",
             save:"Save up to Rs 250 on bus tickets",
             validity:"Valid till 31 OCT",
             code:"RBTRIB",
             class:"rbtrib",
             image:"./icons/available.jpg"
             }]
   
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
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
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

      {offer.map((val,ind)=>{
        
        return(
        
             <Typography key={ind} component="div"  sx={{width:"25"}}>
		<Typography component="div"className={val.class} style={{marginRight:"10px"}}>
		<Typography component="div" className="d-flex img1 p-2 mt-3" style={{flexDirection:"column",justifyContent: "space-evenly"}}>
		<Typography component="img" src={val.img} style={{width:"100%",height:"4.5rem",borderRadius: "2.5rem",marginTop:"25px"}} alt="" />
        </Typography>
		<Typography component="div" className="description">
		<Typography component="div" className="text-white" style={{background: "rgba(255, 255, 255, 0.2)",borderradius: "1.25rem",padding: "0.25rem 0.5rem",width: "fit-content",fontSize: "12px",textAlign: "center"}}>{val.bus}</Typography>
		<Typography component="div" className="text-white" style={{fontSize: "0.9rem",lineHeight: "1.5rem",fontWeight: "700",maxHeight: "3rem", overflow: "hidden", textOverflow: "ellipsis"}}>{val.validity}</Typography>
		<Typography component="div" className="text-white" style={{fontSize:"14px"}}>{val.save}</Typography>
        <span style={{fontSize:"14px",color:"white"}}>{val.code}</span></Typography>
        </Typography>
        
            
            </Typography>
        
        
        )
       
    })
}
    
               {/* <Typography  component="div"  sx={{width:"20"}}>
  <Typography component="div"className="first" style={{marginRight:"10px"}}>
		<Typography component="div" className="d-flex img1 p-2 mt-3" style={{flexDirection:"column",justifyContent: "space-evenly"}}>
		<Typography component="img" src="https://st.redbus.in/images/FIRST/first_26th_sep_2022_ravi/tile-80X80.png" style={{width:"100%",hight:"4.5rem",borderRadius: "2.5rem",marginTop:"35px"}} alt="" />
        </Typography>
		<Typography component="div" className="description">
		<Typography component="div" className="text-white" style={{background: "rgba(255, 255, 255, 0.2)",borderradius: "1.25rem",padding: "0.25rem 0.5rem",width: "fit-content",fontSize: "12px",textAlign: "center"}}>BUS</Typography>
		<Typography component="div" className="text-white" style={{fontSize: "1rem",lineHeight: "1.5rem",fontWeight: "700",maxHeight: "3rem", overflow: "hidden", textOverflow: "ellipsis"}}>Valid till 31 Jul</Typography>
		<Typography component="div" className="text-white" style={{fontSize:"14px"}}>Save up to Rs 250 on bus tickets</Typography>
        <p style={{fontSize:"14px",color:"white"}}>SUPER HIT</p></Typography>
        </Typography>
        
            
            </Typography>


            <Typography  component="div"  sx={{width:"20"}}>
  <Typography component="div"className="super" style={{marginRight:"10px"}}>
		<Typography component="div" className="d-flex img1 p-2 mt-3" style={{flexDirection:"column",justifyContent: "space-evenly"}}>
		<Typography component="img" src="https://st.redbus.in/images/FIRST/first_26th_sep_2022_ravi/tile-80X80.png" style={{width:"100%",hight:"4.5rem",borderRadius: "2.5rem"}} alt="" />
        </Typography>
		<Typography component="div" className="description">
		<Typography component="div" className="text-white" style={{background: "rgba(255, 255, 255, 0.2)",borderradius: "1.25rem",padding: "0.25rem 0.5rem",width: "fit-content",fontSize: "12px",textAlign: "center"}}>BUS</Typography>
		<Typography component="div" className="text-white" style={{fontSize: "1rem",lineHeight: "1.5rem",fontWeight: "700",maxHeight: "3rem", overflow: "hidden", textOverflow: "ellipsis"}}>Valid till 31 Jul</Typography>
		<Typography component="div" className="text-white" style={{fontSize:"14px"}}>Save up to Rs 250 on bus tickets</Typography>
        <p style={{fontSize:"14px",color:"white"}}>SUPER HIT</p></Typography>
        </Typography>
        
            
            </Typography>


            <Typography  component="div"  sx={{width:"20"}}>
  <Typography component="div"className="bus200" style={{marginRight:"10px"}}>
		<Typography component="div" className="d-flex img1 p-2 mt-3" style={{flexDirection:"column",justifyContent: "space-evenly"}}>
		<Typography component="img" src="https://st.redbus.in/images/FIRST/first_26th_sep_2022_ravi/tile-80X80.png" style={{width:"100%",hight:"4.5rem",borderRadius: "2.5rem"}} alt="" />
        </Typography>
		<Typography component="div" className="description">
		<Typography component="div" className="text-white" style={{background: "rgba(255, 255, 255, 0.2)",borderradius: "1.25rem",padding: "0.25rem 0.5rem",width: "fit-content",fontSize: "12px",textAlign: "center"}}>BUS</Typography>
		<Typography component="div" className="text-white" style={{fontSize: "1rem",lineHeight: "1.5rem",fontWeight: "700",maxHeight: "3rem", overflow: "hidden", textOverflow: "ellipsis"}}>Valid till 31 Jul</Typography>
		<Typography component="div" className="text-white" style={{fontSize:"14px"}}>Save up to Rs 250 on bus tickets</Typography>
        <p style={{fontSize:"14px",color:"white"}}>SUPER HIT</p></Typography>
        </Typography>
        
            
            </Typography>


            <Typography  component="div"  sx={{width:"25"}}>
  <Typography component="div"className="first" style={{marginRight:"10px"}}>
		<Typography component="div" className="d-flex img1 p-2 mt-3" style={{flexDirection:"column",justifyContent: "space-evenly"}}>
		<Typography component="img" src="https://st.redbus.in/images/FIRST/first_26th_sep_2022_ravi/tile-80X80.png" style={{width:"100%",hight:"4.5rem",borderRadius: "2.5rem"}} alt="" />
        </Typography>
		<Typography component="div" className="description">
		<Typography component="div" className="text-white" style={{background: "rgba(255, 255, 255, 0.2)",borderradius: "1.25rem",padding: "0.25rem 0.5rem",width: "fit-content",fontSize: "12px",textAlign: "center"}}>BUS</Typography>
		<Typography component="div" className="text-white" style={{fontSize: "1rem",lineHeight: "1.5rem",fontWeight: "700",maxHeight: "3rem", overflow: "hidden", textOverflow: "ellipsis"}}>Valid till 31 Jul</Typography>
		<Typography component="div" className="text-white" style={{fontSize:"14px"}}>Save up to Rs 250 on bus tickets</Typography>
        <p style={{fontSize:"14px",color:"white"}}>SUPER HIT</p></Typography>
        </Typography>
        
            
            </Typography>

            <Typography  component="div"  sx={{width:"25"}}>
  <Typography component="div"className="super" style={{marginRight:"10px"}}>
		<Typography component="div" className="d-flex img1 p-2 mt-3" style={{flexDirection:"column",justifyContent: "space-evenly"}}>
		<Typography component="img" src="https://st.redbus.in/images/FIRST/first_26th_sep_2022_ravi/tile-80X80.png" style={{width:"100%",hight:"4.5rem",borderRadius: "2.5rem"}} alt="" />
        </Typography>
		<Typography component="div" className="description">
		<Typography component="div" className="text-white" style={{background: "rgba(255, 255, 255, 0.2)",borderradius: "1.25rem",padding: "0.25rem 0.5rem",width: "fit-content",fontSize: "12px",textAlign: "center"}}>BUS</Typography>
		<Typography component="div" className="text-white" style={{fontSize: "1rem",lineHeight: "1.5rem",fontWeight: "700",maxHeight: "3rem", overflow: "hidden", textOverflow: "ellipsis"}}>Valid till 31 Jul</Typography>
		<Typography component="div" className="text-white" style={{fontSize:"14px"}}>Save up to Rs 250 on bus tickets</Typography>
        <p style={{fontSize:"14px",color:"white"}}>SUPER HIT</p></Typography>
        </Typography>
        
            
            </Typography>

            <Typography  component="div"  sx={{width:"25"}}>
  <Typography component="div"className="super" style={{marginRight:"10px"}}>
		<Typography component="div" className="d-flex img1 p-2 mt-3" style={{flexDirection:"column",justifyContent: "space-evenly"}}>
		<Typography component="img" src="https://st.redbus.in/images/FIRST/first_26th_sep_2022_ravi/tile-80X80.png" style={{width:"100%",hight:"4.5rem",borderRadius: "2.5rem"}} alt="" />
        </Typography>
		<Typography component="div" className="description">
		<Typography component="div" className="text-white" style={{background: "rgba(255, 255, 255, 0.2)",borderradius: "1.25rem",padding: "0.25rem 0.5rem",width: "fit-content",fontSize: "12px",textAlign: "center"}}>BUS</Typography>
		<Typography component="div" className="text-white" style={{fontSize: "1rem",lineHeight: "1.5rem",fontWeight: "700",maxHeight: "3rem", overflow: "hidden", textOverflow: "ellipsis"}}>Valid till 31 Jul</Typography>
		<Typography component="div" className="text-white" style={{fontSize:"14px"}}>Save up to Rs 250 on bus tickets</Typography>
        <p style={{fontSize:"14px",color:"white"}}>SUPER HIT</p></Typography>
        </Typography>
        
            
            </Typography> */}

      



        </Slider>
        </>
    );
  }
}