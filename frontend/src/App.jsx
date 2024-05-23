import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Main from './pages/department/Main';
import Admission from './pages/admission/Main';
import Information from './pages/admission/Information';
import Personal from './pages/admission/Personal';
import Family from './pages/admission/Family';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/main' element={<Main />}></Route>
        <Route path='/admission' element={<Admission />}></Route>
        <Route path='/information' element={<Information />}></Route>
        <Route path='/personal' element={<Personal />}></Route>
        <Route path='/family' element={<Family />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
