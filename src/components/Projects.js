import { Container, Row, Col} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Screenshot 2023-01-12 at 6.56.16 PM.png";
import projImg2 from "../assets/img/20210222_224359.jpg";
import projImg3 from "../assets/img/Screenshot 2023-01-12 at 7.06.49 PM.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "Mobile Trip Itinerary ",
            description: "Team project using SCRUM and github.",
            imgUrl: projImg1,
        },
        {
            title: "Sound Reactive Light Strip",
            description: "I created a sound responsive LED light strip using an arduino as the controller.",
            imgUrl: projImg2,
        },
        {
            title: "IEEE Research Paper",
            description: "Group research paper on the benefits of virtualization in the case of natural disaster.",
            imgUrl: projImg3,
        },
    ];

    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                                    <h2 className="text-center">Projects</h2>
                                    <p>
                                        I have completed a few large scale projects in my classes throughout my life as a student as well as a few personal projects.
                                    </p>
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="bg-gradient"/>
        </section>
    )
}
