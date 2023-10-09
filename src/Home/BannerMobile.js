import { Box,Button,Container,Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
// import './Banner.scss';
// import '/mobile.css';
import '../main.json'
import Grid from '@mui/system/Unstable_Grid';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import imm from "../icons/available.jpg"
import AutoPlay from "./Carosel";
import AutoPlay22 from "./Carosel1";
import Carosel2 from "./Carosel2";
// import { Carosel } from "./Carosel";

export const BannerMobile = () => {
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
           
            let objj={from,to}
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
               
      
                 console.log(qw.busid)                 
                      n(`/search?id=${qw.busid}`)
                      console.log(w)
                }
                else if(w===false){
                    alert("enter correct route")
                }
            
          }
          
    


    return(
        <>
        <Box sx={{marginTop:"8px"}}>
        <Grid lg={6} sx={{alignItems:"center", flexDirection:'row', display: { xs: 'flex', sm: 'flex', lg:'flex'},justifyContent:{ xs: 'space-around', sm:"space-between"}}} >
            <Box mx={3} component="div" sx={{ display: 'flex',flexDirection:"column",alignItems:"center",backgroundColor:"red",borderRadius:"7px"}}>           
        {/* <Typography component="img" src='https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg' sx={{width:{xs:"40px",sm:"70px",lg:"40px"},background: `url("https://m.redbus.in/public/images/css/svg/sprite.css-44fe4d80.svg")`}}/>              */}
        <Typography component="div" sx={{marginTop:"5px",width:"37px",height:"24px",background: `url("https://m.redbus.in/public/images/css/svg/sprite.css-44fe4d80.svg")97.14285714285714% 48.07692307692308% no-repeat`}}> 
        </Typography>            
            <Box component="span" color="black" sx={{fontSize:"14px",color:"white",textAlign:{xs:"center"}}}> Bus Tickets
                </Box>     
                </Box> 

                <Box mx={2} component="div" sx={{ display: 'flex',flexDirection:"column",alignItems:"center"}}>           
        <Typography component="img" src='https://st.redbus.in/web/images/layout/ryde_vertical.svg' sx={{filter: "grayscale(100)",width:{xs:"40px",sm:"70px",lg:"40px"}}}/>             
            <Box component="span" color="black" sx={{textAlign:{xs:"center"}}}> Cab Rendal
                </Box>     
                </Box> 

                <Box mx={2} component="div" sx={{ display: 'flex',flexDirection:"column",alignItems:"center" }}>           
        <Typography component="img" src='https://st.redbus.in/web/images/layout/rail_vertical.svg' sx={{filter: "grayscale(100)",width:{xs:"40px",sm:"70px",lg:"40px"}}}/>             
            <Box component="span" color="black" sx={{textAlign:{xs:"center"}}}> Train Tickets
                </Box>     
                </Box> 
        </Grid>








        </Box>

        <Box component="section">
        {/* <Typography  component="div" sx={{display:{xs:'none',sm:'none',lg:'flex'},backgroundImage:`url('https://s3.rdbuz.com/web/images/homeV2/HomeBannerImg.svg')`, width:"100%", height:'85vh'}}> */}
         
         
         <Box component="div" my={3} sx={{width:"100%"}}>
          
          <Typography component="form">
          <h1 style={{textAlign:"center", fontSize:"16px",margin:"10px"}}>India s No. 1 Bus Ticket Booking Site</h1>
            <Box className="" component="div" sx={{margin:"15px",boxShadow:"0px 0px 15px gray",borderRadius:"10px"}}>
            <Box className="changeInput" component="div" sx={{padding:"10px"}}>

           

            <Typography component="input" type="text" className="form-controlcc" sx={{marginBottom:"5px"}} placeholder="From" name="from" value={from} onChange={handleinput}>  
            </Typography>

            <Typography component="input" type="text" className="form-controlcc" sx={{marginBottom:"5px"}}  placeholder="To" name="to" value={to} onChange={handleinput}>  
             </Typography>

             <Typography component="input" type="Date" className="demo1 form-controlcc" sx={{marginBottom:"5px"}}  placeholder="Date" name="date" onChange={(event) => setValue({startDate: event.target.value})}>  
             </Typography>
             <div style={{}}>
             <button className="search-btnt" type="submit" onClick={()=>submitt()} variant="contained" color="error">
  Search
</button>
</div>
            </Box>
            </Box>

          </Typography>
         </Box>
        {/* </Typography> */}
        </Box>
    

        <Typography component="div" className="trend123">
                    <h4 style={{margin:"0px",textTransform:"uppercase"}}> offer</h4>
                    <AutoPlay/>

                    </Typography>

                    <Typography component="div" className="trend123">
                    <div style={{marginTop:"10px"}}>
                    <h4 style={{margin:"0px",textTransform:"uppercase"}}> exclusive partners</h4>
                    <AutoPlay22/>
                    </div>
                    </Typography>

                    
                    <Typography component="div" className="trend123">
                    <div style={{marginTop:"10px"}}>
                    <h4 style={{margin:"0px",textTransform:"uppercase"}}> whats New</h4>
                    <Carosel2/>
                    </div>
                    </Typography>
                    


        






        <Box component="section" sx={{backgroundColor:"#f7f7f7"}}>
        <Container maxWidth="lg">


<Typography component="div" sx={{display:"flex",justifyContent:"between",flexWrap:{xs:"wrap",sm:"wrap",md:"wrap"}}}>
{/* <Typography component="div" sx={{width:{xs:"50%",md:"50%",lg:"25%"}}}>
<Typography component="div" my={4} mx={2}>
<Typography component="img" src={"https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg"}  style={{width:"35%"}}/>    
  </Typography>
<p>redBus is the world's largest online bus ticket booking service trusted by over 25 million happy customers globally. redBus offers bus ticket booking through its website, iOS and Android mobile apps for all major routes.</p>
</Typography> */}

<Typography component="div" sx={{width:{xs:"50%",sm:"33%",md:"33%",lg:"20%"}}}>
			     
				       <h2 style={{textTransform:"uppercase",fontSize:"14px"}}>TOP BOOKED BUS ROUTES</h2>
					   <ul style={{margin:"0px",padding:"0px",lineHeight:"2",color:"gray"}}>
					   <li><a href="#">Bangalore to Chennai Bus</a></li>
					   <li><a href="#">Hyderabad to Bangalore Bus</a></li>
					   <li><a href="#">Pune to Bangalore Bus</a></li>
					   <li><a href="#">Red Bus on Mobile</a></li>
					   <li><a href="#">Mumbai to Bangalore Bus</a></li>
					   <li><a href="#">Bangalore to Goa Bus</a></li>
					
					   </ul>  					   			  
			   </Typography>
<Typography component="div" sx={{width:{xs:"50%",sm:"33%",md:"33%",lg:"20%"}}}>
			     
				       <h2 style={{textTransform:"uppercase",fontSize:"14px"}}>About Redbus</h2>
					   <ul style={{margin:"0px",padding:"0px",lineHeight:"2",color:"gray"}}>
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

               <Typography component="div" sx={{width:{xs:"50%",sm:"33%",md:"20%",lg:"16%"}}}>
			     
				      <h2 style={{textTransform:"uppercase",fontSize:"14px"}}>Info</h2>
              <ul style={{margin:"0px",padding:"0px",lineHeight:"2",color:"gray"}}>
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
               <Typography component="div" sx={{width:{xs:"50%",sm:"33%",md:"30%",lg:"20%"}}}>
			      <Typography component="div">
				       <h2 style={{textTransform:"uppercase",fontSize:"14px"}}>Global Sites</h2>
               <ul style={{margin:"0px",padding:"0px",lineHeight:"2",color:"gray"}}>
					   <li><a href="#">India</a></li>
					   <li><a href="#">Singapore</a></li>
					   <li><a href="#">Malaysia</a></li>
					   <li><a href="#">Indonesia</a></li>
					   <li><a href="#">Peru</a></li>
					   <li><a href="#">Colombia</a></li>
					    </ul>  
					   
			   </Typography>
			   </Typography>

               <Typography component="div" sx={{width:{xs:"50%",sm:"33%",md:"20%",lg:"16%"}}}>
			      
				       <h2 style={{textTransform:"uppercase",fontSize:"14px"}}>Our Partners</h2>
               <ul style={{margin:"0px",padding:"0px",lineHeight:"2",color:"gray"}}>
					   <li><a href="#">Goibibo Bus</a></li>
					   <li><a href="#">Goibibo Hotel</a></li>
					   <li><a href="#">Makemy Trip Bus</a></li>
					   <li><a href="#">Makemy Trip Hotel</a></li>
					   
					    </ul>  
					   
			   </Typography>

         <Typography component="div" sx={{width:{xs:"50%",sm:"33%",md:"20%",lg:"16%"}}}>
			      
            <h2 style={{textTransform:"uppercase",fontSize:"14px"}}>Top Cities</h2>
            <ul style={{margin:"0px",padding:"0px",lineHeight:"2",color:"gray"}}>
          <li><a href="#">Manipur Bus</a></li>
          <li><a href="#">Kerala Bus</a></li>
          <li><a href="#">Andra Bus</a></li>
          <li><a href="#">Bangalore Hotel</a></li>
          
           </ul>  
          
      </Typography>
			 


			   </Typography>
			   












         </Container>
        </Box>
      

        
        </>
    )
}