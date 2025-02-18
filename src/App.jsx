import KeyboardLogo from './assets/kbpp_logo.png'
import './App.css'
import {Route, Routes, useNavigate} from "react-router-dom";
import Page2 from "./BuildPage.jsx";
import HowToPage from "./HowTo.jsx";

function Home() {
    const navigate = useNavigate();

    const sendToPage2 = () => {
        navigate('/page2');
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
            <h1>Welcome to Keyboard Part Picker</h1>
            <div className="card">
                <button onClick={sendToPage2} type="button">
                    Let&#39;s Build
                </button>
            </div>
            <button onClick={sendToHowTo} className={ "how-to-build"}>
                How to build a keyboard?
            </button>
        </>
    )
}
function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/howTo" element={<HowToPage />} />
        </Routes>
    );
}

export default App
