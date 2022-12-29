import {Container, Col, Row} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import Typical from "react-typical"


export const Banner = () =>{
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1>{'Well '}</h1>
                        <h2 > I'm a
                                <Typical
                                loop={Infinity}
                                wrapper="b"
                                steps={[
                                    ' CSU Student',
                                    1000,
                                    'n Adventurer',
                                    1000,
                                    ' Motivated to Learn',
                                    1000
                                ]}
                                />
                        </h2>
                        <p>{'\n'}alsdflasdhufhasldhfjahsdhf;kasd;klfj;kasd;kfh   dsa;kfha.s dkhjfasd;f ;a;kj;l df;la sd;lhf; ;h;sdjhflkjahsdljfh lkashd fkjhasldkhfl akjsdlfjlkajhsdl fkhasldkfh</p>
                        <button onClick={() => console.log('connect')}> Let's Connect <ArrowRightCircle size={25}/> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <h3 className='text-center'>
                            Welcome to my Portfolio
                        </h3>
                    </Col>

                </Row>
            </Container>
        </section>

    )
}
