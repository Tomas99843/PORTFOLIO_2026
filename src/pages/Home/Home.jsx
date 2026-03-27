import { motion } from "framer-motion";
import my_picture from "/images/my_picture.webp";
import "./Home.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function Home() {
  return (
    <section id="container_home">
      <div className="home-box">
        <motion.div
          className="container_left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={fadeUp}
        >
          <h2 className="description_name">Hello! I'm Tomas Cascone</h2>
          <h1 className="description_job">
            Full Stack <br /> Developer.
          </h1>
          <h3 className="description_location">
            Based in Mar del Plata, Argentina.
          </h3>
        </motion.div>

        <motion.div
          className="container_right"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          variants={fadeUp}
        >
          <img
            src={my_picture}
            alt="Foto de perfil de Tomas Cascone"
            className="description_picture"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
