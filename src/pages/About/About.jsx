import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import "./About.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const certifications = [
  { src: "/images/titulo_secundario.webp", title: "IT Technical" },
  { src: "/images/1.CERTIFICADODESARROLLOWEB.webp", title: "Web Development" },
  { src: "/images/2.CERTIFICADOJAVASCRIPT.webp", title: "JavaScript" },
  { src: "/images/3.CERTIFICADOREACTJS.webp", title: "React JS" },
  { src: "/images/4.CERTIFIADOBACKEND1.webp", title: "Backend I" },
  { src: "/images/5.CERTIFICADOBACKEND2.webp", title: "Backend II" },
  { src: "/images/6.CERTIFICADOBACKEND3.webp", title: "Backend III" },
];

function About() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="about_me">
      {/* --- LIGHTBOX --- */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.img
              src={selectedCert.src}
              alt={selectedCert.title}
              className="lightbox-image"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- ABOUT --- */}
      <motion.div
        className="container_top"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        variants={fadeUp}
      >
        <h2 className="title_about">About Me</h2>
        <p className="text_about_one">
          My name is <span>Tomas Cascone</span>, a Full Stack Developer based in
          Mar del Plata, Buenos Aires, Argentina. I am passionate about web
          development and have been building my skills across both frontend and
          backend.
        </p>
        <p className="text_about_two">
          I enjoy designing and developing responsive, functional web
          applications — from crafting clean interfaces with React to building
          APIs and servers with Node.js and Express. As an IT technician with a
          Full Stack background, I focus on creating modern, end-to-end digital
          solutions.
        </p>
      </motion.div>

      {/* --- WHAT I DO --- */}
      <motion.div
        className="container_middle"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        variants={fadeUp}
      >
        <h3 className="title_do">What I do?</h3>
        <p className="text_do_1">
          <span>Implementation of designs.</span> Transform ideas into
          functional web pages with modern and responsive designs.
        </p>
        <p className="text_do_2">
          <span>Performance optimization.</span> I enhance and optimize web
          applications by improving resource efficiency.
        </p>
        <p className="text_do_3">
          <span>Development of user interface.</span> I create intuitive and
          adaptable interfaces for various devices and screen sizes.
        </p>
        <p className="text_do_4">
          <span>Backend development.</span> I build robust solutions to manage
          data and server-side functionalities.
        </p>
      </motion.div>

      {/* --- MY STACKS --- */}
      <motion.div
        className="container_bottom"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        variants={fadeUp}
      >
        <h3 className="title_stacks">My Stacks</h3>
        <div className="skills-section">
          <div>
            <h4>Frontend</h4>
            <ul className="skills-list">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React JS</li>
              <li>React Router</li>
              <li>SASS</li>
              <li>Bootstrap</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <h4>Backend</h4>
            <ul className="skills-list">
              <li>NodeJS</li>
              <li>ExpressJS</li>
              <li>MongoDB</li>
              <li>REST APIs</li>
              <li>JWT</li>
              <li>Variables de entorno</li>
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
              <li>Render</li>
              <li>GitHub Pages</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* --- CERTIFICATIONS --- */}
      <div className="container_certifications">
        <div className="container my-5 p_container">
          <motion.h2
            className="title_certifications mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            variants={fadeUp}
          >
            Certifications
          </motion.h2>
          <div className="row justify-content-center">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="col-xl-3 col-lg-3 col-md-6 mb-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                variants={fadeUp}
              >
                <Card
                  className="custom-card"
                  onClick={() => setSelectedCert(cert)}
                  style={{ cursor: "pointer" }}
                >
                  <Card.Img
                    variant="top"
                    src={cert.src}
                    className="custom-card-img"
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="custom-card-title">
                      {cert.title}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
