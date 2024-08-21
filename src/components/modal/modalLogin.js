import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useAuth } from '../../context/AuthContext';
import './modalLogin.css';

const ModalLogin = ({ isOpen, onClose }) => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    if (!isOpen) return null;

    const handleLogin = async (e) => {
        e.preventDefault();
        await login(email, password);
        onClose();
    };

    return ReactDOM.createPortal(
        <div className="overlay">
            <div className="modal">
                <h2>Iniciar sesión</h2>
                <form onSubmit={handleLogin}>
                    <div className="inputGroup">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Iniciar sesión</button>
                </form>
                <button className="closeButton" onClick={onClose}>Cerrar</button>
            </div>
        </div>,
        document.body
    );
};

export default ModalLogin;
