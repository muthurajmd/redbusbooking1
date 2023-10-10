import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import { Home } from "../Home/Home";
// import Search from "../Search/Search";
import { SearchHome } from "../Search/SearchHome";


const Routing =()=>{
    return(
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/search" element={<SearchHome/>}> </Route>
    
        
       
    
    
      </Routes>
      </BrowserRouter>

    
    )
}
export default Routing