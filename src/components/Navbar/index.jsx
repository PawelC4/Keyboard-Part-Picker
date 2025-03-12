import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements.jsx";
import {DarkModeToggle} from "./ColorSchemeToggle.jsx";
// import KeyboardLogo from '/Users/pawelcieslak/WebstormProjects/keyboard_project/src/assets/kbpp_logo.png';


const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars/>
                <NavMenu>
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/BuildPage" activeStyle>
                        BuildPage
                    </NavLink>
                    <NavLink to="/HowTo" activeStyle>
                        HowTo
                    </NavLink>
                    <NavLink to="/about">
                        About
                    </NavLink>
                    {/*<NavBtnLink to='/sign-in'>Sign In</NavBtnLink>*/}
                </NavMenu>
                <NavBtn>
                    {/*<NavBtnLink to="/">*/}
                    {/*    <img className="logo"*/}
                    {/*         src="src/assets/white_kbpp_Logo.png"*/}
                    {/*         alt="img" style={{height:'40px', width:'60px'}} />*/}
                    {/*</NavBtnLink>*/}
                    <DarkModeToggle/>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;