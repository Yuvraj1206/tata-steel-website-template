import React from "react";
import "./About.css";
import img from "../../assets/about.webp";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={img} alt="about-img" />
      </div>
      <div className="about-right">
        <h2>About Tata Steel</h2>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dicta nam
          quasi perferendis doloribus soluta doloremque suscipit? Sed, ullam
          ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          quasi, doloribus culpa tempora delectus sapiente eligendi? Magnam sint
          nemo similique?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          eaque mollitia deserunt eveniet consequatur asperiores maxime tempora,
          voluptatum dolores doloremque voluptates rem amet laborum dolorum ut
          quae distinctio eos inventore.
        </p>
      </div>
    </div>
  );
};

export default About;
