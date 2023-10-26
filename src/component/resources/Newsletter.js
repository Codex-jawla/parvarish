import React from 'react'
import { Link } from 'react-router-dom'
import { newsld } from './rarticled'

const Newsletter = () => {
    const Scrollup = () => {
        window.scrollTo({ top: 0 });
      };
  return (
    <>
      <div className="heading">
        <h2>News Letter</h2>
      </div>
      <div className="articleboxNewss">
      {newsld.map((value) => {
        return (
          <div className="articlebox1">
            <div className="topica">
              {value.content}
            </div>
            <div className="btnaData">
              <Link
                onClick={Scrollup}
                className="nav-link active "
                to={value.btnlink}
              >
                Read More
              </Link>
            </div>
          </div>
        );
      })}
      </div>
    </>
  )
}

export default Newsletter