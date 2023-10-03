import React from 'react'
import "./sliderimg.css"
import {PiPhoneCallFill} from 'react-icons/pi'
import {MdEmail} from 'react-icons/md'
import {IoIosTime} from 'react-icons/io'

const Ourcontact = () => {
  return (<>
    
    <div className="maindivc">
        <div className="contactHeading">
            <h1>Our Contact</h1>
        </div>
        <div className="contactbox">
            <div className="contactbox1">
                <div className="ctopic">
                    <h3>All general queries:</h3>
                    <p>Please contact or Whatsapp on our mobile nos</p>
                </div>
            </div>
            <div className="contactbox1">
                <div className="ctopic">
                    <h3>Phone or Whatsapp:</h3>
                    <p><PiPhoneCallFill/> +91-9719821103</p>
                    <p><PiPhoneCallFill/> +91-9720821103</p>
                </div>
            </div>
            <div className="contactbox1">
                <div className="ctopic">
                    <h3>Email Us</h3>
                    <p><MdEmail/> parvarishforyou@gmail.com</p>
                </div>
          </div>
            <div className="contactbox1">
                <div className="ctopic">
                    <h3>Working Hours:</h3>
                    <p><IoIosTime/> Our working Hours are 9 am to 5 pm</p>
                </div>
            </div>
            </div>
        </div>
  </>
  )
}

export default Ourcontact