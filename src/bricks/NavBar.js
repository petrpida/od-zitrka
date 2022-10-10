import { Nav, Navbar } from "react-bootstrap";
import logo from '../logo.svg'
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export default function NavBar() {
    const navigate = useNavigate()
    const [expanded, setExpanded] = useState(false)

    return (
        <Navbar expanded={expanded} sticky="top" bg="dark" variant="dark" expand="lg" className="ps-lg-3 pe-lg-3 ps-2 pe-2">
            <Navbar.Brand type="button" onClick={() => {navigate('/'); setExpanded(false)}} >
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
                    <Nav.Link onClick={() => {
                        navigate('/Projects');
                        setExpanded(false)
                    }}>projekty</Nav.Link>
                    <Nav.Link onClick={() => {
                        navigate('/Contact');
                        setExpanded(false)
                    }}>kontakt</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}