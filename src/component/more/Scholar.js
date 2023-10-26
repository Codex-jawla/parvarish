import React from 'react'
import p1 from '../../assets/scholarp.pdf'

const Scholar = () => {
  return (<>
    <div className="heading">
        <h2>ScholarShips Schemes</h2>
      </div>
      <ol><li>
      <div className="onlytxt">
        <p>A HANDBOOK ON  SCHOLARSHIPS AVAILABLE FOR THE STUDENTS OF ARTS AND SCIENCE COLLEGES..
            <a href={p1} download className="btn">
              Download
            </a></p>
      </div>
      </li></ol>
      
  </>
  )
}

export default Scholar