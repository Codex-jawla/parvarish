import React from 'react'
import logof from "../../assets/logof.png"
import { ImTwitter } from 'react-icons/im'
import {BiLogoFacebook} from 'react-icons/bi'
import {AiFillYoutube} from 'react-icons/ai'
import {DiAndroid} from 'react-icons/di'
import { Link } from 'react-router-dom'
import "./footer.css"

const Footer = () => {
  const year =new Date().getFullYear()
  return (<>
  <div class="container bg-black ms-0">
  <footer class="py-5">
    <div class="row ">
    
    <div class="col-2 ">
          <img src={logof} height="60px" width={180} />
    </div>

    <div class="col-3  offset-1">
          <h5>Links</h5>
          <ul class="nav flex-column">
          <li class="nav-item mb-2 "><a href="#" class="nav-link p-0 text-muted clr">Our Work</a></li>
          <li class="nav-item mb-2 "><a href="#" class="nav-link p-0 text-muted clr">Resources</a></li>
          <li class="nav-item mb-2 "><a href="#" class="nav-link p-0 text-muted clr">Exams</a></li>
          <li class="nav-item mb-2 "><a href="#" class="nav-link p-0 text-muted clr">Gallery</a></li>
          <li class="nav-item mb-2 "><a href="#" class="nav-link p-0 text-muted clr">Joy of giving</a></li>
          <li class="nav-item mb-2 "><a href="#" class="nav-link p-0 text-muted clr">Join Us</a></li>
          <li class="nav-item mb-2 "><a href="#" class="nav-link p-0 text-muted clr">Our blog</a></li>


        </ul>
        
      </div>

      <div class="col-3">
        <h5 class=" px-11" >Capacity Building Centers</h5>
        <ul class="nav flex-column">
            <li><Link className="nav-link p-1 text-muted h6" to="/bisauli">Bisauli</Link></li>
            <li><Link className="nav-link p-1 text-muted h6" to="/bilsi">Bilsi</Link></li>
            <li><Link className="nav-link p-1 text-muted h6" to="/babrala">Babrala</Link></li>
            <li><Link className="nav-link p-1 text-muted h6" to="/ughaiti">Ughaiti</Link></li>
            <li><Link className="nav-link p-1 text-muted h6" to="/islamnagar">Islamnagar</Link></li>
            <li><Link className="nav-link p-1 text-muted h6" to="/behjoi">Behjoi</Link></li>
            <li><Link className="nav-link p-1 text-muted h6" to="/chandausi">Chandausi</Link></li>
            <li><Link className="nav-link p-1 text-muted h6" to="/ujhani">Ujhani</Link></li>
            <li><Link className="nav-link p-1 text-muted h6" to="/gawan">Gawan</Link></li>
        </ul>
      </div>
    </div>

    <div class="d-flex justify-content-between py-4 my-4 border-top">
      <p>© 2018-{year} www.parvarishforyou.org .  All Rights Reserved.</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3">
            <a href="https://twitter.com/parvarishforyou"><ImTwitter className="contact_option_icon" /></a>
        </li>
        <li class="ms-3">
         <a href="https://www.facebook.com/parvarishforyou/"><BiLogoFacebook className="contact_option_icon" /></a>
         </li>
         <li class="ms-3">
         <a href="https://www.youtube.com/channel/UCgcTtJxtQ3ZVLQ3iDdpACEQ/featured?view_as=subscriber"><AiFillYoutube className="contact_option_icon" /></a>
         </li>
         <li class="ms-3">
         <a href="https://play.google.com/store/apps/details?id=com.p4u.parvarish&hl=en"><DiAndroid className="contact_option_icon" /></a>
         </li>
      </ul>
    </div>
  </footer>
</div>
  </>)
}

export default Footer