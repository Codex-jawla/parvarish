import React from 'react'
import imgv from '../../assets/vision1.jpg'

const Vission = () => {
  return (<>
    <div className='heading'><h2>Vision</h2></div>
    <div className="content1">
      <div className="content1txt">
        <ul>
          <li> Team to impart behavioural changes in society by the way of education.</li>
          <li> To develop an ecosystem of mutualism instead of competetion for sustainable prosperity.</li>
        </ul>
</div>
      <div className="content1img">
        <img src={imgv} alt="img" />
      </div>
    </div>

  </>
  )
}

export default Vission