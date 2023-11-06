import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import resume from "../assets/img/Phillip Johnson's Resume.pdf";
export const Navigation = () => {
    const [activeLink, setActiveLink] = useState("home");

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Router>
            <Navbar expand="lg" className={"scrolled"}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link
                                href="#home"
                                className={
                                    activeLink === "home"
                                        ? "active navbar-link"
                                        : "navbar-link"
                                }
                                onClick={() => onUpdateActiveLink("home")}>
                                Home
                            </Nav.Link>
                            <Nav.Link
                                href="#skills"
                                className={
                                    activeLink === "skills"
                                        ? "active navbar-link"
                                        : "navbar-link"
                                }
                                onClick={() => onUpdateActiveLink("skills")}>
                                Skills
                            </Nav.Link>
                            <Nav.Link
                                href="#projects"
                                className={
                                    activeLink === "projects"
                                        ? "active navbar-link"
                                        : "navbar-link"
                                }
                                onClick={() => onUpdateActiveLink("projects")}>
                                Projects
                            </Nav.Link>
                            <Nav.Link className="navbar-link" href={resume}>
                                Resume
                            </Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="https://www.linkedin.com/in/phillip-johnson-5b7854262/">
                                    <img src={navIcon1} alt="" />
                                </a>
                                <a href="https://github.com/pdj1183/">
                                    <img src={navIcon2} alt="" />
                                </a>
                                <a href="https://www.instagram.com/phildo.johnson/">
                                    <img src={navIcon3} alt="" />
                                </a>
                            </div>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    );
};
