import { motion } from "framer-motion";
import { FaEnvelope, FaFilePdf, FaLinkedin } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Contact.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function Contact() {
  const emailAddress = "tomascascone@gmail.com";
  const linkedinUrl = "https://linkedin.com/in/tomas-cascone/";

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/images/CV-TOMAS-CASCONE.pdf';
    link.download = 'CV-TOMAS-CASCONE.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}?subject=Contacto desde Portfolio&body=Hola Tomás, te contacto porque...`;
  };

  return (
    <section id="contact_me">
      <div className="container">

        {/* --- TÍTULO --- */}
        <motion.h2
          className="contact-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={fadeUp}
        >
          Contact Me
        </motion.h2>

        {/* --- IMAGEN --- */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          variants={fadeUp}
        >
          <img
            src="/images/Work_together.webp"
            alt="Ilustración de contacto"
            className="contact-main-image"
          />
        </motion.div>

        {/* --- CARDS --- */}
        <div className="row justify-content-center">

          {/* CV */}
          <motion.div
            className="col-xl-4 col-lg-4 col-md-6 mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            variants={fadeUp}
          >
            <Card className="contact-card text-center">
              <Card.Body className="d-flex flex-column">
                <FaFilePdf size={48} className="mb-3 text-danger mx-auto" />
                <Card.Title>Curriculum Vitae</Card.Title>
                <Card.Text className="text-muted">
                  Download my complete CV in PDF format
                </Card.Text>
                <Button variant="outline-primary" onClick={handleDownloadCV} className="mt-auto">
                  📄 Download CV
                </Button>
              </Card.Body>
            </Card>
          </motion.div>

          {/* Email */}
          <motion.div
            className="col-xl-4 col-lg-4 col-md-6 mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            variants={fadeUp}
          >
            <Card className="contact-card text-center">
              <Card.Body className="d-flex flex-column">
                <FaEnvelope size={48} className="mb-3 text-primary mx-auto" />
                <Card.Title>Email</Card.Title>
                <Card.Text className="text-muted">{emailAddress}</Card.Text>
                <Button variant="outline-primary" className="mt-auto" onClick={handleEmailClick}>
                  <FaEnvelope className="me-2" />
                  Send Email
                </Button>
              </Card.Body>
            </Card>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            className="col-xl-4 col-lg-4 col-md-6 mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            variants={fadeUp}
          >
            <Card className="contact-card text-center">
              <Card.Body className="d-flex flex-column">
                <FaLinkedin size={48} className="mb-3 text-info mx-auto" />
                <Card.Title>LinkedIn</Card.Title>
                <Card.Text className="text-muted">Let's connect professionally</Card.Text>
                <Button
                  variant="outline-primary"
                  className="mt-auto"
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="me-2" />
                  View Profile
                </Button>
              </Card.Body>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;