import React, {useEffect} from "react";
import Navbar from "./Home/Nav";
import "./Tattoo.css";
import Zoom from 'react-reveal/Zoom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { TattooImage } from "../res/res";

export default function Tattoo() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
      <>
    <div className="Tattoo-container">
      <li className="Tattoo-image">
  
  {TattooImage.map((item) => (
    <Zoom duration={3000}>
      <LazyLoadImage
        src={item.image}
        loading="lazy"
        className="Tattoo-image-item"
        key={item.key}
        onContextMenu="return false;"
      />
      </Zoom>
  ))}
</li>
    </div>
    </>
  );
}
