import { Navbar, Nav, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Abacus</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
             
            </Nav> */}
            <Nav>
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/little-friend" className="nav-link">Little Friend</Link>
              <Link to="/big-friend" className="nav-link">Big Friend</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </header>
    )
}

export default Header;