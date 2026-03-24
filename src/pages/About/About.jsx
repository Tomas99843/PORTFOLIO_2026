
import Card from "react-bootstrap/Card";
import React from "react";
import "./About.css";
 
function About() {
  return (
    <section id="about_me">
      {/* --- ABOUT --- */}
      <div className="container_top">
        <h2 className="title_about">About Me</h2>
        <p className="text_about_one">
          My name is <span>Tomas Cascone</span>, I am 27 years old and a Frontend
          developer based in Mar del Plata, Buenos Aires, Argentina. I am
          passionate about the world of development and began my education a few
          years ago.
        </p>
        <p className="text_about_two">
          I enjoy designing and developing responsive, functional web
          applications. As an IT technician, I am strengthening my skills in
          full-stack development to create modern digital solutions.
        </p>
      </div>
 
      {/* --- WHAT I DO --- */}
      <div className="container_middle">
        <h3 className="title_do">What I do?</h3>
 
        <p className="text_do_1">
          <span>Implementation of designs.</span>
          Transform ideas into functional web pages with modern and responsive
          designs.
        </p>
 
        <p className="text_do_2">
          <span>Performance optimization.</span>
          I enhance and optimize web applications by improving resource
          efficiency.
        </p>
 
        <p className="text_do_3">
          <span>Development of user interface.</span>
          I create intuitive and adaptable interfaces for various devices and
          screen sizes.
        </p>
 
        <p className="text_do_4">
          <span>Backend development.</span>
          I build robust solutions to manage data and server-side
          functionalities.
        </p>
      </div>
 
      {/* --- MY STACKS --- */}
      <div className="container_bottom">
        <h3 className="title_stacks">My Stacks</h3>
 
        <div className="skills-section">
          <div>
            <h4>Frontend</h4>
            <ul className="skills-list">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React JS</li>
              <li>SASS</li>
              <li>Bootstrap</li>
            </ul>
          </div>
 
          <div>
            <h4>Backend</h4>
            <ul className="skills-list">
              <li>NodeJS</li>
              <li>ExpressJS</li>
              <li>MongoDB</li>
            </ul>
          </div>
 
          <div>
            <h4>Others</h4>
            <ul className="skills-list">
              <li>GIT</li>
              <li>GitHub</li>
              <li>Postman</li>
              <li>Vercel</li>
              <li>Firebase</li>
            </ul>
          </div>
        </div>
      </div>
 
      {/* --- CERTIFICATIONS --- */}
      <div className="container_certifications">
        <div className="container my-5 p_container">
          <h2 className="title_certifications mb-4">Certifications</h2>
 
          {/* --- FIRST ROW (4 ELEMENTS) --- */}
          <div className="row justify-content-center mb-4">
            <div className="col-xl-3 col-lg-3 col-md-6 mb-4">
              <Card className="custom-card">
                <Card.Img
                  variant="top"
                  src="/images/titulo_secundario.webp"
                  className="custom-card-img"
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="custom-card-title">IT Technical</Card.Title>
                </Card.Body>
              </Card>
            </div>
 
            <div className="col-xl-3 col-lg-3 col-md-6 mb-4">
              <Card className="custom-card">
                <Card.Img
                  variant="top"
                  src="/images/1.CERTIFICADODESARROLLOWEB.webp"
                  className="custom-card-img"
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="custom-card-title">Web Development</Card.Title>
                </Card.Body>
              </Card>
            </div>
 
            <div className="col-xl-3 col-lg-3 col-md-6 mb-4">
              <Card className="custom-card">
                <Card.Img
                  variant="top"
                  src="/images/2.CERTIFICADOJAVASCRIPT.webp"
                  className="custom-card-img"
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="custom-card-title">JavaScript</Card.Title>
                </Card.Body>
              </Card>
            </div>
 
            <div className="col-xl-3 col-lg-3 col-md-6 mb-4">
              <Card className="custom-card">
                <Card.Img
                  variant="top"
                  src="/images/3.CERTIFICADOREACTJS.webp"
                  className="custom-card-img"
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="custom-card-title">React JS</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </div> {/* ✅ Cierre FIRST ROW */}
 
          {/* --- SECOND ROW (3 ELEMENTS CENTERED) --- */}
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-3 col-md-6 mb-4">
              <Card className="custom-card">
                <Card.Img
                  variant="top"
                  src="/images/4.CERTIFIADOBACKEND1.webp"
                  className="custom-card-img"
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="custom-card-title">Backend I</Card.Title>
                </Card.Body>
              </Card>
            </div>
 
            <div className="col-xl-3 col-lg-3 col-md-6 mb-4">
              <Card className="custom-card">
                <Card.Img
                  variant="top"
                  src="/images/5.CERTIFICADOBACKEND2.webp"
                  className="custom-card-img"
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="custom-card-title">Backend II</Card.Title>
                </Card.Body>
              </Card>
            </div>
 
            <div className="col-xl-3 col-lg-3 col-md-6 mb-4">
              <Card className="custom-card">
                <Card.Img
                  variant="top"
                  src="/images/6.CERTIFICADOBACKEND3.webp"
                  className="custom-card-img"
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="custom-card-title">Backend III</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </div> {/* ✅ Cierre SECOND ROW */}
 
        </div> {/* ✅ Cierre .container */}
      </div> {/* ✅ Cierre .container_certifications */}
 
    </section>
  );
}
 
export default About;