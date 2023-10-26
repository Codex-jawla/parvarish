import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Videos = () => {
  return (
    <>
      <div className="heading">
        <h2>Videos</h2>
      </div>
       <div className="siz">
      <div class="ratio ratio-16x9">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/g0ksoZ-WC1Q?si=rO0O5z7or0vq2pzH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      </div> 
    </>
  );
};

export default Videos;