import React from "react";
import Search from "./Search";
import { Box } from "@mui/material";
import { SearchMobile } from "./SearchMobile";
import LabelBottomNavigation from "./Bottom";


export const SearchHome = () => {



    return(
        <>
        <Box sx={{display:{xs:"none",sm:"none",md:"none",lg:"block"}}}>
         <Search/>
         </Box>
         <Box sx={{display:{xs:"block",sm:"block",md:"block",lg:"none",xl:"none"}}}>
            <SearchMobile/>
            {/* <LabelBottomNavigation/> */}
            </Box>
        
        </>
    )
}