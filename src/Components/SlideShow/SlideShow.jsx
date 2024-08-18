import React from "react";
import "./SlideShow.css";
import img1 from "../../assets/slide1.jpeg";
import img2 from "../../assets/slide2.jpeg";
import img3 from "../../assets/slide3.jpeg";
import Carousel from "react-bootstrap/Carousel";

const SlideShow = () => {
  return (
    <div className="slideShow">
      <Carousel data-bs-theme="dark" style={{ width: "80%" }}>
        <Carousel.Item>
          <img className="d-block" src={img1} alt="First slide" />
          <Carousel.Caption
            style={{
              color: "white",
              backgroundColor: " rgba(0, 0, 0, 0.597)",
              borderRadius: "10px",
            }}
          >
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={img2} alt="Second slide" />
          <Carousel.Caption
            style={{
              color: "white",
              backgroundColor: " rgba(0, 0, 0, 0.597)",
              borderRadius: "10px",
            }}
          >
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={img3} alt="Third slide" />
          <Carousel.Caption
            style={{
              color: "white",
              backgroundColor: " rgba(0, 0, 0, 0.597)",
              borderRadius: "10px",
            }}
          >
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default SlideShow;
