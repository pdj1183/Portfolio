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
                                    ' a Coder',
                                    1000,
                                    ' Motivated to Learn',
                                    1000
                                ]}
                                />
                        </h2>
                        <p>{'\n'}
                            I am a third year Computer Science undergraduate with a concentration in Networking and Cyber-security as well as a minor in Mathematics.
                            I'm interested to learn about all corners of technology.
                            I love building new apps and have an eye for appealing user experiences.
                            The most impactful class I have taken is Introduction to Software Engineering cs314.
                            It taught me important skills about working as part of a 5 person team on a large continuous project.
                            We created a mobile trip itinerary that was based of off a given a base application.
                            In the first week we had to analyze the code and begin adding our own improvements.
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
