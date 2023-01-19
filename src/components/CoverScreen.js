import {Canvas} from "@react-three/fiber";
import {Blob} from "./Blob/Blob";
import signature from "../assets/img/Signature.svg"

export const CoverScreen = () => {
    return(
        <section className="coverScreen" id="cover">
                <img className="center-image" src={signature} alt="signature"/>
                <a href="#home">
                    <div className="arrow" >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </a>
                <Canvas className="blob" camera={{ position: [0.0, 0.0, 5.5]}}>
                    <Blob/>
                </Canvas>
        </section>
    )
}