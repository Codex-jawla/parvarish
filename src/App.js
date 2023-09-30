import './App.css';
import Home from './component/home/Home';
import Navbar from './component/nav/Navbar'
import Footer from './component/footer/Footer';
import Gallery from './component/gallery/Gallery';
import Overview from './component/aboutUs/Overview';
import Objective  from './component/aboutUs/Objective';
import Vission from './component/aboutUs/Vission';
import Mission from './component/aboutUs/Mission';
import {Route,Routes} from "react-router-dom"

import React from 'react'

const App = () => {
  return (<>
    <Navbar/>
  <Routes>
    <Route path="/" Component={Home}/>
    <Route path="/gallery" Component={Gallery}/>
    <Route path="/overviewa" Component={Overview}/>
    <Route path="/objective" Component={Objective}/>
    <Route path="/vision" Component={Vission}/>
    <Route path="/mission" Component={Mission}/>
  </Routes>
  <Footer/>
  </>
  )
}

export default App;