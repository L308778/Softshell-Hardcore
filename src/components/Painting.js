import React, {useEffect} from "react";
import Navbar from "./Home/Nav";
import "./Painting.css";
import Flip from 'react-reveal/Flip';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { PaintingImage } from "../res/res";

export default function Paintings() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <div className="Tattoo-container">
      <li className="Tattoo-image">

  {PaintingImage.map((item) => (
    <Flip duration={3000}>
      <LazyLoadImage
        src={item.image}
        loading="lazy"
        className="Tattoo-image-item"
        key={item.key}
        onContextMenu="return false;"
      />
      </Flip>
  ))}
  </li>
    </div>
    </>
  );
}