import { Link } from "react-router-dom";
import { Menu } from "../ham-menu/ham-menu";
import "./header.css";
import { useTheme } from "../../context/ThemeContext/useTheme";
import { useCallback, useState } from "react";


export default function Header() {
    const { theme, toggleTheme } = useTheme();

    const [isOpen, setOpen] = useState<boolean>(false);

    const handleMenuCallBack = useCallback(() => {
        setOpen(prev => !prev);
    }, []);


    return (
        <>
            <header>
                <nav className="navbar">
                    <div className="nav-container">
                        <a href="#" className="logo">LUXE</a>
                        <ul className="nav-menu" id="navMenu">
                            <li><Link to="/">Main</Link></li>
                            <li><Link to="/catalog">Сatalog</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>

                        <div className="nav-icons">
                            <span onClick={toggleTheme} className="nav-icon">{theme === "light" ? "☀️" : "🌙"}</span>
                            <span className="nav-icon"><Link to="/cart">🛒</Link></span>
                            <Menu isOpen={isOpen} setOpen={setOpen} />
                        </div>
                    </div>
                </nav>
            </header>
            <div style={isOpen === true ? { display: "block" } : { display: "none" }} className="media-menu">
                <button className="close-btn" onClick={() => handleMenuCallBack()}>✕</button>
                <ul className="nav-menu" id="navMenu">
                    <li onClick={() => handleMenuCallBack()}><Link to="/">Main</Link></li>
                    <li onClick={() => handleMenuCallBack()}><Link to="/catalog">Сatalog</Link></li>
                    <li onClick={() => handleMenuCallBack()}><Link to="/about">About</Link></li>
                    <li onClick={() => handleMenuCallBack()}><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </>
    )
}