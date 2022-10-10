import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from '../logo.svg'
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export default function NavBar() {
    const navigate = useNavigate()
    const [expanded, setExpanded] = useState(false)

    return (
        <Navbar expanded={expanded} sticky="top" bg="dark" variant="dark" expand="lg" className="ps-lg-5 pe-lg-5 ps-3 pe-3">
            <Navbar.Brand type="button" onClick={() => navigate('/')} >
                <img
                    alt=""
                    src={logo}
                    width="48"
                    height="48"
                    className="d-inline-block"/>
                {' '}
                Péťa
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="w-100 justify-content-lg-end d-lg-flex gap-lg-5 gap-2">
                    <Nav.Link onClick={() => {
                        navigate('/About');
                        setExpanded(false)
                    }}>o mně</Nav.Link>
                    <Nav.Link onClick={() => {
                        navigate('/Housekeeping');
                        setExpanded(false)
                    }}>uklízení</Nav.Link>
                    <Nav.Link onClick={() => {
                        navigate('/Traveling')
                        setExpanded(false)
                    }}>cestování</Nav.Link>
                    <Nav.Link onClick={() => {
                        navigate('/Blog');
                        setExpanded(false)
                    }}>blog</Nav.Link>
                    <NavDropdown title="projekty" align="end" id="collapsible-nav-dropdown">
                        <NavDropdown.Item onClick={() => {
                            navigate('/Project1');
                            setExpanded(false)
                        }} className="text-center">projekt 1</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => {
                            navigate('/Project2');
                            setExpanded(false)
                        }} className="text-center">projekt 2</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => {
                            navigate('/Project3');
                            setExpanded(false)
                        }} className="text-center">projekt 3</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}