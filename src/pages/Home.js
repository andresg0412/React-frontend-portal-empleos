import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
const Home = () => {
    const navigate = useNavigate();

    const handleEmployeesClick = () => {
        navigate('/empleados');
    };

    const handleCompanyClick = () => {
        navigate('/empresa');
    };

    return (
        <div className="container">
            <h1>Bienvenido al Portal de Empleo</h1>
            <div className="buttonContainer">
                <button className="button" onClick={handleEmployeesClick}>
                    Estoy buscando empleo
                </button>
                <button className="button" onClick={handleCompanyClick}>
                    Estoy contratando
                </button>
            </div>
        </div>
    );
};


export default Home;
