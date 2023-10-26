import React from 'react'
import Img1 from '../../assets/gimg/g1.jpg'
import Img2 from '../../assets/gimg/g2.jpg'
import Img3 from '../../assets/gimg/g3.jpg'
import Img4 from '../../assets/gimg/g4.jpg'
import Img5 from '../../assets/gimg/g5.jpg'
import Img6 from '../../assets/gimg/g6.jpg'
import Img7 from '../../assets/gimg/g7.jpg'
import Img8 from '../../assets/gimg/g8.jpg'
import Img9 from '../../assets/gimg/g9.jpg'
import Img10 from '../../assets/gimg/g10.jpg'
import Img11 from '../../assets/gimg/g11.jpg'
import Img12 from '../../assets/gimg/g12.jpg'
import Img13 from '../../assets/gimg/g13.jpg'
import Img14 from '../../assets/gimg/g14.jpg'
import Img15 from '../../assets/gimg/g15.jpg'
import Img16 from '../../assets/gimg/g16.jpg'
import Img17 from '../../assets/gimg/g17.jpg'
import Img18 from '../../assets/gimg/g18.jpg'
import Img19 from '../../assets/gimg/g19.jpg'
import Img20 from '../../assets/gimg/g20.jpg'
import Img21 from '../../assets/enhance.jpg'
import Img22 from '../../assets/sportseminar.jpg'
import Img23 from '../../assets/academicpartnership.png'
import Img24 from '../../assets/capacitybuilding.png'
import Img25 from '../../assets/knowledgecenter.png'
import Img26 from '../../assets/telantsupport.png'
import Img27 from '../../assets/technical.png'
import "./g.css"

const Gallery = () => {

  const data=[{id:1,src:Img1},{id:2,src:Img2},{id:3,src:Img3},{id:4,src:Img4},{id:5,src:Img5},{id:6,src:Img6},{id:7,src:Img7},{id:8,src:Img8},{id:9,src:Img9},{id:10,src:Img10},{id:11,src:Img11},{id:12,src:Img12},{id:13,src:Img13},{id:14,src:Img14},{id:15,src:Img15},{id:16,src:Img16},{id:17,src:Img17},{id:18,src:Img18},{id:19,src:Img19},{id:20,src:Img20},{id:21,src:Img21},{id:22,src:Img22},{id:23,src:Img23},{id:24,src:Img24},{id:25,src:Img25},{id:26,src:Img26},{id:27,src:Img27}]

  // const [styl,setstyl] = useState(false);
  // const [curimgsrc,setcurimgsrc] =useState('');
  // const fullimg = (imgsrc)=>{
  //   setcurimgsrc(imgsrc);
  //   setstyl(true);
  // }


  return (<>
  {/* <div className={styl? 'img open' :'img'}>
    <img src={curimgsrc} alt="" />
  </div> */}
  <div className="gallery">
    {
      data.map((item,index)=>{
        return(
          <div className="pics" key={index}>
            <img src={item.src} style={{width: '100%'}}  alt="img"  />{/*onClick={()=> fullimg(item.src)}*/}
          </div>
        )
      })
    }
  </div>
  </>
  )
}

export default Gallery