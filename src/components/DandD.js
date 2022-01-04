import React, { useContext, useEffect } from "react";
import Navbar from "./Home/Nav";
import "./DandD.css";
import { Fade } from "react-reveal";


export default function DandD() {

  const images = [{'key': 0, 'image': require('../images/D_D/1.church.jpg')}, {'key': 1, 'image': require('../images/D_D/6.angelo.png')}, {'key': 2, 'image': require('../images/D_D/8.shieldoflove.png')}, {'key': 3, 'image': require('../images/D_D/7.panandbelle.png')}, {'key': 5, 'image': require('../images/D_D/17. lenga2.png')}, {'key': 6, 'image': require('../images/D_D/4,cutini.png')}, {'key': 7, 'image': require('../images/D_D/5.delina.png')}, {'key': 8, 'image': require('../images/D_D/12.sailorgoon.png')}, {'key': 9, 'image': require('../images/D_D/2.bat.png')}, {'key': 10, 'image': require('../images/D_D/16. deathfairy3.png')}, {'key': 11, 'image': require('../images/D_D/18. lenga.png')}, {'key': 12, 'image': require('../images/D_D/3.bat.png')}, {'key': 13, 'image': require('../images/D_D/13.beasts11.png')}, {'key': 14, 'image': require('../images/D_D/21.png')}, {'key': 15, 'image': require('../images/D_D/20. babylon.jpg')}, {'key': 16, 'image': require('../images/D_D/15.fairy.png')}, {'key': 17, 'image': require('../images/D_D/10.alchemicalwedding.jpg')}, {'key': 18, 'image': require('../images/D_D/14.inprayer2.png')}, {'key': 19, 'image': require('../images/D_D/19. beasts1.png')}, {'key': 20, 'image': require('../images/D_D/11.sisters2.png')}]

  return (
      <>
    <div className="D_D-container">
      <li className="D_D-image">
  
  {images.map((item) => (
    <Fade left duration={3000}>
      <img
        src={item.image}
        loading="lazy"
        className="D_D-image-item"
        key={item.key}
      />
      </Fade>
  ))}
</li>
    </div>
    </>
  );
}
