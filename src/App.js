import './App.css';
import Home from './component/home/Home';
import Navbar from './component/nav/Navbar'
import Footer from './component/footer/Footer';
import Gallery from './component/gallery/Gallery';
import Overview from './component/aboutUs/Overview';
import Overviewo from './component/ourwork/Overviewo';
import Education from './component/ourwork/Education';
import Health from './component/ourwork/Health';
import Agriculture from './component/ourwork/Agriculture';
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
import News1 from './component/homelinks/newslinks/News1';
import News2 from './component/homelinks/newslinks/News2';
import News3 from './component/homelinks/newslinks/News3';
import News4 from './component/homelinks/newslinks/News4';
import News5 from './component/homelinks/newslinks/News5';
import News6 from './component/homelinks/newslinks/News6';
import News7 from './component/homelinks/newslinks/News7';
import News8 from './component/homelinks/newslinks/News8';
import Article1 from './component/homelinks/articleblog/Article1';
import Article2 from './component/homelinks/articleblog/Article2';
import Article3 from './component/homelinks/articleblog/Article3';
import Article4 from './component/homelinks/articleblog/Article4';
import Article5 from './component/homelinks/articleblog/Article5';
import P1 from './component/homelinks/Programlinks/P1';
import P2 from './component/homelinks/Programlinks/P2';
import P3 from './component/homelinks/Programlinks/P3';
import P4 from './component/homelinks/Programlinks/P4';
import P5 from './component/homelinks/Programlinks/P5';
import P6 from './component/homelinks/Programlinks/P6';
import Articles from './component/resources/Articles';
import Videos from './component/resources/Videos';
import Newsletter from './component/resources/Newsletter';
import Newsl1 from './component/homelinks/letter/Newsl1'
import Newsl2 from './component/homelinks/letter/Newsl2'
import Newsl3 from './component/homelinks/letter/Newsl3'




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
    <Route path="/news1" Component={News1}/>
    <Route path="/news2" Component={News2}/>
    <Route path="/news3" Component={News3}/>
    <Route path="/news4" Component={News4}/>
    <Route path="/news5" Component={News5}/>
    <Route path="/news6" Component={News6}/>
    <Route path="/news7" Component={News7}/>
    <Route path="/news8" Component={News8}/>
    <Route path="/p1" Component={P1}/>
    <Route path="/p2" Component={P2}/>
    <Route path="/p3" Component={P3}/>
    <Route path="/p4" Component={P4}/>
    <Route path="/p5" Component={P5}/>
    <Route path="/p6" Component={P6}/>
    <Route path="/article1" Component={Article1}/>
    <Route path="/article2" Component={Article2}/>
    <Route path="/article3" Component={Article3}/>
    <Route path="/article4" Component={Article4}/>
    <Route path="/article5" Component={Article5}/>
    <Route path="/overview" Component={Overviewo}/>
    <Route path="/education" Component={Education}/>
    <Route path="/health" Component={Health}/>
    <Route path="/agriculture" Component={Agriculture}/>
    <Route path="/articles" Component={Articles}/>
    <Route path="/videos" Component={Videos}/>
    <Route path="/nletter" Component={Newsletter}/>
    <Route path="/newsl1" Component={Newsl1}/>
    <Route path="/newsl2" Component={Newsl2}/>
    <Route path="/newsl3" Component={Newsl3}/>
  </Routes>
  <Footer/>
  </>
  )
}

export default App;