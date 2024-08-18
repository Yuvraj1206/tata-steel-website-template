import React from "react";
import "./Gallery.css";
import img from "../../assets/slide1.jpeg";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="title">
        <h1>Gallery</h1>
        <h4>All Realated Photos here</h4>
      </div>
      <div className="images">
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
