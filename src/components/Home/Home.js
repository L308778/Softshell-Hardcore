import React, { useEffect, useContext } from "react";

import Navbar from "./Nav";
import HomeImg from "../../images/delina2.png";
import "./Home.css";
import Contact from "./contact";

export default function Home() {
  const SCREEN_WIDTH = window.innerWidth;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          overflowX: "hidden",
        }}
      >
        <div className="Home-img-container">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front" style={{ alignSelf: "center" }}>
                <img src={HomeImg} className="Home-img" />
              </div>
              <div className="flip-card-back" style={{ alignSelf: "center" }}>
                <header className="flip-card-back-header">About</header>
                <p className="flip-card-back-text">
                  “the heart core is hardcore” is the philosophy after which the
                  designer and multi-media artist anti nia is creating. The
                  brand softshell hardcore is meant for individuals that are
                  serving fantasy, sisterhood, and beauty."
                </p>

                <p className="flip-card-back-text-since">Since 1997</p>
              </div>
            </div>
          </div>
        </div>
        <Contact />
      </div>
    </>
  );
}
