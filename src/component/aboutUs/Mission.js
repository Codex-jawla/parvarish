import React from 'react'
import imgv from '../../assets/mission1.jpg'

const mission = () => {
  return (<>
    <div className='heading'><h2>Mission</h2></div>
    <div className="content1">
      <div className="content1txt">
        <p>To fulfill the gap between rural and urban population with various mechanism and also to reflect them in government census or survey.</p>
</div>
      <div className="content1img">
        <img src={imgv} alt="img" />
      </div>
    </div>
  </>
  )
}

export default mission