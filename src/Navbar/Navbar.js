import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Container } from '@mui/system';
import Typography from '@mui/material/Typography';
import Grid from '@mui/system/Unstable_Grid';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SwipeableTemporaryDrawer from './Drawer';


export default function NavBar() {
  return (
   
    <Box  sx={{position:"sticky",top:"0px",zIndex:"999",flexGrow: 1}}>
      <AppBar sx={{backgroundColor:"white"}} position="static">
      <Container>
        
        <Grid container spacing={1} sx={{justifyContent:"space-between"}}  columns={{xs:12,sm:12}} columnSpacing={{ xs: 1, sm: 2, md: 3 }} p={2}>
        <Grid xs={6} sm={1} lg={2}>
          <div style={{display:"flex",justifyContent:"left"}}>
        <Typography component="span" sx={{display:{md:"none",lg:"none"},cursor:"pointer"}}>
          <SwipeableTemporaryDrawer/>
          </Typography>
          
        <Typography component="img" src='https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg' sx={{width:{xs:"40px",md:"40px",lg:"60px"},cursor:"pointer"}}>
          </Typography>
          </div>
          
         
        </Grid>
        <Grid lg={6} sx={{alignItems:"center", flexDirection:'row', display: { xs: 'none', sm: 'none', lg:'flex'}}} >
            <Box mx={2} component="div" sx={{ display: 'flex',flexDirection:"column",alignItems:"center"}}>           
        <Typography component="img" src='https://st.redbus.in/web/images/layout/rb_vertical.svg' sx={{filter: "grayscale(100)",width:{xs:"20px",md:"40px",lg:"40px"}}}/>             
            <Box component="span" color="black" sx={{fontSize:"14px"}}> Bus Tickets
                </Box>     
                </Box> 

                <Box mx={2} component="div" sx={{ display: 'flex',flexDirection:"column",alignItems:"center"}}>           
        <Typography component="img" src='https://st.redbus.in/web/images/layout/ryde_vertical.svg' sx={{filter: "grayscale(100)",width:{xs:"20px",md:"40px",lg:"40px"}}}/>             
            <Box component="span" color="black"> Cab Rendal
                </Box>     
                </Box> 

                <Box mx={2} component="div" sx={{ display: 'flex',flexDirection:"column",alignItems:"center" }}>           
        <Typography component="img" src='https://st.redbus.in/web/images/layout/rail_vertical.svg' sx={{filter: "grayscale(100)",width:"40px"}}/>             
            <Box component="span" color="black"> Train Tickets
                </Box>     
                </Box> 
        </Grid>
        <Grid  xs={6} sm={2} lg={4} sx={{display:"flex", alignItems:"center", justifyContent:"end"}} >
            <Box mx={2} component="div" sx={{display:"flex", alignItems:"center", justifyContent:"end"}} >           
                  <HeadsetMicIcon sx={{color:"gray"}}/>
            <Box component="span" color="black" sx={{fontSize:"14px",display: { xs: 'none', sm: 'none', lg:'block',xl:"block"}}}> Help
                </Box>     
                </Box> 
                <Box  component="div" sx={{display:"flex", alignItems:"center", justifyContent:"end"}}>           
                  <AccountCircleIcon sx={{color:"gray"}}/>
            <Box component="span" color="black" sx={{fontSize:"14px", display: { xs: 'none', sm: 'none', lg:'block'}}}> Account
                </Box>     
                </Box> 
                </Grid>


        </Grid>
          
          
         
       
        </Container>
      </AppBar>
    </Box>
  
  );
}