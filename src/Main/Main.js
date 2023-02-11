import React from "react";
import image from "../Main/image.jpg";
import "./Main.css";

export default function Main() {
  return (
    <div className="main">
      <img src={image} alt="img" className="main_img"></img>
    </div>
  );
}
