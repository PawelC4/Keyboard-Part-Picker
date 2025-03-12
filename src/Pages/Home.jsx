import KeyboardLogo from '/Users/pawelcieslak/WebstormProjects/keyboard_project/src/assets/kbpp_logo.png'
import "./Home.css"
import {useNavigate} from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const sendToPage2 = () => {
        navigate('/BuildPage');
    };
    const sendToHowTo = () => {
        navigate('/howTo');
    };

    return (
        <>
            <div>
                <a href="#" onClick={() => navigate(0)}>
                    <img src={KeyboardLogo} className="logo Keyboard" alt="Keyboard logo"/>
                </a>
            </div>
            <h1 style={{color: "var(--color-h1)"}}>Welcome to Keyboard Part Picker</h1>
            <div className="card">
                <button className = "HomeBtn" onClick={sendToPage2} style={{ width: "20vw"}} type="button">
                    Let&#39;s Build
                </button>
            </div>
            <button className = "HomeBtn" onClick={sendToHowTo} style={{ width: "20vw"}} type="button">
                How to build a keyboard?
            </button>
        </>
    )
}
export default Home;