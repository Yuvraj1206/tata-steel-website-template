import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import SlideShow from "./Components/SlideShow/SlideShow";
import About from "./Components/About/About";
import Gallery from "./Components/Gallery/Gallery";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <div className="bgDesign">
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
      <SlideShow></SlideShow>
      <About></About>
      <Gallery></Gallery>
      <Contact></Contact>
      <Footer />
    </div>
  );
};

export default App;
