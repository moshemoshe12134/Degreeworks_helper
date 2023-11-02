import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login"
import Main from "./pages/main"
import AboutUs from "./pages/aboutUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}> </Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/AboutUs" element={<AboutUs/>}></Route>
        <Route path="/Main" element={<Main saveState={false}/>}></Route>
        <Route path="/Saved" element={<Main saveState={true}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
