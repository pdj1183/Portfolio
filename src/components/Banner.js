import {Container, Col, Row} from "react-bootstrap";
import Typical from "react-typical"
import portrait from '../assets/img/Snapchat-1319243128.jpg'


export const Banner = () =>{
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1>{'Hello There!'}</h1>
                        <h2 > I'm
                                <Typical
                                loop={Infinity}
                                wrapper="b"
                                steps={[
                                    ' a CSU Student',
                                    1000,
                                    ' an Adventurer',
                                    1000,
                                    ' Motivated to Learn',
                                    1000
                                ]}
                                />
                        </h2>
                        <p>{'\n'}
                            As a current student at CSU I am very interested to learn about all of the corners of technology.
                            I am a third year Computer Science undergrad with a concentration in Networking and Cyber-security and a minor in Mathematics.
                            I love building new apps and have an eye for good looking user experiences.
                            My most impactful class I have taken so far is my Introduction to Software Engineering course.
                            It taught me important skills on how to work in a team using the SCRUM method and GitHub.
                            We created a mobile trip itinerary web app based off of source code and implemented new features an abilities.
                        </p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={portrait} alt="portrait"/>
                    </Col>

                </Row>
            </Container>
        </section>

    )
}
