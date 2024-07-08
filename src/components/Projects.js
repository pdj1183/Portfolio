import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg4 from "../assets/img/Screenshot 2023-01-19 at 4.13.33 PM.png";
import projImg5 from "../assets/img/CleanShot 2023-03-13 at 21.55.53@2x.png";
import projImg7 from "../assets/img/project-img8.png";
import TrackVisibility from "react-on-screen";
import ifip from "../assets/img/ifipsec2024.pdf";
import ifipScreenshot from "../assets/img/ifipScreenshot@2x.png"

export const Projects = () => {
    const projects = [
        {
            title: "This Portfolio Page",
            description:
                "A Personal Portfolio I made using ReactJS, NPM, and React Three Fiber for the cover page. I am hosting the page using GitHub pages.",
            imgUrl: projImg4,
        },
        {
            title: "Photography Portfolio Page",
            description:
                "A Photography Portfolio I made using ReactJS, NPM, and Parallax for my friend Cosmo. Hosted on GitHub pages, but need to optimize the image loading to improve site performance.",
            imgUrl: projImg5,
            page: "https://pdj1183.github.io/Cosmo-Portfolio/",
        },
        {
            title: "Records & Recommendations",
            description:
                "Swift iOS application that recommends users albums based on their vinyl collection. The app uses NSPersistentCloudKitContainer with the goal of providing applications accross Apple's ecosystem.",
            imgUrl: projImg7,
            page: "https://github.com/pdj1183/Records-Recommendations/wiki",
        }
    ];

    const ifipCard = {
        title: "Exploring a Low-Cost Hardware Reverse Engineering Approach: A Use Case Experiment",
        description: "IFIPSEC",
        imgUrl: ifipScreenshot,
        page: ifip
    }

    return (
        <div>
            <section className="paper" id="paper">
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
                                        <h2 className="text-center">Hardware Reverse Engineering Research</h2>
                                        <p className="text-center">
                                            I spent my last year working on Hardware Reverse Engineering in a low cost lab. 
                                            Our goal was to research how novice reverse engineers would be able to attack an IoT smart sensing device.
                                            I lead an effort to understand and analyze possible vulnerabilities of our blackbox sensing device and after creating a possible attack,
                                            tested the validity of an operating battery voltage test.
                                            We found that as novice reverse engineers with a low cost lab, we successfully designed an attack that meaningfully affected the trustworthiness of our blackbox device. 
                                            
                                        </p>
                                        <Row className="justify-content-center">
                                            <ProjectCard {...ifipCard}></ProjectCard>
                                        </Row>
                                    </div>
                                )}
                            </TrackVisibility>
                        </Col>
                    </Row>
                </Container>
            </section>

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
                                        <h2 className="text-center">Software Engineeering Projects</h2>
                                        <p className="text-center">
                                            
                                            Throughout my time at CSU I took part in several group software engineering projects, 
                                            these inspired me to start my own projects using technologies I was curious about.
                                            These projects allowed me to put my creative spin into coding projects!
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
            </section>
        </div>
    );
};
