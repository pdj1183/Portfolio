import {useState, useEffect} from "react";
import {Container, Col, Row} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";


export const Banner = () =>{
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false)
    const carousel = ["Software Engineer", "Cyber-Security Student"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 200;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % carousel.length;
        let fullText = carousel[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1>{'Hi I\'m Phillip Johnson'}</h1>
                        <h2 ><span className="wrap align-content-center"> {text} </span></h2>
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
