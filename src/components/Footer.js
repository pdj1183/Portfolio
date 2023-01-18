import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/Signature.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from '../assets/img/github.svg'
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/phillip-johnson-5b7854262/"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/pdj1183/"><img src={navIcon2} alt="" /></a>
              <a href="https://www.instagram.com/phildo.johnson/"><img src={navIcon3} alt="" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
