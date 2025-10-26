import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useCart } from "../../cartas/context/CartContext";
import { useState } from "react";
import { CartDetails } from "../../cartas/components/CartDetails";

const Header = () => {
    const { totalItems } = useCart();
      const [showCart, setShowCart] = useState(false);
        const handleClose = () => setShowCart(false);
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          PokecardStore
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>
              Inicio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cartas">
              Cartas
            </Nav.Link>
            <Nav.Link as={NavLink} to="/noticias">
              Noticias
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contacto">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <button
          className="btn btn-outline-primary position-relative"
          onClick={() => setShowCart(!showCart)}
        >
          🛒 Carrito
          {totalItems > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {totalItems}
            </span>
          )}
        </button>
      </Container>
      <Offcanvas show={showCart} placement="end" onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Tu carrito 🛒</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <CartDetails />
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
};

export default Header;
