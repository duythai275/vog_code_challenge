import { useState } from 'react';
import { Link } from "react-router-dom";
import './header.styles.css';

const Header = ({history}) => {
    const [ showMenu, setShowMenu ] = useState("nav__menu");
    const [ menuItems, setMenuItems ] = useState(["nav__link active","nav__link","nav__link"]);

    return (
        <header className="l-header">
            <nav className="nav bd-grid">
                <div>
                    <a className="nav__logo">Vog React Code Challenge</a>
                </div>
                <div className={showMenu} id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a 
                                className={menuItems[0]} 
                                onClick={() => { 
                                    setMenuItems(["nav__link active","nav__link","nav__link"]); 
                                    setShowMenu("nav__menu");
                                }}
                            ><Link to="/">Home</Link></a>
                        </li>
                        <li className="nav__item">
                            <a 
                                className={menuItems[1]} 
                                onClick={() => { 
                                    setMenuItems(["nav__link","nav__link active","nav__link"]); 
                                    setShowMenu("nav__menu");
                                }}
                            ><Link to="/universities">Universities</Link></a>
                        </li>
                        <li className="nav__item">
                            <a 
                                className={menuItems[2]} 
                                onClick={() => { 
                                    setMenuItems(["nav__link","nav__link","nav__link active"]); 
                                    setShowMenu("nav__menu");
                                }}
                            ><Link to="/postal_lookup">Postal lookup</Link></a>
                        </li>
                    </ul>
                </div>
                <div className="nav__toggle" id="nav-toggle" onClick={() => (showMenu === "nav__menu") ? setShowMenu("nav__menu show") : setShowMenu("nav__menu")}>
                    <i className="bx bx-menu"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;