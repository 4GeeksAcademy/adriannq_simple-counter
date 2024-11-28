import { Container, Nav, Navbar } from "react-bootstrap";

function NavBar({ status, statusSetter }) {
  const linkMap = ["Home", "Counter"];

  return (
    <Navbar expand="lg" className="bg-dark navbar-dark ">
      <Container>
        <Navbar.Brand onClick={() => statusSetter("Home")}>
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {linkMap.map((link) => {
              return (
                <Nav.Link
                  active={link === status}
                  onClick={() => statusSetter(link)}
                >
                  {link}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
