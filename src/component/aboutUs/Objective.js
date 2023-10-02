import React from 'react'
import imga from '../../assets/objective1.jpg'

const Objective = () => {
  return (<>
    <div className='heading'><h2>Objective</h2></div>
    <div className="content1">
      <div className="content1txt">
        <p>We are here to work for different sector like education, health, agriculture, organic farming, counselling, behavioural change (Mentioned by P.M. Modi in rajya-sabha on 08 feb 2018), social awareness, to full-fill the gap between government facilities and ground level benefits etc.</p>
</div>
      <div className="content1img">
        <img src={imga} alt="img" />
      </div>
    </div>
  </>
  )
}

export default Objective