import React, { Component } from 'react';
import Sidebar from './components/sidebar/sidebar';
import Root from './Routes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
// import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css"
const App = () => {
  return (
    <BrowserRouter>
      <Sidebar /> 
      <Root /> 
    </BrowserRouter>
 
  );
};
export default App;