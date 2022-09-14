import React from "react";
import './index.scss'
import HomeRoute from "./Routes/home/Home.route";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";


const App =()=> {
  
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={< HomeRoute/>} />
      </Route>   
    </Routes>

  );
}

export default App;
