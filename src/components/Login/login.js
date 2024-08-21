import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.module.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            console.log(email, password);
            const response = await axios.post('http://localhost:8000/api/token', {
                email,
                password,
            });
            const { access_token } = response.data;
            console.log("TOKEN ES:", access_token);
            localStorage.setItem('access_token', access_token); // Almacena el token en localStorage
            navigate('/dashboard'); // Redirige a la ruta protegida
        } catch (error) {
            setError('Credenciales incorrectas');
        }
    };

    return (
        <div className='container'>
            <div className="loginForm">
                <h2 className='title'>Iniciar Sesión</h2>
                <form onSubmit={handleLogin}>
                    <div className='inputGroup'>
                        <label htmlFor='email' className='label'>Email</label>
                        <input
                            type="email"
                            id='email'
                            className='input'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className='inputGroup'>
                        <label htmlFor='password' className='label'>Password</label>
                        <input
                            type="password"
                            id='password'
                            className='input'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className='submitButton'>Login</button>
                </form>
                {error && <p>{error}</p>}
            </div>
        </div>
    );
};

export default Login;
