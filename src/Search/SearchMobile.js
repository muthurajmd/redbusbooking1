import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BsArrowRight,BsStarFill} from "react-icons/bs";
import { GrFormSubtract} from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Updatearr} from "../Redux/Reducer";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export const SearchMobile = () =>{
    const state = useSelector(
        ({task})=>task
    )   

    // let [available,setavailable] = useState(true)      
    let [bording1,setbording1] = useState(false)
    
    // let [Droping,setDroping] = useState(false)         
    let [arr,setarr] = useState([])
    let [viewarr,setviewarr] = useState([])
    let [viewseats,setviewseats] = useState(true)
    let [selectdrop,setselectdrop] = useState(true)
    let [Boarding,setBoarding] = useState(false)
    let [BookedLast,setBookedLast] = useState(false)

    let [count,setcount]=useState(0)
    // let [busno,setbusno]=useState(0)
    let [seatno,setseatno]=useState([])
    let [boardingradio,setradio]=useState("")
    let [dropingradio,setradio1]=useState("")     

    let [param] = useSearchParams()
    let d =param.get('id')
    
    let dispatch = useDispatch() 
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
    setarr(dd)        
   
    }
    useEffect(update,[state.busarr,arr,viewarr])  


    const findbus = (ab) =>{
        console.log(ab)

        let ss = arr.find((va,ind)=>{
            return va.busno === ab
                  
                 })
                 console.log(ss)
                 let dd = [ss]
                 console.log(dd)
                 setviewarr(dd)
                 setviewseats(false)
    }

    const change = (val,ind,a) => {
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
   
               setarr(qw.bus)
  
              let ww = qw.bus.find((vv,i)=>{
                  return vv.busno === a
  
                })
                let dd = [ww]
                console.log(ww)
  
                 let xh = ww.seats.filter((v,index)=>{
                          return  v.isSelect === true && v.isBooked === false
                          
                        })
                       
                        let rr = xh.map((v,i)=>{
                          return v.id
                        })
                       
                            let xw = viewarr.map((va,i)=>{
                              return {...va,seats:va.seats.map((vf,index)=>{
                          return vf.id === val.id && vf.isBooked===false ?  ({...vf,isSelect:!vf.isSelect}): vf 
                     
                        }) 
                      }
                           })
                    
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
                        }
                      
                      if(xh.length>0){                          
                          setbording1(true)                                                 
                        }

                        if(xh.length===0){
                          setviewseats(true)
                        }
                       
                        else if(xh.length===0){                        
                          setbording1(false)
                        }
                            }

   const selectBoarding = () =>{
    setselectdrop(false)
    setBoarding(true)
   } 


   const payment = (a,b) =>{
     setBoarding(false)
     setBookedLast(true)
     if(boardingradio===""){
      setradio(a)
   } 
   if(dropingradio===""){
    setradio1(b)
   }

  }

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

  console.log(arr,state,viewarr)

    return(
        <>
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

   {selectdrop &&
   <>

{viewseats ? arr.map((val,i)=>{ 
        return(
    <Box component="div" onClick={()=>findbus(val.busno)} sx={{borderRadius:"20px",margin:"0.625rem 1rem",padding:"1rem",border:"none",boxShadow: "0px 0px 6px 4px #e0e0e0"}}>
        <Typography component="div" sx={{display:"flex",justifyContent:"space-between"}}>
        <Typography component="div">
            <span style={{fontWeight:"700"}}> {val.Departure} </span> 
            <span><GrFormSubtract/> </span>
            <span style={{}}> {val.Arrival} </span>

        </Typography>

        <Typography component="div">
            <span style={{fontWeight:"700"}}>INR {val.Fare}</span>
        </Typography>
        </Typography>

        <Typography component="div">
            <span style={{color:"gray",fontSize:"14px"}}>{val.Duration} </span> 
           
        </Typography>
        <Typography component="div" sx={{display:"flex",justifyContent:"space-between"}}>
        <Typography component="div">
            <span style={{fontWeight:"700"}}> {val.busname} </span> <br/>
            {/* <span><GrFormSubtract/> </span> */}
            <span style={{color:"gray",fontSize:"14px"}}> Non A/c Seater </span>

        </Typography>
        <Typography component="div">
        <p style={{backgroundColor:"#38b87c",color:"white",display:"inline-flex",padding:"2px 8px"}}><span> <BsStarFill/></span> 4.5 </p>
        </Typography>
        </Typography>
    </Box>
        )
})
:
<>
{viewarr.map((val,i)=>{
    return(
        <Box component="section" sx={{backgroundColor:"#efefef",padding:"15px"}}>
        <Typography sx={{display:"flex", justifyContent:{sm:"center"}}}>
        <Typography component="div" sx={{width:{xs:"45%",sm:"35%"}}}>

        <div>
  <h6>SEAT LEGEND</h6>
  </div>

  <div style={{width:"100%"}}>
  <Typography component="div" sx={{width:{xs:"50%",sm:"16%"},lineHeight:"1"}}>
  <span style={{fontSize:"10px"}}>Available</span>
    <span className="mx-2" style={{border: "1px solid #a7a9ac",width:"35px",height:"17px",backgroundColor:"#fff",display:"inline-block"}}></span>
   
  </Typography>
  <Typography component="div" sx={{width:{xs:"50%",sm:"16%"},lineHeight:"1"}}>
  <span style={{fontSize:"10px"}}>Unavailable</span>
    <span className="mx-2" style={{border: "1px solid #a7a9ac",width:"35px",height:"17px",backgroundColor:"#cbcbcb",display:"inline-block"}}></span>
   
  </Typography>
  <Typography component="div" sx={{width:{xs:"50%",sm:"16%"},lineHeight:"1"}}>
  <span style={{fontSize:"10px"}}>Female</span>
    <span className="mx-2" style={{border: "1px solid #f1a9a0",width:"35px",height:"17px",backgroundColor:"#fff",display:"inline-block"}}></span>
    
  </Typography>
  </div>
        </Typography>
        
    <Typography component="div" sx={{width:{xs:"50%",sm:"20%"},height:"80vh",boxShadow: "0px 0px 6px 4px #efefe0",backgroundColor:"white",display:"flex",alignItems:"center",justifyContent:"space-evenly",flexWrap:"wrap",paddingTop:"10px"}}>

    {val.seats.map((v,i)=>{

return(
<>
{v.isSelect ? (v.isBooked ? <img style={{margin:"5px 10px"}} src={v.unavailable} alt=""/> : <button style={{cursor:v.isSelect ? "":"pointer",width:"38px",border:"1px solid black",padding:"0px 0px",margin:"5px 10px",color:"black", backgroundColor:v.isSelect ? (v.isBooked ? "gray":"red") :"white"}}  onClick={()=>change(v,i,val.busno)}>{v.id} </button> ) 
: <img style={{margin:"5px 10px"}} src={v.available} onClick={()=>change(v,i,val.busno)} alt=""/> }
</>
)
})
}
</Typography>


</Typography>
{bording1 ? <button onClick={()=>selectBoarding()} className="but-continueMobile">Select Boading & Droping Points</button> : "" }
</Box>
    )
})
}
</>
} 
</> 

}
{ viewarr.map((val,i)=>{

return(
  <>

{Boarding &&

<>

<div style={{width:"100%",backgroundColor:"white"}}>
  <div style={{display:"flex"}}>
  <div style={{width:"100%",textAlign:"center",color:"red"}}>
  <h3  style={{cursor:"pointer",display:"inline-block",borderBottom:"3px solid red"}}>Boarding point</h3>
  </div>
  </div>
  <div>   
    <>  
    <ul style={{display:"flex",width:"100%",flexDirection:"column",padding:"0px",margin:"0px"}}>
     <FormControl sx={{padding:"0px 15px"}}>
     
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
       
     </ul>
      </>
    
      <div style={{width:"100%",textAlign:"center",color:"red"}}>
  <h3 style={{cursor:"pointer",display:"inline-block",borderBottom:"3px solid red"}}>Droping point</h3>
  </div>

    <ul style={{display:"flex",width:"100%",flexDirection:"column",padding:"0px",margin:"0px"}}>     
     <FormControl sx={{padding:"0px 15px"}}>
    
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
     <p style={{fontSize:"14px",paddingLeft:"3px"}}> Amount <br/><span style={{fontSize:"10px"}}> (Taxes will be calculated during payment)</span> <b style={{padding:"0px 20px",fontSize:"15px"}}> INR {val.Fare*count}.00</b></p>
     <button onClick={()=>payment(val.Boading,val.Arrivalplace1)}  className="but-continue"> continue</button>
    </ul>
    
</div>
 </div>
</>
}

{BookedLast &&
<>
<div style={{width:"100%",backgroundColor:"white"}}>
 <div style={{display:"flex",boxShadow: "0px 0px 6px 4px #e0e0e0",justifyContent:"center",margin:"10px"}}>
   <ul style={{display:"flex",width:"100%",flexDirection:"column",padding:"0px 10px",margin:"0px"}}>    
   <p>Boadring: {boardingradio}</p>
   <p>Droping: {dropingradio}</p>
   <p style={{display:"flex"}}>SEAT NO:
   {seatno.map((v,i)=>{
       return(
        <span style={{paddingLeft:"5px"}}>  {v},</span>
       )
   })}
   </p>   
    <p style={{fontSize:"12px",paddingLeft:"0px"}}> Amount <b style={{padding:"0px 20px",fontSize:"15px"}}> INR {val.Fare*count}.00</b> <br/><span style={{fontSize:"10px"}}> (Taxes will be calculated during payment)</span> </p>
    <button onClick={booked} className="but-continue"> Proceed to Book</button>
   </ul>
</div>
</div>

</>

}
</>
)
}
  )
}


        </>
    )
} 