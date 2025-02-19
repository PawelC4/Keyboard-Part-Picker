import {useRef} from "react";
import keyboardSizeChart from "/Users/pawelcieslak/WebstormProjects/keyboard_project/src/assets/img.png";

function HowToPage() {
    const baseSec = useRef(null);
    const plateSec = useRef(null);
    const switchSec = useRef(null);
    const stabSec = useRef(null);
    const keycapSec = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        });
    };
    return (
        <div className="HowToPage">
            <h1>How to Build a Keyboard</h1>
            <h2>The average Keyboard consists of the Following Parts: </h2>

            <button onClick={() => scrollToSection(baseSec)} className="kb-base-btn"
                    style={{margin: "10px", width: "25%"}}>Keyboard Base
            </button>
            <br/>
            <button onClick={() => scrollToSection(plateSec)} className={"plate-btn"}
                    style={{margin: "10px ", width: "25%"}}>Plate
            </button>
            <br/>
            <button onClick={() => scrollToSection(switchSec)} className={"switch-btn"}
                    style={{margin: "10px ", width: "25%"}}>Switches
            </button>
            <br/>
            <button onClick={() => scrollToSection(stabSec)} className={"stab-btn"}
                style = {{margin: "10px ", width: "25%"}}>Stabilizers
            </button>
            <br/>
            <button onClick={() => scrollToSection(keycapSec)} className={"keycap-btn"}
                    style={{margin: "10px ", width: "25%"}}>Keycaps
            </button>

            <div ref={baseSec}>
                <h1>Keyboard Bases</h1>
                <section>
                    <p>A keyboard base is the foundation of a mechanical keyboard, housing the PCB (printed circuit board),
                    switches, and other essential components. It provides structural support and determines the keyboards
                    overall aesthetics, build quality, and typing feel.
                    </p>
                    <h2>Key Components of a Keyboard Base:</h2>
                    <ul>
                        <li>Case: The outer shell, typically made of plastic, aluminum, or other metals,
                            which affects weight, durability, and sound profile.</li>

                        <li>PCB (Printed Circuit Board): The electronic board that connects key switches to the computer.
                            It can be soldered or hot-swappable for easier switch changes.</li>

                        <li>Foam (Optional): Some bases include foam layers for sound dampening and a more premium feel.</li>

                        <li>Mounting Style: Determines how the plate and PCB are secured within the case
                            (e.g., gasket mount, tray mount, top mount).</li>
                    </ul>
                    <h3>
                        Choosing a Keyboard Base:
                    </h3>
                    <section>
                        <p>
                            Factors like size (60%, TKL, full-size), material, mounting style, and aesthetics play a
                            role
                            in choosing the right base. Some bases are DIY-friendly for custom builds, while others come
                            pre-assembled for convenience.
                        </p>
                        <img src={keyboardSizeChart} alt="Keyboard Base size chart"
                            style={{width: '50%', height: '50%'}} />
                    </section>
                </section>
            </div>

            <div ref={plateSec}>
                <h1>Keyboard Plates</h1>
                <section>
                    Keyboard Plates are plates that go on top of a keyboard pcb and hold the switches.
                </section>
            </div>

            <div ref={switchSec}>
                <h1>Mechanical Switch</h1>
            </div>

            <div ref={stabSec}>
                <h1>Stabilizers</h1>
            </div>

            <div ref={keycapSec}>
                <h1>Keycaps</h1>
            </div>
        </div>

    );

}

export default HowToPage;