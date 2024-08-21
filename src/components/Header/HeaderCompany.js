import React from "react";
import '../../styles/Header.css';
import '../Buttons/Button';
import Button from "../Buttons/Button";
import Menu from "./Menu";

const HeaderCompany = () => {
    return (

        <header>
            <div className="header-superior">
                <div className="parent">
                    <div class="div1">LOGO</div>
                    <div class="div2">MENU</div>
                    <div class="div3">
                        <Button
                            text="Iniciar Sesión"
                            onClick={() => {}}
                            classname="button login"
                            type="button" />
                    </div>
                </div>
            </div>
            <div className="header-inferior">

                <div class="parent">
                    <div class="div1">
                        <Menu />
                    </div>
                    <div class="div2">
                        <Button 
                            text="Resitrate"
                            onClick={() => {}}
                            classname="button registro"
                            type="button"
                        />
                    </div>
                </div>

            </div>
        </header>


    );
};

export default HeaderCompany;