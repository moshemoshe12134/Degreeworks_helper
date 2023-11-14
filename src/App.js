import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login"
import Main from "./pages/main"
import AboutUs from "./pages/aboutUs";

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Login/>}> </Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/aboutUs" element={<AboutUs/>}></Route>
      <Route path="/main" element={<Main saveState={false}/>}></Route>
      <Route path="/saved" element={<Main saveState={true}/>}></Route>
    </Routes>

  );
}

export default App;
