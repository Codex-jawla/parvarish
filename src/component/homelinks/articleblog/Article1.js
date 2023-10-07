import React from 'react'
import Bookpic from "../../../assets/article1.jpg"

const Article1 = () => {
  return (<>
    <div className='heading'><h2>बातें जो विद्यार्थियों को कभी नहीं सिखाई जाती</h2></div>
    <div className="onlyimg">
      <img src={Bookpic} alt="img" />
    </div>
</>
  )
}

export default Article1