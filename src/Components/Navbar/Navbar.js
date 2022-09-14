import React from "react";
import { Outlet } from "react-router-dom";

const Navbar =()=>{
  return (
    <>  
      <h2>I am a navbar</h2>
      <Outlet />
    </>
  )
}

export default Navbar