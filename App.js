import React from 'react';
import { Navbar, Nav, Container, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div>
      {/* Navbar */}
      <Navbar bg="light" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand>Mandeep Singh</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#hero">Hero Section</Nav.Link>
              <Nav.Link href="#three-column">Three-Column Section</Nav.Link>
              <Button variant="primary" className="ms-3" onClick={handleShow}>
                Copyright
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section id="hero" className="hero-section d-flex align-items-center justify-content-center" style={{
        backgroundColor: '#fff', /* Changed background to black */
        backgroundImage: 'url(https://via.placeholder.com/1200x400)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        color: '#000', /* Changed font color to white */
        textAlign: 'center'
      }}>
        <h1>Welcome to My Hero Section</h1>
        <p>Here is a brief description of the hero image.</p>
      </section>

      {/* Three-Column Section */}
      <section id="three-column" className="container my-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 text-center">
              <img src="https://via.placeholder.com/300" className="card-img-top" alt="Card 1" />
              <div className="card-body">
                <h5 className="card-title">Column 1</h5>
                <p className="card-text">This is a short description for column 1.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 text-center">
              <img src="https://via.placeholder.com/300" className="card-img-top" alt="Card 2" />
              <div className="card-body">
                <h5 className="card-title">Column 2</h5>
                <p className="card-text">This is a short description for column 2.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 text-center">
              <img src="https://via.placeholder.com/300" className="card-img-top" alt="Card 3" />
              <div className="card-body">
                <h5 className="card-title">Column 3</h5>
                <p className="card-text">This is a short description for column 3.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2025 Mandeep Singh. All Rights Reserved.</p>
      </footer>

      {/* Copyright Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Copyright Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>&copy; 2025 Mandeep Singh. All Rights Reserved.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default App;
