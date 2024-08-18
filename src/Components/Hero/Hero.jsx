import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aliquam
        omnis reprehenderit soluta tempora minus asperiores facere nesciunt?
        Veniam eveniet nostrum iste delectus tenetur ea ipsam aut et cumque
        velit.
      </p>
      <button className="btn btn-light exp_btn">
        Explore more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000000"
        >
          <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
        </svg>
      </button>
    </div>
  );
};

export default Hero;
