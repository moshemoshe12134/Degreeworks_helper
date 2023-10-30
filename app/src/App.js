import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login"
import Main from "./pages/main"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}> </Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Main" element={<Main/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;