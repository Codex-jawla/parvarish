import './App.css';
import Home from './component/home/Home';
import Navbar from './component/nav/Navbar'
import Footer from './component/footer/Footer';
import Gallery from './component/gallery/Gallery';
import Overview from './component/aboutUs/Overview';
import Objective  from './component/aboutUs/Objective';
import Vission from './component/aboutUs/Vission';
import Mission from './component/aboutUs/Mission';
import Bisauli from './component/cities/Bisauli';
import Bilsi from './component/cities/Bilsi';
import Babrala from './component/cities/Babrala';
import Ughaiti from './component/cities/Ughaiti';
import Islamnagar from './component/cities/Islamnagar';
import Behjoi from './component/cities/Behjoi';
import Chandausi from './component/cities/Chandausi';
import Ujhani from './component/cities/Ujhani';
import Gawan from './component/cities/Gawan';
import Upsc from './component/exams/Upsc'
import Ssc from './component/exams/Ssc'
import Ctet from './component/exams/Ctet'
import Nda from './component/exams/Nda'
import Banking from './component/exams/Banking'
import Railways from './component/exams/Railways'
import NavodayaEntrance from './component/exams/NavodayaEntrance'
import Sanik from './component/exams/Sanik'
import Englishspeaking from './component/exams/Englishspeaking'
import Computer from './component/exams/Computer'







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
    <Route path="/bisauli" Component={Bisauli}/>
    <Route path="/bilsi" Component={Bilsi}/>
    <Route path="/babrala" Component={Babrala}/>
    <Route path="/ughaiti" Component={Ughaiti}/>
    <Route path="/islamnagar" Component={Islamnagar}/>
    <Route path="/behjoi" Component={Behjoi}/>
    <Route path="/chandausi" Component={Chandausi}/>
    <Route path="/ujhani" Component={Ujhani}/>
    <Route path="/gawan" Component={Gawan}/>
    <Route path="/upsc" Component={Upsc}/>
    <Route path="/ssc" Component={Ssc}/>
    <Route path="/ctet" Component={Ctet}/>
    <Route path="/banking" Component={Banking}/>
    <Route path="/railways" Component={Railways}/>
    <Route path="/ndacds" Component={Nda}/>
    <Route path="/navodaya" Component={NavodayaEntrance}/>
    <Route path="/sainik" Component={Sanik}/>
    <Route path="/english" Component={Englishspeaking}/>
    <Route path="/computer" Component={Computer}/>
  </Routes>
  <Footer/>
  </>
  )
}

export default App;
