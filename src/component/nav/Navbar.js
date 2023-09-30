import React, { useState } from 'react'
import './nav.css'
import logo from "../../assets/logo.png"
import { NavLink } from 'react-router-dom'
const Navbar = () => {
      


  return (<>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" ><img src={logo} height="60px" width={190}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse space" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
        <NavLink className="nav-link active" to="/">Home</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About us
          </a>
          <ul className="dropdown-menu dropdowncustom" aria-labelledby="navbarDropdownMenuLink">
            <li><NavLink className="dropdown-item" to="/overviewa">Overview</NavLink></li>
            <li><NavLink className="dropdown-item" to="/objective">Objective</NavLink></li>
            <li><NavLink className="dropdown-item" to="/vision">Vision</NavLink></li>
            <li><NavLink className="dropdown-item" to="/mission">Mission</NavLink></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Our work
          </a>
          <ul className="dropdown-menu dropdowncustom" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Overview</a></li>
            <li><a className="dropdown-item" href="#">Education</a></li>
            <li><a className="dropdown-item" href="#">Health</a></li>
            <li><a className="dropdown-item" href="#">Agriculture</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Resources
          </a>
          <ul className="dropdown-menu dropdowncustom" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Article</a></li>
            <li><a className="dropdown-item" href="#">Videos</a></li>
            <li><a className="dropdown-item" href="#">Newsletter</a></li>
            <li><a className="dropdown-item" href="#">Our Work Story</a></li>
            <li><a className="dropdown-item" href="#">Capacity Building</a></li>
            <li><a className="dropdown-item" href="#">Downloads</a></li>
          </ul>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link active" to="/gallery">Gallery</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Centers
          </a>
          <ul className="dropdown-menu dropdowncustom" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Delhi</a></li>
            <li><a className="dropdown-item" href="#">Merrut</a></li>
            <li><a className="dropdown-item" href="#">Gaziabad</a></li>
            <li><a className="dropdown-item" href="#">Shamli</a></li>
            <li><a className="dropdown-item" href="#">Baghpat</a></li>
            <li><a className="dropdown-item" href="#">Mujaffar Nagar</a></li>
            <li><a className="dropdown-item" href="#">Sharanpur</a></li>
            <li><a className="dropdown-item" href="#">Panipat</a></li>
            <li><a className="dropdown-item" href="#">Sonipat</a></li>
            <li><a className="dropdown-item" href="#">Karnal</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Exams
          </a>
          <ul className="dropdown-menu dropdowncustom" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">UPSC</a></li>
            <li><a className="dropdown-item" href="#">SSC</a></li>
            <li><a className="dropdown-item" href="#">CTET</a></li>
            <li><a className="dropdown-item" href="#">KVS</a></li>
            <li><a className="dropdown-item" href="#">Banking</a></li>
            <li><a className="dropdown-item" href="#">NDA/NA</a></li>
            <li><a className="dropdown-item" href="#">Railways</a></li>
            <li><a className="dropdown-item" href="#">Sainik School</a></li>
            <li><a className="dropdown-item" href="#">DSSSB</a></li>
            <li><a className="dropdown-item" href="#">ILETS</a></li>
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