import {useRef, useState} from "react";
import switchesBackground from '/Users/pawelcieslak/WebstormProjects/keyboard_project/src/assets/img_3.png';
import "./HowTo.css"
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
    const data = [
        { Material: "Aluminum", Typing_Feel: "Medium Stiffness", Sound_Profile: "Crisp and slightly high-pitched", Durability: "High", Notes: "A balance between stiffness and flexibility" },
        { Material: "Brass", Typing_Feel: "Very stiff", Sound_Profile: "Loud, sharp, and resonant", Durability: "Very high", Notes: "Heavy, often produces a metallic \"ping\"" },
        { Material: "Steel", Typing_Feel: "Extremely stiff", Sound_Profile: "Deep and loud", Durability: "Very high", Notes: "Heavy and rigid, common in high-end builds" },
        { Material: "Polycarbonate (PC)", Typing_Feel: "Flexible and bouncy", Sound_Profile: "Softer, lower-pitched", Durability: "Medium", Notes: "Great for softer, cushioned typing experience" },
        { Material: "FR4 (Fiberglass)", Typing_Feel: "Medium flex", Sound_Profile: "Muted, soft sound", Durability: "Medium", Notes: "Common in modern keyboards due to balance" },
        { Material: "Carbon Fiber", Typing_Feel: "Light but stiff", Sound_Profile: "Slightly muted, higher-pitched", Durability: "Medium-High", Notes: "Good balance of rigidity and weight" },
        { Material: "POM (Polyoxymethylene)", Typing_Feel: "Very flexible", Sound_Profile: "Deep and soft", Durability: "Medium-Low", Notes: "Provides a very cushioned feel" },

    ]
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
                    backgroundImage: `url(${switchesBackground}) `,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundColor: "rgba(255,255,255,0.6)",
                    backgroundBlendMode: "lighten"
                }}
            >
                <h1 style={{justifyContent: "center", alignItems: "center", textEmphasisStyle: "bold",fontSize: "6em",color: "var(--color-h1)"}}>
                    HOW TO BUILD A KEYBOARD
                </h1>
            </div>
            <div>
                <h2 style={{justifyContent: "center", display: "flex", alignItems: "center", margin: "2.5em", color: "var(--color-text)"}}>
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

                <h1 style={{ color: "var(--color-h1"}}>Keyboard Bases</h1>
                <p>
                    A keyboard base is the foundation of a mechanical keyboard, housing the PCB (printed circuit board),
                    switches, and other essential components. It provides structural support and determines the keyboards
                    overall aesthetics, build quality, and typing feel.
                </p>
                <section>
                    <h2 style={{color: "var(--color-h2"}}>Key Components of a Keyboard Base: </h2>
                    <div id = {"basePartsContainer"}
                         style={{
                             display: "flex", // Ensures children are aligned in a row
                             justifyContent: "space-between", // Spreads the boxes evenly
                             alignItems: "stretch", // Stretches boxes to equal height
                             width: "100%",
                             boxSizing: "border-box",
                         }}>

                            <div id = {"caseBox"}
                                 onMouseEnter={() => setHoveredBox("caseBox")}
                                 onMouseLeave={() => setHoveredBox(null)}
                                 style={{
                                     flex: "1",
                                     display: "flex",
                                     flexDirection: "column",
                                     justifyContent: "space-between", // Keeps spacing consistent
                                     padding: "1em",
                                     width: "100%",
                                     minHeight: "250px", // Adjust as needed to set a base height
                                     boxSizing: "border-box",
                                     backgroundColor: "var(--color-box)",
                                     border: "5px solid transparent",
                                     borderRadius: "20px",
                                     margin: "20px",
                                     transition: "border-color 0.3s ease",
                                     borderColor: hoveredBox === "caseBox" ? "#553b7a" : "transparent",
                                 }}
                            >
                                <h2 style={{color:"var(--color-box-header)",fontWeight:"bold"}}>Case</h2>
                                <p style={{ margin: '15px',color:"var(--color-box-text)", fontWeight:"bold"}}>
                                    The outer shell, typically made of plastic, aluminum, or other metals,
                                    which affects weight, durability, and sound profile.
                                </p>
                            </div>
                            <div id = {"pcbBox"}
                                 onMouseEnter={() => setHoveredBox("pcbBox")}
                                 onMouseLeave={() => setHoveredBox(null)}
                                 style={{
                                     flex: "1",
                                     display: "flex",
                                     flexDirection: "column",
                                     justifyContent: "space-between", // Keeps spacing consistent
                                     padding: "1em",
                                     width: "100%",
                                     minHeight: "250px", // Adjust as needed to set a base height
                                     boxSizing: "border-box",
                                     backgroundColor: "var(--color-box)",
                                     border: "5px solid transparent",
                                     borderRadius: "20px",
                                     margin: "20px",
                                     transition: "border-color 0.3s ease",
                                     borderColor: hoveredBox === "pcbBox" ? "#553b7a" : "transparent",
                                 }}
                            >
                                <h2 style={{color:"var(--color-box-header)",fontWeight:"bold"}}>PCB</h2>
                                <p style={{margin: '15px',color:"var(--color-box-text)",fontWeight:"bold"}}>
                                    The electronic board that connects key switches to the
                                    computer. It can be soldered or hot-swappable for easier switch changes.
                                </p>
                            </div>
                            <div id={"mountingBox"}
                                 onMouseEnter={() => setHoveredBox("mountingBox")}
                                 onMouseLeave={() => setHoveredBox(null)}
                                 style={{
                                     flex: "1",
                                     display: "flex",
                                     flexDirection: "column",
                                     justifyContent: "space-between", // Keeps spacing consistent
                                     padding: "1em",
                                     width: "100%",
                                     minHeight: "250px", // Adjust as needed to set a base height
                                     boxSizing: "border-box",
                                     backgroundColor: "var(--color-box)",
                                     border: "5px solid transparent",
                                     borderRadius: "20px",
                                     margin: "20px",
                                     transition: "border-color 0.3s ease",
                                     borderColor: hoveredBox === "mountingBox" ? "#553b7a" : "transparent",
                                 }}
                            >
                                <h2 style={{color:"var(--color-box-header)",fontWeight:"bold"}}>Mounting Style</h2>
                                <p style={{margin: '15px',color:"var(--color-box-text)",fontWeight:"bold"}}>
                                    Style Determines how the plate and PCB are secured within the case (e.g., gasket mount,
                                    tray mount, top mount).
                                </p>
                            </div>
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "stretch",
                        width: "100%",
                        boxSizing: "border-box",
                    }}>
                        <div
                            id={"ChoosingBase"}
                            onMouseEnter={() => setHoveredBox("box1")}
                            onMouseLeave={() => setHoveredBox(null)}
                            style={{
                                flex: "1",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between", // Keeps spacing consistent
                                padding: "1em",
                                width: "100%",
                                minHeight: "250px", // Adjust as needed to set a base height
                                boxSizing: "border-box",
                                backgroundColor: "var(--color-box)",
                                border: "5px solid transparent",
                                borderRadius: "20px",
                                margin: "20px",
                                transition: 'border-color 0.3s ease',
                                borderColor: hoveredBox === "box1" ? '#553b7a' : 'transparent',
                            }}
                        >
                            <h3 style={{fontSize:"2em",color:"var(--color-box-header)",fontWeight:"bold"}}>
                                Choosing a Keyboard Base
                            </h3>
                            <section style={{display: "inline-flex",marginLeft: "50px",marginRight: "50px"}}>

                                <p style={{padding: "10px", color:"var(--color-box-text)", fontWeight: "bold"}}>
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
                                flex: "1",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between", // Keeps spacing consistent
                                padding: "1em",
                                width: "100%",
                                minHeight: "250px", // Adjust as needed to set a base height
                                boxSizing: "border-box",
                                backgroundColor: "var(--color-box)",
                                border: "5px solid transparent",
                                borderRadius: "20px",
                                margin: "20px",
                                transition: 'border-color 0.3s ease',
                                borderColor: hoveredBox === "box2" ? '#553b7a' : 'transparent',
                            }}>
                                <h3 style={{fontSize:"2em",color:"var(--color-box-header)",fontWeight:"bold"}}>
                                    Choosing a Mounting Style
                                </h3>
                            <section style={{display: "inline-flex",marginLeft: "50px",marginRight: "50px"}}>

                                <p style={{padding: "10px",color:"var(--color-box-text)",fontWeight:"bold"}}>
                                    Choose a keyboard mounting style based on feel and sound: tray mount for affordability,
                                    top mount for firmness, gasket mount for a cushioned feel, or plateless for flexibility.
                                    Your preference dictates the best fit!
                                </p>
                            </section>
                        </div>
                    </div>

                </section>
            </div>

            <div ref={plateSec} style={{padding: "10px", justifyContent: "space-between "}}>
                <h1 style={{ color: "var(--color-h1"}}>Keyboard Plates</h1>
                <section>
                    <p>
                        The keyboard plate is a crucial structural component in mechanical keyboards,
                        positioned between the switches and the PCB. It holds the switches in place,
                        impacts the typing feel, sound profile, and overall durability of the keyboard.
                    </p>
                    <p>Purpose of a Keyboard Plate
                        The plate serves multiple functions:

                        Switch Stability – Keeps switches firmly in place, preventing wobble.
                        Typing Feel – Influences the keyboard&#39;s flex, firmness, and sound.
                        Durability – Adds structural integrity to the build.
                        Acoustics – Affects the overall sound profile, from deep thocks to high-pitched clacks.
                        While some PCBs allow &#34;plate-less&#34; builds, most mechanical keyboards use plates for stability
                        and better consistency.</p>
                </section>
                <div className={"table-container"} style={{
                    // display: "flex",
                    // justifyContent: "center", // Centers horizontally
                    alignItems: "center", // Centers vertically (if needed)
                    marginTop: "2%",
                }}>
                    <table>
                        <tr>
                            <th>Material</th>
                            <th>Typing Feel</th>
                            <th>Sound Profile</th>
                            <th>Durability</th>
                            <th>Notes</th>
                        </tr>
                        {data.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td>{val.Material}</td>
                                    <td>{val.Typing_Feel}</td>
                                    <td>{val.Sound_Profile}</td>
                                    <td>{val.Durability}</td>
                                    <td>{val.Notes}</td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
                <p>Material Choice Considerations
                    If you want a softer typing experience → Polycarbonate, FR4, or POM
                    If you prefer firm and sharp feedback → Brass or Steel
                    If you want a middle ground → Aluminum or Carbon Fiber</p>
            </div>

            <div ref={switchSec}>
                <h1 style={{ color: "var(--color-h1"}}>Mechanical Switch</h1>
            </div>

            <div ref={stabSec}>
                <h1 style={{ color: "var(--color-h1"}}>Stabilizers</h1>
            </div>

            <div ref={keycapSec}>
                <h1 style={{ color: "var(--color-h1"}}>Keycaps</h1>
            </div>
        </div>

    );
}

export default HowToPage;