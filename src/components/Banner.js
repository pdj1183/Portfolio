import { Container, Col, Row } from "react-bootstrap";
import Typical from "react-typical";
import portrait from "../assets/img/Portrait.JPG";

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={6}>
                        <h1>{"Hello There!"}</h1>
                        <h2>
                            {" "}
                            I'm
                            <Typical
                                loop={Infinity}
                                wrapper="b"
                                steps={[
                                    " a CSU Graduate",
                                    1000,
                                    " a Hardware Hacker",
                                    1000,
                                    " a Coder",
                                    1000,
                                    " Always Curious",
                                    1000,
                                ]}
                            />
                        </h2>
                        <p className="summary">
                            {"\n"}I am a recent Computer Science
                            undergraduate with a concentration in Cybersecurity
                            and Networking, along with a minor in Mathematics.
                            As a dedicated research assistant, I have 
                            delved into the fascinating realms of
                            hardware reverse engineering. Working under the
                            guidance of esteemed professionals, I've conducted
                            in-depth research and developed experience in
                            analyzing and manipulating Blackbox devices,
                            implementing innovative attacks to alter their
                            output without raising suspicion. Through this
                            experience, I strengthened my skills in information
                            gathering, PCB schematic recreation, IoT device
                            application creation, and hardware measurements. I
                            have performing controlled experiments, collecting
                            hardware and digital data, and demonstrating
                            statistical significance to expose vulnerabilities.
                            With a drive to explore cutting-edge technologies, I
                            am passionate about building secure and robust
                            systems to safeguard against cyber threats. Welcome
                            to my portfolio, where I showcase my dedication to
                            learning Computer Science through my projects and
                            accomplishments.
                        </p>
                    </Col>
                    <Col xs={12} md={6} xl={6}>
                        <img src={portrait} alt="portrait" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
