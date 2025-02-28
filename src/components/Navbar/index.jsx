import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements.jsx";

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to="/" >
                        Home
                    </NavLink>
                    <NavLink to="/BuildPage" activeStyle>
                        BuildPage
                    </NavLink>
                    <NavLink to="/HowTo" activeStyle>
                        HowTo
                    </NavLink>
                    <NavLink to="/about" >
                        About
                    </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                {/*<NavBtn>*/}
                {/*    <NavBtnLink to="/signin">*/}
                {/*        Sign In*/}
                {/*    </NavBtnLink>*/}
                {/*</NavBtn>*/}
            </Nav>
        </>
    );
};

export default Navbar;