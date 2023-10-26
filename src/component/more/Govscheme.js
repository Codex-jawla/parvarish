import React from "react";
import { Link } from "react-router-dom";

const Govscheme = () => {
  const Scrollup = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <>
      <div className="heading">
        <h2>Government Schemes</h2>
      </div>
      <ol>
        <li>
          <div className="onlytxt">
            <p>Free Education Scheme: Jawahar Navodaya Vidyalaya -</p>
            <Link className="dropdown-item" to="/navodaya">
              ...read more
            </Link>
          </div>
        </li>
        <li>
          <div className="onlytxt">
            <p>Free education scheme: Vidyagyan School -</p>
            <Link onClick={Scrollup} className="nav-link active " to="/news7">
              Read More
            </Link>
          </div>
        </li>
      </ol>
    </>
  );
};

export default Govscheme;
