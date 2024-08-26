import { useEffect, useState } from "react";
import useWindowWidth from "../Hooks/useWindowWidth";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevMenuOpen => !prevMenuOpen);
    }
    const windowWidth = useWindowWidth();
    const deviceWidth = windowWidth < 876 ? "" : "visible";

    useEffect(() => {
        if(windowWidth > 876){
            setMenuOpen(false);
        }
    }, [windowWidth])

    return <nav class={`navMenu ${menuOpen ? "open" : ""} ${deviceWidth}`}>
        <a href="/" style={{marginLeft: '15%'}}>
            <img src="/Images/Logo.svg" alt="Little Lemon logo"></img>
        </a>

        <img  class="hamMenu" src="/Images/hamMenu.svg" alt="Hamburger Menu Icon" onClick={toggleMenu}></img>

        <ul class={`navLinks ${menuOpen && (windowWidth < 876) ? "visible" : ""}`}>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/">About</a>
            </li>
            <li>
                <a href="/">Menu</a>
            </li>
            <li>
                <a href="/">Reservations</a>
            </li>
            <li style={{backgroundColor: "#F4CE14"}}>
                <a href="/">Order Online</a>
            </li>
            <li>
                <a href="/">Login</a>
            </li>
        </ul>
    </nav>
}

export default Nav;