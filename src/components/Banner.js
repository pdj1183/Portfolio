import {Container, Col, Row} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
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
                        <p>{'\n'}alsdflasdhufhasldhfjahsdhf; kasd;klfj;kasd;kfh   dsa;kfha.s dkhjfasd;f ;a;kj;l df;la sd;lhf; ;h;sdjhflkjahsdljfh lkashd fkjhasldkhfl akjsdlfjlkajhsdl fkhasldkfh</p>
                        <button onClick={() => console.log('connect')}> Let's Connect <ArrowRightCircle size={25}/> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={portrait} alt="portrait"/>
                    </Col>

                </Row>
            </Container>
        </section>

    )
}
