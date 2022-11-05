import { HeaderContainer } from "./styles";
import LOGO from '../../assets/logo.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export function Header() {
    return (
        <HeaderContainer>
            <img src={LOGO} />
            <span>
                <Navbar  expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">New</Nav.Link>
                                <Nav.Link href="#link">Popular</Nav.Link>
                                <Nav.Link href="#link">Trending</Nav.Link>
                                <Nav.Link href="#link">Categories</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </span>
        </HeaderContainer>
    )
}