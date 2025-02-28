import {useRef, useState} from "react";
import switchesBackground from '/Users/pawelcieslak/WebstormProjects/keyboard_project/src/assets/img_3.png';
// import keyboardSizeChart from "/Users/pawelcieslak/WebstormProjects/keyboard_project/src/assets/img.png";

function HowToPage() {
    const baseSec = useRef(null);
    const plateSec = useRef(null);
    const switchSec = useRef(null);
    const stabSec = useRef(null);
    const keycapSec = useRef(null);

    const [hoveredBox, setHoveredBox] = useState(null);
    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        });
    };
    return (
        <div className="HowToPage" style={{margin: "0", padding: "0"}}>
            <div
                className="KeyboardPartContainer"
                style={{
                    display: "flex",
                    marginLeft: "-32px",
                    marginRight: "-32px",
                    width: "100vw",
                    height: "70vh",
                    marginTop: "-32px",
                    justifyContent: "center",
                    alignItems: "center",
                    boxSizing: "content-box",
                    backgroundImage: `url(${switchesBackground})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundColor: "rgba(255,255,255,0.6)",
                    backgroundBlendMode: "lighten"
                }}
            >
                <h1 style={{justifyContent: "center", alignItems: "center", textEmphasisStyle: "bold",fontSize: "6em",color: "#2d2344"}}>HOW TO BUILD A KEYBOARD</h1>
            </div>
            <div>
                <h2 style={{justifyContent: "center", display: "flex", alignItems: "center", margin: "2.5em", color: "#fbe4ea"}}>
                    A KEYBOARD CONSISTS OF THE FOLLOWING PARTS
                </h2>
                <section style={{
                    width: "100%",
                    display: "inline-flex",
                    flexDirection: "row",
                    gap: "15px",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <button onClick={() => scrollToSection(baseSec)} className={"partBtn"}
                            style={{
                                width: "40%",
                                padding: "10px",
                                borderRadius: "5px",
                                border: "none",
                                cursor: "pointer",
                            }}
                    >
                        Keyboard Base
                    </button>
                    <button onClick={() => scrollToSection(plateSec)} className={"partBtn"}
                            style={{
                                width: "40%",
                                padding: "10px",
                                borderRadius: "5px",
                                border: "none",
                                cursor: "pointer",
                            }}
                    >
                        Plate
                    </button>
                    <button onClick={() => scrollToSection(switchSec)} className={"partBtn"}
                            style={{
                                width: "40%",
                                padding: "10px",
                                borderRadius: "5px",
                                border: "none",
                                cursor: "pointer",
                            }}
                    >
                        Switches
                    </button>
                    <button onClick={() => scrollToSection(stabSec)} className={"partBtn"}
                            style={{
                                width: "40%",
                                padding: "10px",
                                borderRadius: "5px",
                                border: "none",
                                cursor: "pointer",
                            }}
                    >
                        Stabilizers
                    </button>
                    <button onClick={() => scrollToSection(keycapSec)} className={"partBtn"}
                            style={{
                                width: "40%",
                                padding: "10px",
                                borderRadius: "5px",
                                border: "none",
                                cursor: "pointer",
                            }}
                    >
                        Keycaps
                    </button>
                </section>
            </div>
            <div ref={baseSec} style={{padding: "10px", marginTop: "10vh"}}>

                <h1>Keyboard Bases</h1>
                <p>
                    A keyboard base is the foundation of a mechanical keyboard, housing the PCB (printed circuit board),
                    switches, and other essential components. It provides structural support and determines the keyboards
                    overall aesthetics, build quality, and typing feel.
                </p>
                <section>
                    <h2>Key Components of a Keyboard Base:</h2>
                    <div id = {"basePartsContainer"}
                        style={{
                        display: "inline-flex",
                        placeItems: "center",
                        width: "100%",
                        boxSizing: "content-box",
                    }}>

                            <div id = {"caseBox"}
                                 style={{
                                    color:"grey",
                                    flex: "1",
                                    padding: "1em",
                                    width: "50%",
                                    height: "100%",
                                    boxSizing: "content-box",
                                    backgroundColor: "#fbe4ea",
                                    border: "5px solid #fbe4eaF",
                                    borderRadius: "20px",
                                    margin: "20px",
                                 }}
                            >
                                <h2 style={{color:"#2D2344FF",fontWeight:"bold"}}>Case</h2>
                                <p style={{ margin: '15px',color: "#553b7a", fontWeight:"bold"}}>
                                    The outer shell, typically made of plastic, aluminum, or other metals,
                                    which affects weight, durability, and sound profile.
                                </p>
                            </div>
                            <div id = {"pcbBox"}
                                 style={{
                                    color:"grey",
                                    flex: "1",
                                    padding: "1em",
                                    width: "50%",
                                    height:"100%",
                                    boxSizing: "content-box",
                                    backgroundColor: "#fbe4ea",
                                    border: "5px solid #fbe4ea",
                                    borderRadius: "20px",
                                    margin: "20px",
                            }}
                            >
                                <h2 style={{color:"#2D2344FF",fontWeight:"bold"}}>PCB</h2>
                                <p style={{margin: '15px',color: "#553b7a",fontWeight:"bold"}}>
                                    The electronic board that connects key switches to the
                                    computer. It can be soldered or hot-swappable for easier switch changes.
                                </p>
                            </div>
                            <div id={"mountingBox"}
                                 style={{
                                     color:"grey",
                                     flex: "1",
                                     padding: "1em",
                                     width: "50%",
                                     height: "100%",
                                     boxSizing: "content-box",
                                     backgroundColor: "#fbe4ea",
                                     border: "5px solid #fbe4ea",
                                     borderRadius: "20px",
                                     margin: "20px",
                                 }}
                            >
                                <h2 style={{color:"#2D2344FF",fontWeight:"bold"}}>Mounting Style</h2>
                                <p style={{margin: '15px',color: "#553b7a",fontWeight:"bold"}}>
                                    Style Determines how the plate and PCB are secured within the case (e.g., gasket mount,
                                    tray mount, top mount).
                                </p>
                            </div>
                    </div>
                    <div style={{
                        display: "inline-flex",
                        placeItems: "center",
                        width: "100%",
                        boxSizing: "border-box",
                    }}>
                        <div
                            id={"ChoosingBase"}
                            onMouseEnter={() => setHoveredBox("box1")}
                            onMouseLeave={() => setHoveredBox(null)}
                            style={{
                                width: "50%",
                                height: "100%",
                                flex: "1",
                                padding: "1em",
                                boxSizing: "content-box",
                                backgroundColor: "#fbe4ea",
                                border: "5px solid transparent",
                                borderRadius: "20px",
                                margin: "20px",
                                transition: 'border-color 0.3s ease',
                                borderColor: hoveredBox === "box1" ? '#553b7a' : 'transparent',
                            }}
                        >
                            <h3 style={{fontSize:"2em",color:"#2D2344FF",fontWeight:"bold"}}>
                                Choosing a Keyboard Base
                            </h3>
                            <section style={{display: "inline-flex",marginLeft: "50px",marginRight: "50px"}}>

                                <p style={{padding: "10px", color: "#553b7a", fontWeight: "bold"}}>
                                    Factors like size (60%, TKL, full-size), material, mounting style, and aesthetics
                                    play a role in choosing the right base. Some bases are DIY-friendly for custom
                                    builds, while
                                    others come pre-assembled for convenience.
                                </p>
                            </section>
                        </div>
                        <div
                            id={"ChoosingMounting"}
                            onMouseEnter={() => setHoveredBox("box2")}
                            onMouseLeave={() => setHoveredBox(null)}
                            style={{
                                width: "50%",
                                height: "100%",
                                flex: "1",
                                padding: "1em",
                                boxSizing: "border-box",
                                backgroundColor: "#fbe4ea",
                                border: "5px solid transparent",
                                borderRadius: "20px",
                                margin: "20px",
                                transition: 'border-color 0.3s ease',
                                borderColor: hoveredBox === "box2" ? '#553b7a' : 'transparent',
                            }}>
                                <h3 style={{fontSize:"2em",color:"#2D2344FF",fontWeight:"bold"}}>
                                    Choosing a Mounting Style
                                </h3>
                            <section style={{display: "inline-flex",marginLeft: "50px",marginRight: "50px"}}>

                                <p style={{padding: "10px",color:"#553b7a",fontWeight:"bold"}}>
                                    Choose a keyboard mounting style based on feel and sound: tray mount for affordability,
                                    top mount for firmness, gasket mount for a cushioned feel, or plateless for flexibility.
                                    Your preference dictates the best fit!
                                </p>
                            </section>
                        </div>
                    </div>

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