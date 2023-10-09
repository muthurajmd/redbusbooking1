import { Box,Button,Container,Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import './Banner.scss';
import '../main.json'
import Grid from '@mui/system/Unstable_Grid';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import imm from "../icons/available.jpg"
import AutoPlay, { Carosel } from "./Carosel";


export const Banner = () => {
  const state = useSelector(
    ({task})=>task
)
console.log(state)

        let [from,setfrom]=useState("")
        let [to,setto]=useState("")
        let [busidd,setbusidd]=useState(0)
        let [obj,setobj]=useState({})
        const [value, setValue] =  useState(new Date());
    
        let n=useNavigate()
    
    
        const handleinput =(e)=>{
        if(e.target.name==="from"){
              setfrom((e.target.value).toLowerCase())
            }
            else if(e.target.name==="to"){
               setto((e.target.value).toLowerCase())
             }
                    
          }
    
          const submitt =(e)=>{
          // e.preventDefault()
           
            let objj={from,to,value}
            console.log(objj);
            setobj(objj)
            console.log(objj,obj)
          
                let w=state.busarr.some((a,b)=>{
                    return from===a.from &&  to === a.to && value.startDate===a.date
                })
                console.log(w)
                if(w===true){
                  let qw=state.busarr.find((a,b)=>{
                    return from===a.from &&  to === a.to 
                })
             
                 n(`/search?id=${qw.busid}`)                     
                    
                }
                else if(w===false){
                    alert("enter correct route")
                    
                }
            
          }
          
    
     

    return(
        <>
        <Box component="section">
        <Typography  component="div" sx={{display:{xs:'none',sm:'none',lg:'flex'},backgroundImage:`url('https://s3.rdbuz.com/web/images/homeV2/HomeBannerImg.svg')`, width:"100%", height:'85vh'}}>
         
         
         <Box component="div" my={3} sx={{width:"100%", display:"flex", justifyContent:"center"}}>
          
          <Typography component="form">
          <h1 style={{textAlign:"center", fontSize:"35px"}}>India s No. 1 Bus Ticket Booking Site</h1>
            <Box component="div" className="ss" sx={{display:"flex"}}>

           

            <Typography component="input" type="text" className="form-control from"  placeholder="From" name="from" value={from} onChange={handleinput}>  
            </Typography>

            <Typography component="input" type="text" className="form-control to-input"  placeholder="To" name="to" value={to} onChange={handleinput}>  
             </Typography>

             <Typography component="input" type="Date" className="demo1 form-control to-input"  placeholder="Date" name="date" onChange={(event) => setValue({startDate: event.target.value})}>  
             </Typography>
             
             <button className="search-btn" type="submit" onClick={()=>submitt()} variant="contained" color="error">
  Search
</button>
            </Box>

          </Typography>
         </Box>
        </Typography>
        </Box>

        <Box>

       							  
				    <Typography component="div" className="trend" id="trend">
                    <h2 style={{margin:"0px",textTransform:"uppercase"}}> trending offer</h2>

                    <AutoPlay/>


                    {/* <Typography component="div" style={{display:"flex"}} id="row">
    {state.offer.map((val,ind)=>{
        
        return(
        
             <Typography key={ind} component="div"  sx={{width:"25"}}>
		<Typography component="div"className={val.class} style={{marginRight:"10px"}}>
		<Typography component="div" className="d-flex img1 p-2 mt-3" style={{flexDirection:"column",justifyContent: "space-evenly"}}>
		<Typography component="img" src={val.img} style={{width:"100%",hight:"4.5rem",borderRadius: "2.5rem"}} alt="" />
        </Typography>
		<Typography component="div" className="description">
		<Typography component="div" className="text-white" style={{background: "rgba(255, 255, 255, 0.2)",borderradius: "1.25rem",padding: "0.25rem 0.5rem",width: "fit-content",fontSize: "12px",textAlign: "center"}}>{val.bus}</Typography>
		<Typography component="div" className="text-white" style={{fontSize: "1rem",lineHeight: "1.5rem",fontWeight: "700",maxHeight: "3rem", overflow: "hidden", textOverflow: "ellipsis"}}>{val.validity}</Typography>
		<Typography component="div" className="text-white" style={{fontSize:"14px"}}>{val.save}</Typography>
        <p style={{fontSize:"14px",color:"white"}}>{val.code}</p></Typography>
        </Typography>
        
            
            </Typography>
        
        
        )
       
    })
}
</Typography> */}
</Typography>

        </Box>
        <Typography component="div" my={2} sx={{display:"flex",justifyContent:"center",position:"relative",top:"170px"}}>
					 <Typography component="img" src={"https://platforms.makemytrip.com/contents/c1dc43ea-ba71-4a6a-b3c9-239834c98dc1"} className="" alt="" sx={{width:"70%",borderRadius:"12px"}}/>
					</Typography>




        <Box>

        <Typography component="section" m={5} style={{position:"relative",top:"250px"}}>
        <Container maxWidth="lg">
        <Grid container  spacing={2} >
  <Grid lg={6}>
    <Typography component="div" ms={5}>
    <Typography component="div">
        <Box component="h3" sx={{fontSize:"40px",fontWeight:"400"}}>NOW, <b>GET MORE THAN JUST BUS</b> TICKETS WITH REDBUS!</Box>
    </Typography>
    <Typography component="div" sx={{display:"flex"}}>
    <Typography component="div" mx={2} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <Typography component="img" src={"https://s2.rdbuz.com/web/images/homeV2/AboutUs/ryde.svg"} mx={2} alt="" sx={{width:"25%"}}/>
    <span style={{width:"100%"}}>Cab Bus Rental </span>
    </Typography>
    <Typography component="div" style={{height: "25px",width:"1px",background:"rgb(229, 229, 229)"}}></Typography>
    <Typography component="div" ms={2} my={1} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <img src={"https://s1.rdbuz.com/web/images/homeV2/AboutUs/redRail.svg"} className="mx-2" alt="" style={{width:"25%"}}/>
    <span style={{width:"100%"}}>Train Tickets </span>
    </Typography>
    </Typography>
    <Typography component="div" my={4}>
     <span>Rent Cabs, Tempo Travellers & Buses with best drivers</span>
    </Typography>
    <Typography component="div" ms={2} my={1} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <img src={"https://s3.rdbuz.com/web/images/homeV2/AboutUs/ryde_car.svg"} className="mx-2" alt="" style={{width:"15%"}}/>
    <h4 style={{width:"100%"}}>Outstation </h4>
     </Typography>
     <Typography component="div" ms={2} my={1} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <img src={"https://s1.rdbuz.com/web/images/homeV2/AboutUs/ryde_car_hourly.svg"} className="mx-2" alt="" style={{width:"15%"}}/>
    <h4 style={{width:"100%"}}>Hourly Rental </h4>
     </Typography>
     <Typography component="div" ms={2} my={1} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <img src={"https://s2.rdbuz.com/web/images/homeV2/AboutUs/ryde_airport_transport.svg"} className="mx-2" alt="" style={{width:"15%"}}/>
    <h4 style={{width:"100%"}}>Airport Transfers </h4>
     </Typography>
     </Typography>
     </Grid>
     <Grid lg={6}>
    <Typography component="div" className="m-3">
    <img src={"https://s3.rdbuz.com/web/images/homeV2/AboutUs/aboutUsImg.svg"} className="" alt="" style={{width:"100%"}}/>
   
</Typography>
<Typography component="div" m={3} sx={{position:"absolute",top:"250px"}} >
    <img src={"https://s3.rdbuz.com/web/images/homeV2/AboutUs/rydePop.svg"} className="" alt="" style={{width:"100%"}}/>
   
</Typography>
</Grid>
</Grid>
</Container>

</Typography>

        </Box>

        <Box component="section" sx={{position:"relative",top:"250px",backgroundColor:"#f7f7f7"}}>
        <Container maxWidth="lg">


<Typography component="div" sx={{display:"flex",justifyContent:"around",flexWrap:{xs:"wrap",md:"wrap"}}}>
<Typography component="div" sx={{width:{xs:"50%",md:"50%",lg:"25%"}}}>
<Typography component="div" my={4} mx={2}>
<Typography component="img" src={"https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg"}  style={{width:"35%"}}/>    
  </Typography>
<p style={{color:"gray"}}>redBus is the world's largest online bus ticket booking service trusted by over 25 million happy customers globally. redBus offers bus ticket booking through its website, iOS and Android mobile apps for all major routes.</p>
</Typography>
<Typography component="div" sx={{width:{xs:"50%",md:"20%",lg:"20%"}}}>
			     
				       <h3 style={{textTransform:"uppercase",textAlign:"center"}}>About Redbus</h3>
					   <ul style={{lineHeight:"2"}} className="lh-base m-0 p-0">
					   <li><a href="#">About us</a></li>
					   <li><a href="#">Investor Relation</a></li>
					   <li><a href="#">Contact us</a></li>
					   <li><a href="#">Red Bus on Mobile</a></li>
					   <li><a href="#">Offer</a></li>
					   <li><a href="#">Site Map</a></li>
					   <li><a href="#">Careers</a></li>
					   <li><a href="#">Values</a></li>
					   </ul>  
					   
			  
			   </Typography>
               <Typography component="div" sx={{width:{xs:"40%",md:"20%",lg:"16%"}}}>
			     
				       <h3 style={{textTransform:"uppercase",padding:"0px 30px"}}>Info</h3>
					   <ul style={{lineHeight:"2"}} className="lh-base">
					   <li><a href="#">T&C</a></li>
					   <li><a href="#">Privacy policy</a></li>
					   <li><a href="#">FAQ</a></li>
					   <li><a href="#">Blog</a></li>
					   <li><a href="#">Bus Operator Registration</a></li>
					   <li><a href="#">Agent Registration</a></li>
					   <li><a href="#">Insurence Partner</a></li>
					   <li><a href="#">User Agreement</a></li>
					   </ul>  
					   
			   
			   </Typography>
            <Typography component="div" sx={{width:{xs:"50%",md:"30%",lg:"20%"}}}>
			      <Typography component="div" px={3}>
				       <h3 style={{textTransform:"uppercase",textAlign:"center"}}>Global Sites</h3>
					   <ul style={{lineHeight:"2"}} className="lh-base">
					   <li><a href="#">India</a></li>
					   <li><a href="#">Singapore</a></li>
					   <li><a href="#">Malaysia</a></li>
					   <li><a href="#">Indonesia</a></li>
					   <li><a href="#">Peru</a></li>
					   <li><a href="#">Colombia</a></li>
					    </ul>  
					   
			   </Typography>
			   </Typography>

               <Typography component="div" sx={{width:{xs:"40%",md:"20%",lg:"16%"}}}>
			      
				       <h3 style={{textTransform:"uppercase",textAlign:"center"}}>Our Partners</h3>
					   <ul style={{lineHeight:"2"}} className="lh-base">
					   <li><a href="#">Goibibo Bus</a></li>
					   <li><a href="#">Goibibo Hotel</a></li>
					   <li><a href="#">Makemy Trip Bus</a></li>
					   <li><a href="#">Makemy Trip Hotel</a></li>
					   
					    </ul>  
					   
			  </Typography>
			 


			  </Typography>
			   
        </Container>
        </Box>
      

        
        </>
    )
}