import React, {useState, useEffect } from "react";
import './Search.scss';
import { BsArrowRight,BsChevronDown,BsFillPersonFill,BsTrainFront,BsWater,BsFillUsbDriveFill,BsStarFill} from "react-icons/bs";
import { PiPlugChargingThin,PiTelevisionBold } from "react-icons/pi";
import { SlClose } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Typography } from "@mui/material";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Value } from "sass";
import { Updatearr,Updateroute, Updateselect } from "../Redux/Reducer";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const Search = () =>{
    const state = useSelector(
        ({task})=>task
    )

    let dispatch = useDispatch()
    // console.log(state.route)

        let [available,setavailable] = useState(true)
        let [countav,setcountav] = useState(false)
        let [bording1,setbording1] = useState(false)
        let [Boarding,setBoarding] = useState(true)
        let [Droping,setDroping] = useState(false)
    
        let [seatcount,setseatcount] = useState(0)
        const [arr,setarr] = useState([])
        const [viewarr,setviewarr] = useState([])
        const [viewseats,setviewseats] = useState(true)
        let [selectbus,setselectbus] = useState([])
        let [xqq,setxqq] = useState([])
        let [count,setcount]=useState(0)
        let [busno,setbusno]=useState(0)
        let [seatno,setseatno]=useState([])
        let [boardingradio,setradio]=useState("")
        let [dropingradio,setradio1]=useState("")

        

        let [param] = useSearchParams()
        let d =param.get('id')
         let n = useNavigate()


         const clear = () =>{
          let x = state.busarr.map((vq,i)=>{
            return {...vq,bus:vq.bus.map((va,ind)=>{
             return {...va,seats:va.seats.map((v,index)=>{
                     return v.isSelect===true && v.isBooked===false ?  ({...v,isSelect:!v.isSelect}): v 
                      
                    })
                  }  
              }) 
            }
          })
  
          console.log(x)
          dispatch(Updatearr(x)) 
         }
         useEffect(clear,[])


        
        const update = () => {

        let qw=state.busarr.find((a,b)=>{
          return Number(d) === a.busid
      })

        let dd = qw.bus
        console.log(qw)
      
        setarr(dd) 
           
           
   
        }
        useEffect(update,[state.busarr,arr,viewarr])
      
        
    const change = (val,ind,a) => {
      console.log(val.id) 
      setseatno(seatno+=val.id)

      // setcountav(true)
      setbusno(a)
      let id=val.id
      console.log(a)
      console.log(count)
      let x = state.busarr.map((vq,i)=>{
        return {...vq,bus:vq.bus.map((va,ind)=>{
         return {...va,seats:va.seats.map((v,index)=>{
                 return v.id === val.id && v.isBooked===false ?  ({...v,isSelect:!v.isSelect}): v 
                  
                })
              }  
          }) 
        }
      })
    
        let qw=x.find((a,b)=>{
              return Number(d) === a.busid
          })
 
             console.log(arr)
             console.log(xqq)
             console.log(qw.bus)

             setarr(qw.bus)

            let ww = qw.bus.find((vv,i)=>{
                return vv.busno === a

              })
              let dd = [ww]
              console.log(ww)

               let xh = ww.seats.filter((v,index)=>{
                        return  v.isSelect === true && v.isBooked === false
                        
                      })
                      console.log(xh)
                      // setcount(xh.length)

                        
                      let rr = xh.map((v,i)=>{
                        return v.id
                      })
                      console.log(rr)
                      // setseatno (rr)
                    
                      




                      // console.log(viewarr)
                          let xw = viewarr.map((va,i)=>{
                            return {...va,seats:va.seats.map((vf,index)=>{
                        return vf.id === val.id && vf.isBooked===false ?  ({...vf,isSelect:!vf.isSelect}): vf 

                    

                      }) 
                    }
                     
                    })
                    console.log(xw)


                    // state.busarr.map((vq,i)=>{
                          let xz= dd.map((va,ind)=>{
                       return {...va,seats:va.seats.map((v,index)=>{
                               return v.id === val.id && v.isBooked===false ?  ({...v,isSelect:!v.isSelect}): v 
                                
                              })
                            }  
                        }) 
                        console.log(xz)
                      
                      if (xh.length<=6){
      dispatch(Updatearr(x)) 
      setviewarr(xw)
      setcount(xh.length)
      setseatno(rr)
      
    }
    else {
      alert("The maximum number of seats that can be selected is 6")
      setseatno(rr)
    }
   
   if(xh.length>0){
      setavailable(false)
      setbording1(true)
      
     
    }
    if(xh.length===0){
      setviewseats(true)
    }
    if(xh.length===1){
      setviewarr(dd)
       setviewseats(false)

    }
    else if(xh.length===0){
      setavailable(true)
  setbording1(false)
    }
   
 
  
           }

           const boarding = () =>{
            setDroping(false)
            setBoarding(true)


           }
           const dropingg = () =>{
            setDroping(true)
            setBoarding(false)


           }

           const nextcontinue = (a) =>{
            if(dropingradio===""){
              setradio1(a)
              setbording1(false)

            }
            else{ 
              setbording1(false)

            }
            
           }

          //  console.log(arr)
          //  console.log(count)


          //  useEffect(()=>{
          //   console.log(arr)
          //   if(countav){
          //        seatcountt(busno)
          //   }
            
      
          //  },[arr])
          

          //  const view = (a) => {
            
          //   let ss = arr.find((va,ind)=>{
          //     return va.busno === a
                    
          //          })
          //          console.log(ss)
          //          setselectbus(ss.seats)


          // }
          // console.log(selectbus)


          // const seatcountt = () => { 
 
          
          //    let sq = selectbus.filter((v,index)=>{
          //            return  v.isSelect === true && v.isBooked === false
                      
          //           })
          //           console.log(sq)
          //           console.log(sq.length)      
          //       }
         
          //  console.log(selectbus)
    
 

          const view = (ab) => {
            console.log(ab)   
            let ss = arr.find((va,ind)=>{
              return va.busno === ab
                    
                   })
                   console.log(ss)
                   let dd = [ss]
                   console.log(dd)
                  //  setviewarr(dd)
                  //  setviewseats(false)

                   
                  //  let d=ss.seats
                  //  console.log(d)
                  
                  

                  //   let sq = d.filter((v,index)=>{
                  //     return  v.isSelect === true && v.isBooked === false
                       
                  //    })
                  //    console.log(sq)
                  //    console.log(sq.length)  
      
            
          

          } 
          // useEffect(()=>{
          //   console.log(arr)
            
          // },[arr])
          


          const seatcountt = (a) => { 
            console.log(state)
            console.log(arr)
            console.log(count)

            // update()
            // state.busarr.map((vq,i)=>{
            //         vq.bus.map((va,ind)=>{
            //           let hh= va.seats.filter((v,index)=>{
            //                 return  v.isSelect === true && v.isBooked === false
                        
            //           })
            //           console.log(hh)
            //         })  
            //     }) 
              
          //   let qw=state.busarr.find((a,b)=>{
          //     return Number(d) === a.busid
          // })
 
          //    console.log(arr)
          //    console.log(xqq)
          //    console.log(qw)

          //   let ww = qw.bus.find((vv,i)=>{
          //       return vv.busno === a

          //     })

          //     console.log(ww)

          //      let xh = ww.seats.filter((v,index)=>{
          //               return  v.isSelect === true && v.isBooked === false
                        
          //             })
          //             console.log(xh)



                  
            
            
              let ss = arr.find((va,ind)=>{
                return va.busno === a
                      
                     })
                     console.log(ss)

                     let d=ss.seats
                     console.log(d)
                     let dd = [ss]
                    
                    

                      let sq = d.filter((v,index)=>{
                        return  v.isSelect === true && v.isBooked === false
                         
                       })
                       console.log(sq)
                       console.log(sq.length)
                       


                       if(sq.length>0){
                        setavailable(false)
                        setbording1(true)
                        // setviewarr(dd)
                        // setviewseats(false)
                      }
                      else if(sq.length===0){
                        setavailable(true)
                    setbording1(false)
                      }
                                         

                     }

                    //  useEffect(update,[state,state.busarr,arr,count,available])

 const booked = () =>{


  let x = state.busarr.map((vq,i)=>{
    return {...vq,bus:vq.bus.map((va,ind)=>{
     return {...va,seats:va.seats.map((v,index)=>{
             return v.isSelect === true ? {...v,isBooked:true}:v
              
            })
          }  
      }) 
    }
  })

  console.log(x)
  dispatch(Updatearr(x)) 
  alert("successfully booked")
 n('/')



 }

   const closefun = () =>{

    clear()
    setviewseats(true)
    setDroping(false)
    setBoarding(true)
    // setarr(true)


   }

  








 const home = () => {

  n('/')
   
 } 

 const departure = (a) =>{
  
  if(boardingradio===""){
     setradio(a)
     setBoarding(false)
    setDroping(true)
    

  }
  else{
    setBoarding(false)
    setDroping(true)
  }
    

 }
console.log(arr)
console.log(viewarr)
console.log(viewseats)
 
 
return(

    
    <section>
     <Typography component="header" id="header" style={{color:"white",backgroundColor:"#d84f57"}}>
		
             <Typography component="div" py={2} px={3} sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                 <Typography component="div" sx={{width:"34%"}}>
                     <Typography component="div"  sx={{display:"flex",alignItems:"center"}}>
                     <Typography component="img" onClick={home} src={"https://www.redbus.in/i/59538b35953097248522a65b4b79650e.png"} alt="" className="" mx={2} style={{color:"white"}}/>
                      <Typography component="div" ps={3}>
                          
                            <span style={{fontSize:"20px",textTransform:"uppercase"}}>Bus Tickets</span>
                            </Typography>
                                                                     
                 </Typography> 
                 </Typography> 
                
                 
                  <Typography component="div" sx={{width:"34%"}}> 
                     
                         <ul style={{display:"flex",justifyContent:"space-evenly",alignItems:"center",marginTop:"5px"}}>
                            <li><span>Help</span> </li>
                            <li> <span sx={{alignItems:"center"}}>Manage Booking</span> <BsChevronDown/> </li>
                            
                            <li> <BsFillPersonFill/><span> Account</span></li>
                           
                          
                            
                            
                         </ul>
                   
                 </Typography>
             </Typography>       
   
                                    
</Typography>



<Typography component="section" id="header" style={{color:"black",backgroundColor:"white"}}>	 
			    
			
             <Typography component="div" px={5} py={2} sx={{display:"flex", justifyContent:"space-between",alignItems:"center",borderBottom:"0.75px solid #ddd"}} className="d-flex justify-content-between align-items-center py-2 px-5 border-bottom shadow">
                 <Typography component="div" sx={{width:"33%"}}>
                     <Typography component="div" sx={{display:"flex",alignItems:"center"}}>
                     <span className="fw-bold">Madurai</span>
                     <Typography component="div" px={2} >
                     <BsArrowRight/>
                     </Typography>
                    
                     <span>Chennai</span>
                                                  
                 </Typography> 
                 </Typography> 
                
                 
                  
             </Typography>
         
   
                                    
</Typography>

<section id="side-bar">
    <Typography component="div" className="container" style={{width:"100%"}}>
    <Typography component="div" sx={{display:"flex"}}>
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




        <Typography component="div" sx={{width:"100%"}}>
          <div>
          {/* <h5 className=""  style={{}}></h5> */}
            <div>
            <ul style={{display:"flex",justifyContent:"space-between",margin:"0px 25px",padding:"0px",lineHeight:"2"}}>
               <li>
              <span className="" style={{color:"#3e3e52",fontSize:"12px"}}> 179 Buses Found </span></li> 
              <li> <span className="" style={{color:"#3e3e52",fontSize:"12px"}}> SORT BY: </span></li> 
              <li> <span className="" style={{color:"#3e3e52",fontSize:"12px"}}> Departure </span></li> 
              <li> <span className="" style={{color:"#3e3e52",fontSize:"12px"}}> Duration </span></li> 
              <li> <span className="" style={{color:"#3e3e52",fontSize:"12px"}}> Arrival </span></li> 
              <li> <span className="" style={{color:"#3e3e52",fontSize:"12px"}}> Ratings </span></li> 
              <li> <span className="" style={{color:"#3e3e52",fontSize:"12px"}}>Fare </span></li> 
              <li>  <span className="" style={{color:"#3e3e52",fontSize:"12px"}}> Seat Availability </span></li> 
                </ul>
                              
            </div>
            
  {viewseats ? arr.map((val,i)=>{ 
        return(

            <div className="">
              <div className="shadow ms-2 my-4" style={{border:"0.5px solid #7a727242",margin:"8px 10px", boxShadow:"0px 8px 10px #aa9fa1" }}>
               <div style={{display:"flex",justifyContent:"space-between"}}>
               <div  style={{width:"25%"}}>
                <h5 style={{padding:"0px 10px"}} className="px-2">{val.busname} </h5>
                <p style={{padding:"0px 10px",color:"gray",fontSize:"14px"}} className="px-2">{val.ac}</p>
               </div>
               <div  style={{width:"10%",paddingLeft:"30px"}}>
              <h4 className="px-5">{val.Departure} </h4>
              <p className="px-5">{val.DeparturePlace}</p>
             </div>

             <div  style={{width:"8%"}}>
              <h4>{val.Duration}</h4>
           
             </div>
             <div  style={{width:"8%"}}>
              <h4>{val.ArrivalPlace}</h4>
           
             </div>

             <div  style={{width:"8%",margin:"18px 0px"}}>
              
              <p className="px-2" style={{backgroundColor:"#38b87c",color:"white",display:"inline",padding:"2px 8px"}}><span> <BsStarFill/></span> {val.Ratings}</p>
             </div>

               <div  style={{width:"8%"}}>
                
                <p>{val.Fare}</p>
               </div>

               <div style={{width:"8%"}} className="col-1">
                
                <p>{val.SeatsAvailable}</p>
                 <p>{val.SeatsWindow}</p>
               </div>
               </div>
               <div style={{display:"flex",alignItems:"center",padding:"0px 5px"}}>
             <i style={{padding:"0px 4px"}}><BsWater/></i>
             <i style={{padding:"0px 4px"}}> <PiPlugChargingThin/> </i>
             <i style={{padding:"0px 4px"}}><BsFillUsbDriveFill/></i>
             <i style={{padding:"0px 4px"}}><PiTelevisionBold/></i>
             <i style={{padding:"0px 4px"}}><BsTrainFront/></i>
                <span  style={{color:"#3e3e52",fontSize:"12px",paddingLeft:"4px"}}> Live Tracking</span>
                <span  style={{color:"#3e3e52",fontSize:"12px",color:"red",paddingLeft:"4px"}}>{val.Offer}</span>
               

            </div>
            <div style={{width:"98%",padding:"0px 5px",boxShadow:"none"}}>
              <div>
                  
               
                </div>

             
              <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography component="div" onClick={()=>view(val.busno)}  style={{color:"white",backgroundColor:"#d84e55",padding:"0px 5px",marginBottom:"4px"}}> 
                View Seats
              </Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:"#eeeded",height:"50vh",display:"flex",alignItems:"center"}}>
          <Typography>
          <Typography component="div" sx={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
<Typography component="div" sx={{width:"35%",border:"1px solid black",display:"flex",alignItems:"center",justifyContent:"space-evenly",flexWrap:"wrap"}}>

          {val.seats.map((v,i)=>{

return(
  <>
    {/* <Typography component="div" sx={{border:"1px solid black",padding:"0px 10px",margin:"0px 5px"}}> */}
  {/* <button style={{cursor:v.isSelect ? "":"pointer",width:"50px",border:"1px solid black",padding:"0px 10px",margin:"0px 5px",color:"black", backgroundColor:v.isSelect ? (v.isBooked ? "gray":"red") :"white"}}  onClick={()=>change(v,i,val.busno)}>{v.no} </button> */}
  {/* </Typography> */}
  {v.isSelect ? (v.isBooked ? <img style={{margin:"5px 10px"}} src={v.unavailable} alt=""/> : <button style={{cursor:v.isSelect ? "":"pointer",width:"38px",border:"1px solid black",padding:"0px 0px",margin:"0px 10px",color:"black", backgroundColor:v.isSelect ? (v.isBooked ? "gray":"red") :"white"}}  onClick={()=>change(v,i,val.busno)}>{v.id} </button> )
  

  : <img style={{margin:"5px 10px"}} src={v.available} onClick={()=>change(v,i,val.busno)} alt=""/> }
  </>
)

})

    }
     </Typography>

     <Typography component="div" sx={{width:"50%"}}>

      
      <>

     {/* <div className="col-4"> */}
      <div>
    <h4>SEAT LEGEND</h4>
    </div>
    <div style={{display:"flex",width:"100%",float:"left"}}>
    <div style={{width:"50%",display:"flex"}} className="col-6 d-flex">
      <span className="mx-2" style={{border: "1px solid #a7a9ac",width:"35px",height:"17px",backgroundColor:"#fff",display:"inline-block"}}></span>
      <span>Available</span>
    </div>
    <div style={{width:"50%",display:"flex"}} className=" col-6 d-flex">
      <span className="mx-2" style={{border: "1px solid #a7a9ac",width:"35px",height:"17px",backgroundColor:"#cbcbcb",display:"inline-block"}}></span>
      <span>Unavailable</span>
    </div>
    <div style={{width:"50%",display:"flex"}} className="col-6 d-flex pt-3">
      <span className="mx-2" style={{border: "1px solid #f1a9a0",width:"35px",height:"17px",backgroundColor:"#fff",display:"inline-block"}}></span>
      <span>Female</span>
    </div>
   
    </div>
    </>
   

  
    


     </Typography>


  </Typography>
       

           
          </Typography>
        </AccordionDetails>
      </Accordion>




            </div>
           
              </div>
            </div> 

        )
      })
      
     : viewarr.map((val,i)=>{
      return(

          <div className="">
            <div className="shadow ms-2 my-4" style={{border:"0.5px solid #7a727242",margin:"8px 10px", boxShadow:"0px 8px 10px #aa9fa1" }}>
             <div style={{display:"flex",justifyContent:"space-between"}}>
             <div  style={{width:"25%"}}>
              <h5 style={{padding:"0px 10px"}} className="px-2">{val.busname} </h5>
              <p style={{padding:"0px 10px",color:"gray",fontSize:"14px"}} className="px-2">{val.ac}</p>
             </div>
             <div  style={{width:"10%",paddingLeft:"30px"}}>
              <h4 className="px-5">{val.Departure} </h4>
              <p className="px-5">{val.DeparturePlace}</p>
             </div>

             <div  style={{width:"8%"}}>
              <h4>{val.Duration}</h4>
           
             </div>
             <div  style={{width:"8%"}}>
              <h4>{val.ArrivalPlace}</h4>
           
             </div>

             <div  style={{width:"8%",margin:"18px 0px"}}>
              
              <p className="px-2" style={{backgroundColor:"#38b87c",color:"white",display:"inline"}}><span> <BsStarFill/></span> {val.Ratings}</p>
             </div>

             <div  style={{width:"8%"}}>
              
              <p>{val.Fare}</p>
             </div>

             <div style={{width:"8%"}} className="col-1">
              
              <p>{val.SeatsAvailable}</p>
               <p>{val.SeatsWindow}</p>
             </div>
             </div>
             <div style={{display:"flex",alignItems:"center",padding:"0px 5px"}}>
           <i style={{padding:"0px 4px"}}><BsWater/></i>
           <i style={{padding:"0px 4px"}}> <PiPlugChargingThin/> </i>
           <i style={{padding:"0px 4px"}}><BsFillUsbDriveFill/></i>
           <i style={{padding:"0px 4px"}}><PiTelevisionBold/></i>
           <i style={{padding:"0px 4px"}}><BsTrainFront/></i>
              <span  style={{color:"#3e3e52",fontSize:"12px",paddingLeft:"4px"}}> Live Tracking</span>
              <span  style={{color:"#3e3e52",fontSize:"12px",color:"red",paddingLeft:"4px"}}>{val.Offer}</span>
             

          </div>
          <div style={{width:"98%",padding:"0px 5px",boxShadow:"none"}}>
            <div>
                
             
              </div>

           
            {/* <Accordion> */}
      {/* <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      > */}
        <Typography component="div" onClick={()=>view(val.busno)} style={{display:"flex",justifyContent:"end",color:"white"}}> 
             <span style={{backgroundColor:"#d84e55",padding:"0px 15px"}}> View Seats  </span>
              
            </Typography>
      {/* </AccordionSummary> */}
      <AccordionDetails style={{backgroundColor:"#eeeded",height:"50vh",display:"flex",alignItems:"center"}}>
        <Typography>
        <Typography component="div" sx={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
<Typography component="div" sx={{width:"35%",border:"1px solid black",display:"flex",alignItems:"center",justifyContent:"space-evenly",flexWrap:"wrap"}}>

        {val.seats.map((v,i)=>{

return(
<>
  {/* <Typography component="div" sx={{border:"1px solid black",padding:"0px 10px",margin:"0px 5px"}}> */}
{/* <button style={{cursor:v.isSelect ? "":"pointer",width:"50px",border:"1px solid black",padding:"0px 10px",margin:"0px 5px",color:"black", backgroundColor:v.isSelect ? (v.isBooked ? "gray":"red") :"white"}}  onClick={()=>change(v,i,val.busno)}>{v.no} </button> */}
{/* </Typography> */}

{v.isSelect ? (v.isBooked ? <img style={{margin:"5px 10px"}} src={v.unavailable} alt=""/> : <button style={{cursor:v.isSelect ? "":"pointer",width:"38px",border:"1px solid black",padding:"0px 0px",margin:"5px 10px",color:"black", backgroundColor:v.isSelect ? (v.isBooked ? "gray":"red") :"white"}}  onClick={()=>change(v,i,val.busno)}>{v.id} </button> )
  

  : <img style={{margin:"5px 10px"}} src={v.available} onClick={()=>change(v,i,val.busno)} alt=""/> }
</>
)

})

  }
   </Typography>

   <Typography component="div" sx={{width:"60%"}}>
   <div style={{display:"flex",justifyContent:"end"}}> 
   <i onClick={()=>closefun()} style={{cursor:"pointer",fontSize:"20px"}}><SlClose/></i>
   </div>

    {available &&
    <>

   

   {/* <div className="col-4"> */}
    <div>
  <h4>SEAT LEGEND</h4>
  </div>
  <div style={{display:"flex",width:"100%",float:"left"}}>
  <div style={{width:"50%",display:"flex"}} className="col-6 d-flex">
    <span className="mx-2" style={{border: "1px solid #a7a9ac",width:"35px",height:"17px",backgroundColor:"#fff",display:"inline-block"}}></span>
    <span>Available</span>
  </div>
  <div style={{width:"50%",display:"flex"}} className=" col-6 d-flex">
    <span className="mx-2" style={{border: "1px solid #a7a9ac",width:"35px",height:"17px",backgroundColor:"#cbcbcb",display:"inline-block"}}></span>
    <span>Unavailable</span>
  </div>
  <div style={{width:"50%",display:"flex"}} >
    <span className="mx-2" style={{border: "1px solid #f1a9a0",width:"35px",height:"17px",backgroundColor:"#fff",display:"inline-block"}}></span>
    <span>Female</span>
  </div>
 
  </div>
  </>
 }

 {bording1 ? (

 <div style={{width:"65%",backgroundColor:"white",marginLeft:"150px"}}>

  <div style={{display:"flex"}}>
  <div style={{width:"50%",textAlign:"center",color:Boarding?"red":"black"}}>
  <h3 onClick={boarding} style={{cursor:"pointer",display:"inline-block",borderBottom:Boarding? "3px solid red":""}}>Boarding point</h3>
  </div>
  <div style={{width:"50%",textAlign:"center",color:Droping?"red":"black"}}>
  <h3 onClick={dropingg} style={{cursor:"pointer",display:"inline-block",borderBottom:Droping? "3px solid red":""}}>Droping point</h3>
  </div>
  </div>


  <div style={{display:"flex"}}>

    {Boarding &&
    <>
    
    <ul style={{display:"flex",width:"100%",flexDirection:"column",padding:"0px",margin:"0px"}}>


    


     <FormControl sx={{padding:"0px 15px"}}>
      {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={val.Boading}
        name="radio-buttons-group"
       
      >
        <FormControlLabel   id={val.Boading} value={val.Boading} control={<Radio />} label={val.Boading} onClick={() => setradio(val.Boading)} />
        <FormControlLabel id={val.Boading1}  value={val.Boading1} control={<Radio />} label={val.Boading1}  onClick={() => setradio(val.Boading1)} />
        <FormControlLabel  id={val.Boading2} value={val.Boading2} control={<Radio />} label={val.Boading2}  onClick={() => setradio(val.Boading2)} />
      </RadioGroup>
    </FormControl>

     {/* <div  > */}
     <p style={{fontSize:"14px",paddingLeft:"3px"}}> Amount <span style={{fontSize:"10px"}}> (Taxes will be calculated during payment)</span> <b style={{padding:"0px 20px",fontSize:"15px"}}> INR {val.Fare*count}.00</b></p>
    <button onClick={()=>departure(val.Boading)} className="but-continue">continue</button>
    {/* </div> */}
    
     </ul>
     
      </>

    }



   
   {Droping &&

    <ul style={{display:"flex",width:"100%",flexDirection:"column",padding:"0px",margin:"0px"}}>
      
     <FormControl sx={{padding:"0px 15px"}}>
      {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={val.Arrivalplace1}
        name="radio-buttons-group"
      >
        <FormControlLabel value={val.Arrivalplace1} control={<Radio />} label={val.Arrivalplace1} onClick={() => setradio1(val.Arrivalplace1)} />
        <FormControlLabel value={val.Arrivalplace2} control={<Radio />} label={val.Arrivalplace2} onClick={() => setradio1(val.Arrivalplace2)} />
        <FormControlLabel value={val.Arrivalplace3} control={<Radio />} label={val.Arrivalplace3} onClick={() => setradio1(val.Arrivalplace3)} />
      </RadioGroup>
    </FormControl>

     
     <p style={{fontSize:"14px",paddingLeft:"3px"}}> Amount <span style={{fontSize:"10px"}}> (Taxes will be calculated during payment)</span> <b style={{padding:"0px 20px",fontSize:"15px"}}> INR {val.Fare*count}.00</b></p>
     <button onClick={()=>nextcontinue(val.Arrivalplace1)} className="but-continue"> continue</button>
    </ul>
    }

</div>



 </div>
 ) :
 <div style={{width:"65%",backgroundColor:"white",marginLeft:"150px"}}>
 <div style={{display:"flex"}}>
   <ul style={{display:"flex",width:"100%",flexDirection:"column",padding:"0px",margin:"0px"}}>    
   <p>Boadring: {boardingradio}</p>
   <p>Droping: {dropingradio}</p>
   <p style={{display:"flex"}}>SEAT NO:
   {seatno.map((v,i)=>{
       return(
        <span style={{paddingLeft:"5px"}}>  {v},</span>
       )
   })}
   </p>
   
    <p style={{fontSize:"14px",paddingLeft:"3px"}}> Amount <span style={{fontSize:"10px"}}> (Taxes will be calculated during payment)</span> <b style={{padding:"0px 20px",fontSize:"15px"}}> INR {val.Fare*count}.00</b></p>
    <button onClick={booked} className="but-continue"> Proceed to Book</button>
   </ul>
  

</div>



</div>
  }

  
  

 
  


   </Typography>


</Typography>
     

         
        </Typography>
      </AccordionDetails>
    
          </div>
         
            </div>
          </div> 

      )
    })

    


    
  
}


    </div>


    
   




    </Typography>
   
    </Typography>
    </Typography>
	 </section>


 </section>
  
  )
}
export default Search