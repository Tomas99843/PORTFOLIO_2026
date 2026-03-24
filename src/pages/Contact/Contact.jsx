import React from 'react';
import { FaEnvelope, FaFilePdf, FaLinkedin } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Contact.css';

function Contact() {
  // Reemplaza estas URLs con tus enlaces reales
  const emailAddress = "tomascascone@gmail.com";
  const linkedinUrl = "https://linkedin.com/in/tu-usuario"; 

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV_TOMAS_CASCONE.pdf';
    link.download = 'CV_Tomas_Cascone.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}?subject=Contacto desde Portfolio&body=Hola Tomás, te contacto porque...`;
  };

  return (
    <section id="contact_me" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <img 
            src="/images/Work_together.webp" 
            alt="Ilustración de contacto" 
            className="img-fluid contact-main-image w-25"
          />
        </div>
        
        <div className="row justify-content-center">
          
          {/* CV - Descarga de PDF */}
          <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
            <Card className="h-100 text-center border-0 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <FaFilePdf size={50} className="mb-3 text-danger mx-auto" />
                  <Card.Title>Curriculum Vitae</Card.Title> {/*MODIFICAR*/}
                <Card.Text className="text-muted">
                  Download my complete CV in PDF format  {/*MODIFICAR*/}
                </Card.Text>
                <Button 
                  variant="outline-primary" 
                  onClick={handleDownloadCV}
                  className="mt-auto"
                >
                  📄 Descargar mi CV 
                </Button>
              </Card.Body>
            </Card>
          </div>

          {/* Email - Redirige a Gmail */}
          <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
            <Card className="h-100 text-center border-0 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <FaEnvelope size={50} className="mb-3 text-primary mx-auto" />
                <Card.Title>Email</Card.Title>  {/*MODIFICAR*/}
                <Card.Text className="text-muted">{emailAddress}</Card.Text>
                <Button 
                  variant="outline-primary" 
                  className="mt-auto"
                  onClick={handleEmailClick}
                >
                  <FaEnvelope className="me-2" />
                  Enviar Email {/*MODIFICAR*/}
                </Button>
              </Card.Body>
            </Card>
          </div>

          {/* LinkedIn - Perfil profesional */}
          <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
            <Card className="h-100 text-center border-0 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <FaLinkedin size={50} className="mb-3 text-info mx-auto" />
                <Card.Title>LinkedIn</Card.Title> {/*MODIFICAR*/}
                <Card.Text className="text-muted">Let's connect professionally</Card.Text> {/*MODIFICAR*/}
                <Button 
                  variant="outline-primary" 
                  className="mt-auto"
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="me-2" />
                  View Profile {/*MODIFICAR*/}
                </Button>
              </Card.Body>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;