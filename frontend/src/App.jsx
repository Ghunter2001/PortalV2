import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from './pages/Login';
import Signup from './pages/SignupV2';

// import Landing from "./pages/Landing";
import Landing from "./pages/landing/landingMain";
import About from "./pages/landing/about";


import DeptMain from './pages/department/Main';
import DeptDash from './pages/department/Home';
import DeptIT from "./pages/department/DeptIT";

import AdmMain from './pages/admission/Main';
import AdmHome from './pages/admission/home';
import AdmInfo from './pages/admission/Information';
import AdmPersonal from './pages/admission/Personal';
import AdmFamily from './pages/admission/Family';

import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/aboutmain" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />


        <Route path='/department' element={
          // <PrivateRoute >
            <DeptMain />
          // </PrivateRoute>
        }>
          <Route path='' element={<DeptDash />}></Route>
          <Route path='/department/deptIT' element={<DeptIT />}></Route>
        </Route>

        <Route path='/admission' element={<AdmMain />}>
          <Route path='' element={<AdmHome />} />
          <Route path='/admission/information' element={<AdmInfo />} />
          <Route path='/admission/personal' element={<AdmPersonal />} />
          <Route path='/admission/family' element={<AdmFamily />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
