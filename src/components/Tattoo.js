import React, {useEffect} from "react";
import Navbar from "./Home/Nav";
import "./Tattoo.css";
import Zoom from 'react-reveal/Zoom';

export default function Tattoo() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const images = [{'key': 0, 'image': require('../images/Tattoo/1. nun.png')}, {'key': 2, 'image': require('../images/Tattoo/13. pinkprotection.jpg')}, {'key': 3, 'image': require('../images/Tattoo/2. batfam.jpg')}, {'key': 4, 'image': require('../images/Tattoo/3. dragons.png')}, {'key': 5, 'image': require('../images/Tattoo/7.careee.png')}, {'key': 6, 'image': require('../images/Tattoo/8.mercy.website.jpg')}, {'key': 7, 'image': require('../images/Tattoo/11. alchemicalwed.png')}, {'key': 8, 'image': require('../images/Tattoo/5.deathtattoo.png')}, {'key': 9, 'image': require('../images/Tattoo/17. papinawebsite.jpg')}, {'key': 10, 'image': require('../images/Tattoo/10.baphomet.png')}, {'key': 11, 'image': require('../images/Tattoo/6.inthenameoflove.png')}, {'key': 12, 'image': require('../images/Tattoo/19. hellgirls.png')}, {'key': 13, 'image': require('../images/Tattoo/9.warrobots.png')}, {'key': 14, 'image': require('../images/Tattoo/22. unholy.png')}, {'key': 15, 'image': require('../images/Tattoo/21. deathfairy.jpg')}, {'key': 16, 'image': require('../images/Tattoo/15. temple.png')}, {'key': 17, 'image': require('../images/Tattoo/20. k1tattoowebsite.jpg')}, {'key': 18, 'image': require('../images/Tattoo/12.fist.jpg')}, {'key': 19, 'image': require('../images/Tattoo/18. care1website.jpg')}, {'key': 20, 'image': require('../images/Tattoo/14. blessingwebsite.jpg')}, {'key': 21, 'image': require('../images/Tattoo/4.fugor1.jpg')}, {'key': 22, 'image': require('../images/Tattoo/23. weapon.png')}, {'key': 23, 'image': require('../images/Tattoo/16.fist4.png')}]

  return (
      <>
    <div className="Tattoo-container">
      <li className="Tattoo-image">
  
  {images.map((item) => (
    <Zoom duration={3000}>
      <img
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
