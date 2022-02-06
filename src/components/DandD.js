import React, { useContext, useEffect } from "react";
import Navbar from "./Home/Nav";
import "./DandD.css";
import { Fade } from "react-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { DandDImage } from "../res/res";


export default function DandD() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
      <>
    <div className="D_D-container">
      <li className="D_D-image">
  
  {DandDImage.map((item) => (
    <Fade left duration={3000}>
      <LazyLoadImage
        src={item.image}
        loading="lazy"
        className="D_D-image-item"
        key={item.key}
        onContextMenu="return false;"
      />
      </Fade>
  ))}
</li>
    </div>
    </>
  );
}
