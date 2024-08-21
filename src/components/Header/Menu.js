import React from "react";
import { Link } from "react-router-dom";
import '../../styles/Menu.css';

const Menu = () => {
    return (
        <nav className="menu">
            <Link to="/empleados"><p>Empleados</p></Link>
            <Link to="/empresa"><p>Empresa</p></Link>

        </nav>
    );
};

export default Menu;