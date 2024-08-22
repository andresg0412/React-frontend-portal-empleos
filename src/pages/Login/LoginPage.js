import React, { useState } from "react";
import { login } from "../../services/authService";
import { loginSuccess } from "../../redux/reducers/authReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(email, password);
        try {
            
            const user = await login(email, password);
            dispatch(loginSuccess(user));
            navigate('/dashboard'); // Redirige a la ruta protegida
        } catch (error) {
            setError('Credenciales incorrectas');
        }
    };



    return (
        <div>
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
        </div>
    );
}

export default LoginPage;