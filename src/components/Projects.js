import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Screenshot 2023-01-12 at 6.56.16 PM.png";
import projImg2 from "../assets/img/20210222_224359.jpg";
import projImg3 from "../assets/img/Screenshot 2023-01-12 at 7.06.49 PM.png";
import projImg4 from "../assets/img/Screenshot 2023-01-19 at 4.13.33 PM.png";
import projImg5 from "../assets/img/CleanShot 2023-03-13 at 21.55.53@2x.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";
import virtualization from "../assets/img/D3 Final.pdf";

export const Projects = () => {
    const projects = [
        {
            title: "Mobile Trip Itinerary ",
            description:
                "Team project using SCRUM and github." +
                "We started with a base app and added extra functionality to make the app easier to use." +
                " I created some app modals for pages to optimize the trip and search a database to find airports by name." +
                " I use mySQL to query the database that was hosted on our school network.",
            imgUrl: projImg1,
        },
        {
            title: "Sound Reactive Light Strip",
            description:
                "I created a sound responsive LED light strip using an ESP32 arduino as the controller." +
                " I used fastLED to control the LED strip and arduinoFFT to analyze the sound from a microphone.",
            imgUrl: projImg2,
        },
        {
            title: "IEEE Research Paper",
            description:
                "Group research paper on the benefits of virtualization in the case of natural disaster." +
                "",
            imgUrl: projImg3,
            page: virtualization,
        },
        {
            title: "Personal Portfolio Page",
            description:
                "A Personal Portfolio I made using ReactJS, NPM, and React Three Fiber for the cover page." +
                "I am hosting the page using GitHub pages.",
            imgUrl: projImg4,
        },
        {
            title: "Photography Portfolio Page",
            description:
                "A Photography Portfolio I made using ReactJS, NPM, and Parallax for my friend Cosmo." +
                "Hosted on GitHub pages, but need to optimize the image loading to improve site performance.",
            imgUrl: projImg5,
            page: "https://pdj1183.github.io/Cosmo-Portfolio/",
        },
    ];

    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__fadeIn"
                                            : ""
                                    }>
                                    <h2 className="text-center">Projects</h2>
                                    <p className="text-center">
                                        Throughout the courses I have taken as a
                                        student, I have completed a couple major
                                        assignments along with other personal
                                        achievements using technologies I was
                                        curious about.{" "}
                                    </p>
                                    <Row>
                                        {projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            );
                                        })}
                                    </Row>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img
                className="background-image-right"
                src={colorSharp2}
                alt="bg-gradient"
            />
        </section>
    );
};
