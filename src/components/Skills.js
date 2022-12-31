import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Col, Container, Row} from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png"
import {isMobile} from "react-device-detect";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };

    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>
                                adslfuahwdlsu lkjahsfkjdfhhas dhfhashjkd flhasjd flajhs dklfhakshdf ashd lhfa
                            </p>
                            <Carousel responsive={responsive} infinite={true} showDots={true} keyBoardControl={true} swipeable={true} removeArrowOnDeviceType={["tablet", "mobile"]} autoPlay={isMobile} className="skill-slider">
                                <div className="item">
                                    <h5>
                                        C/C++
                                    </h5>
                                </div>
                                <div className="item">
                                    <h5>
                                        Java
                                    </h5>
                                </div>
                                <div className="item">
                                    <h5>
                                        Javascript
                                    </h5>
                                </div>
                                <div className="item">
                                    <h5>
                                        Object-Oriented {'\n'}
                                        Development
                                    </h5>
                                </div>
                                <div className="item">
                                    <h5>
                                        Test-Driven {'\n'} Development
                                    </h5>
                                </div>
                                <div className="item">
                                    <h5>
                                        React
                                    </h5>
                                </div>
                                <div className="item">
                                    <h5>
                                        Node
                                    </h5>
                                </div>
                                <div className="item">
                                    <h5>
                                        React
                                    </h5>
                                </div>
                                <div className="item">
                                    <h5>
                                        GitHub
                                    </h5>
                                </div>
                                <div className="item">
                                    <h5>
                                        Team-Driven {'\n'}
                                        Development
                                    </h5>
                                </div>
                                <div className="item">
                                    <h5>
                                        Scrum
                                    </h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="bg-gradient"/>
        </section>
    )
}