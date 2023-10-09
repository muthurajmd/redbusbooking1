import React from "react";
import NavBar from "../Navbar/Navbar";
import { Banner } from "./Banner";
import AutoPlay from "./Carosel";
import { Box } from "@mui/material";
// import { BannerMobile } from "../Mobile/BannerMobile";
import { BannerMobile } from "./BannerMobile";

export const Home = () => {



    return(
        <>

        <NavBar/>
        <Box sx={{display:{xs:"none",sm:"none",md:"none",lg:"block"}}}>
        <Banner/>
        </Box>
        <Box sx={{display:{xs:"block",sm:"block",md:"block",lg:"none",xl:"none"}}}>
        <BannerMobile/>
        </Box>
        {/* <AutoPlay/> */}
        
        </>
    )
}