import './App.css'
import {Route, Routes} from "react-router-dom";
import HowToPage from "./Pages/HowTo.jsx";
import BuildPage from "./Pages/BuildPage.jsx";
import Navbar from "./components/Navbar";
import About from "./Pages/about.jsx";
import Home from "./Pages/Home.jsx";
//import ColorSchemeToggle from "./Pages/ColorSchemeToggle.jsx";
//import ColorSchemeToggleOther from "./Pages/ColorSchemeToggleOther.jsx";
import {DarkModeToggle} from "./components/Navbar/ColorSchemeToggle.jsx";


function App() {
    return (
        <>
            <Navbar>
                <DarkModeToggle />
            </Navbar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/BuildPage" element={<BuildPage />} />
                <Route path="/howTo" element={<HowToPage />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    );
}

export default App
