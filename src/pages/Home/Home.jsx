import React from "react";
import my_picture from "/images/my_picture.webp";
import "./Home.css";

function Home() {
  return (
    
      <section id="container_home">
        <div className="container_left">
          <h2 className="description_name">Hello! I’m Tomas Cascone</h2>
          <h1 className="description_job">  Full Stack <br /> Developer.<br /></h1>
          <h3 className="description_location">Based in Mar del Plata, Argentina.</h3>
        </div>
        <div className="container_right">
          <img src={my_picture} alt="MiFoto" className="description_picture"/>
        </div>      
      
    </section>
  );
}
export default Home;
