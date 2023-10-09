import React from "react";
import { BsTrainFront} from "react-icons/bs";
import { Typography } from "@mui/material";

const Sidebar = () =>{

    return(
        <>
          <Typography component="div" sx={{width:"16%",paddingLeft:"5px"}}>
        <h4 className="pb-2"  style={{borderBottom:"0.75px solid #ddd",paddingBottom:"3px"}}>FILTER</h4>
            <div>
               <ul style={{padding:"0px",margin:"0px",lineHeight:"2"}}>
                <li className="py-2 d-flex align-items-center" style={{borderBottom:"0.75px solid #ddd"}}>
                <BsTrainFront/>
                <span className="ps-2" style={{color:"#3e3e52",fontSize:"12px"}}> Live Tracking</span>
                </li>
                <li className="py-2 d-flex align-items-center" style={{borderBottom:"0.75px solid #ddd"}}>
                <img src={"https://www.redbus.in/images/primo-gif-000000.gif"} alt="" className="pe-2" style={{width:"8%"}}/>
                <span className="" style={{color:"#3e3e52",fontSize:"12px"}}> Primo Bus</span>
                </li>
               </ul>

            </div>

            <h5 className=""  style={{}}>Depature Time</h5>
            <div>
            <ul style={{padding:"0px",margin:"0px",lineHeight:"2"}}>
               <li><input type="checkbox"></input>
              <span className="" style={{color:"#3e3e52",fontSize:"12px"}}> Before 6 am (0)</span></li> 
                </ul>
                <ul style={{padding:"0px",margin:"0px",lineHeight:"2"}}>
               <li><input type="checkbox"></input>
              <span className="" style={{color:"#3e3e52",fontSize:"12px"}}> 6 am to 12 pm (13)</span></li> 
                </ul>
                <ul style={{padding:"0px",margin:"0px",lineHeight:"2"}}>
               <li><input type="checkbox"></input>
              <span className="" style={{color:"#3e3e52",fontSize:"12px"}}> 12 pm to 6 pm (21)</span></li> 
                </ul>
                <ul style={{padding:"0px",margin:"0px",lineHeight:"2"}}>
               <li><input type="checkbox"></input>
              <span className="" style={{color:"#3e3e52",fontSize:"12px"}}> After 6 pm (186)</span></li> 
                </ul>
               
            </div>

            <h5 className=""  style={{}}>Bus Type</h5>
            <div>
            <ul style={{padding:"0px",margin:"0px",lineHeight:"2"}}>
               <li><input type="checkbox"></input>
              <span className="" style={{color:"#3e3e52",fontSize:"12px"}}> Seater</span></li> 
                </ul>
                <ul style={{padding:"0px",margin:"0px",lineHeight:"2"}}>
               <li><input type="checkbox"></input>
              <span className="" style={{color:"#3e3e52",fontSize:"12px"}}> Sleeper</span></li> 
                </ul>
                <ul style={{padding:"0px",margin:"0px",lineHeight:"2"}}>
               <li><input type="checkbox"></input>
              <span className="" style={{color:"#3e3e52",fontSize:"12px"}}> AC</span></li> 
                </ul>
                <ul style={{padding:"0px",margin:"0px",lineHeight:"2"}}>
               <li><input type="checkbox"></input>
              <span className="" style={{color:"#3e3e52",fontSize:"12px"}}>NON AC</span></li> 
                </ul>
               
            </div>

            <h5 className=""  style={{}}>Arrival Time</h5>
            <div>
            <ul style={{padding:"0px",margin:"0px",lineHeight:"2"}}>
               <li><input type="checkbox"></input>
              <span className="" style={{color:"#3e3e52",fontSize:"12px"}}> Before 6 am (0)</span></li> 
                </ul>
                <ul style={{padding:"0px",margin:"0px",lineHeight:"2"}}>
               <li><input type="checkbox"></input>
              <span className="" style={{color:"#3e3e52",fontSize:"12px"}}> 6 am to 12 pm (13)</span></li> 
                </ul>
                <ul style={{padding:"0px",margin:"0px",lineHeight:"2"}}>
               <li><input type="checkbox"></input>
              <span className="" style={{color:"#3e3e52",fontSize:"12px"}}> 12 pm to 6 pm (21)</span></li> 
                </ul>
                <ul style={{padding:"0px",margin:"0px",lineHeight:"2"}}>
               <li><input type="checkbox"></input>
              <span className="" style={{color:"#3e3e52",fontSize:"12px"}}> After 6 pm (186)</span></li> 
                </ul>
               
            </div>

            <h5 className=""  style={{}}>Seat Availability</h5>
            <div>
            <ul style={{padding:"0px",margin:"0px",lineHeight:"2"}}>
               <li><input type="checkbox"></input>
              <span className="" style={{color:"#3e3e52",fontSize:"12px"}}> Single Seat</span></li> 
                </ul>
                              
            </div>

        </Typography>
        
        
        
        
        
        </>


    )
}
export default Sidebar