import React, {useEffect} from "react";
import Navbar from "./Home/Nav";
import "./Painting.css";
import Flip from 'react-reveal/Flip';

export default function Paintings() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const images = [{'key': 0, 'image': require('../images/Paintings/1.postkids.jpg')}, {'key': 1, 'image': require('../images/Paintings/11. motherandi.jpg')}, {'key': 2, 'image': require('../images/Paintings/12..JPG')}, {'key': 3, 'image': require('../images/Paintings/2.care.png')}, {'key': 4, 'image': require('../images/Paintings/3.care.png')}, {'key': 5, 'image': require('../images/Paintings/8.natura.jpg')}, {'key': 6, 'image': require('../images/Paintings/10.machie.jpg')}, {'key': 7, 'image': require('../images/Paintings/14. hermaphrodite.jpg')}, {'key': 8, 'image': require('../images/Paintings/6.burn.JPG')}, {'key': 9, 'image': require('../images/Paintings/9.5 reuinion.jpg')}, {'key': 10, 'image': require('../images/Paintings/13. luci.JPG')}, {'key': 11, 'image': require('../images/Paintings/4.eat.png')}, {'key': 12, 'image': require('../images/Paintings/7.marriage.png')}, {'key': 13, 'image': require('../images/Paintings/5.burn.jpg')}, {'key': 14, 'image': require('../images/Paintings/9.hug.jpg')}]

  return (
    <>
    <div className="Tattoo-container">
      <li className="Tattoo-image">

  {images.map((item) => (
    <Flip duration={3000}>
      <img
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