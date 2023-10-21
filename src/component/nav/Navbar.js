import React, { useState } from 'react'
import './nav.css'
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
const Navbar = () => {
      


  return (<>
  <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbarDropdownMenuLink">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" ><img src={logo} height="60px" width={190}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse space" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link active" to="/">Home</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About us
          </a>
          <ul className="dropdown-menu dropdowncustom" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="/overviewa">Overview</Link></li>
            <li><Link className="dropdown-item" to="/objective">Objective</Link></li>
            <li><Link className="dropdown-item" to="/vision">Vision</Link></li>
            <li><Link className="dropdown-item" to="/mission">Mission</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Our work
          </a>
          <ul className="dropdown-menu dropdowncustom" aria-labelledby="navbarDropdownMenuLink">
          <li><Link className="dropdown-item" to="/overview">Overview</Link></li>
          <li><Link className="dropdown-item" to="/education">Education</Link></li>
          <li><Link className="dropdown-item" to="/health">Health</Link></li>
          <li><Link className="dropdown-item" to="/agriculture">Agriculture</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Resources
          </a>
          <ul className="dropdown-menu dropdowncustom" aria-labelledby="navbarDropdownMenuLink">
          <li><Link className="dropdown-item" to="/articles">Articles</Link></li>
          <li><Link className="dropdown-item" to="/videos">Videos</Link></li>
          <li><Link className="dropdown-item" to="/nletter">NewsLetter</Link></li>
            <li><a className="dropdown-item" href="#">Our Work Story</a></li>
            <li><a className="dropdown-item" href="#">Capacity Building</a></li>
            <li><a className="dropdown-item" href="#">Downloads</a></li>
          </ul>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="/gallery">Gallery</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Centers
          </a>
          <ul className="dropdown-menu dropdowncustom" aria-labelledby="navbarDropdownMenuLink">
          <li><Link className="dropdown-item" to="/bisauli">Bisauli</Link></li>
            <li><Link className="dropdown-item" to="/bilsi">Bilsi</Link></li>
            <li><Link className="dropdown-item" to="/babrala">Babrala</Link></li>
            <li><Link className="dropdown-item" to="/ughaiti">Ughaiti</Link></li>
            <li><Link className="dropdown-item" to="/islamnagar">Islamnagar</Link></li>
            <li><Link className="dropdown-item" to="/behjoi">Behjoi</Link></li>
            <li><Link className="dropdown-item" to="/chandausi">Chandausi</Link></li>
            <li><Link className="dropdown-item" to="/ujhani">Ujhani</Link></li>
            <li><Link className="dropdown-item" to="/gawan">Gawan</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Exams
          </a>
          <ul className="dropdown-menu dropdowncustom" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="/upsc">UPSC</Link></li>
            <li><Link className="dropdown-item" to="/ssc">SSC</Link></li>
            <li><Link className="dropdown-item" to="/ctet">CTET</Link></li>
            <li><Link className="dropdown-item" to="/banking">BANKING</Link></li>
            <li><Link className="dropdown-item" to="/railways">RAILWAYS</Link></li>
            <li><Link className="dropdown-item" to="/ndacds">NDA/CDS</Link></li>
            <li><Link className="dropdown-item" to="/navodaya">NAVODAYA ENTRANCE</Link></li>
            <li><Link className="dropdown-item" to="/sainik">SAINIK SCHOOL</Link></li>
            <li><Link className="dropdown-item" to="/english">ENGLISH SPEAKING</Link></li>
            <li><Link className="dropdown-item" to="/computer">COMPUTER COURSE</Link></li>
            
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          More
          </a>
          <ul className="dropdown-menu dropdowncustom" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Our Blogs</a></li>
            <li><a className="dropdown-item" href="#">Join of Giving</a></li>
            <li><a className="dropdown-item" href="#">Scholarships</a></li>
            <li><a className="dropdown-item" href="#">Govt. Scheme</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Contact us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </>
  )
}

export default Navbar