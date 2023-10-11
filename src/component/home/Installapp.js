import React from 'react'
import playstore from '../../assets/playstore.png'
import andriod from '../../assets/android.png'
import { NavLink } from 'react-router-dom'

const Installapp = () => {
  return (<>
     <div className="installapp">
          <div className="appheading">
            <h2>KINDLY INSTALL OUR APPS</h2>
          </div>
          <div className="appcards">
            <div className="appcard1">
            <a href=""><img src={playstore} alt="playstoreicon" /></a>
              <h3>P4U Academy</h3>
              <ul>
                <li>It can be used as an essential app for any school/college/tuition/academies.</li>
                <li>It is A-Z solution for school/college/tuition/academies.</li>
                <li>This app has three types of flavours, one for institute Principal/Admin, second for institute Teacher and other for insititute Students and their parents.</li>
                <li>Users can do number of things to make learning better beside taking live classes, attendance and sending assignments.</li>
              </ul>
            </div>
            <div className="appcard2">
            <a href=""><img src={andriod} alt="andriodicon" /></a>
              <h3>Parvarish4U</h3>
              <ul>
                <li>It has complete information of various programs run by ParvarishForYou</li>
                <li>Under knowledge center, it has list of books available at different centers, ebooks, notes etc</li>
                <li>Academic parternship program details, Talent support program details ,Technical partnership program details Internship program details, Various articles by our expert team</li>
                <li>Good videos by our expert team,Image gallery, donors list and Donate us section to support our good work.</li>
              </ul>
            </div>
          </div>
        </div>
  </>
  )
}

export default Installapp