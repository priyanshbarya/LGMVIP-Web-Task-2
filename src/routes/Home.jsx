import React from "react";
import NavBar from "../components/NavBar.jsx";
import HeroContent from "../components/HeroContent.jsx";
import "../styles/Home.css";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <div className="home-container">
      <NavBar />
      <div>
        <div className="home-heading">
          <p>Regarding Project</p>
        </div>
        <HeroContent />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
