import React from "react";
import "./contact.css";
import { AiFillInstagram, AiFillMail } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="Contact-container">
      <a href="https://www.instagram.com/softshellhardcore/" target="_blank">
        <AiFillInstagram
          size={40}
          style={{ margin: "20px", color: "rgb(239, 129, 159)" }}
        />
      </a>
      <p className="Contact-email">antiniacreation@gmail.com</p>
      <a href="mailto:antiniacreation@gmail.com">
        <AiFillMail
          size={40}
          style={{ margin: "20px", color: "rgb(239, 129, 159)" }}
        />
      </a>
    </div>
  );
}
