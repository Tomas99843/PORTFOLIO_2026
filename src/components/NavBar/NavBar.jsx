import { motion } from "framer-motion";
import { Link } from "react-scroll";
import logo from "/images/Logo.webp";
import "./NavBar.css";

function NavBar() {
  return (
    <motion.nav
      className="navbar p-lateral"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Link to="container_home" smooth={true} duration={500} offset={-70}>
        <img src={logo} alt="Logo" className="navbar-logo" />
      </Link>
      <div className="navLinks">
        <Link
          to="container_home"
          smooth={true}
          duration={500}
          offset={-70}
          className="navbar-link"
        >
          Home
        </Link>
        <Link
          to="about_me"
          smooth={true}
          duration={500}
          offset={-70}
          className="navbar-link"
        >
          About Me
        </Link>
        <Link
          to="contact_me"
          smooth={true}
          duration={500}
          offset={-70}
          className="navbar-link"
        >
          Contact Me
        </Link>
      </div>
    </motion.nav>
  );
}

export default NavBar;
