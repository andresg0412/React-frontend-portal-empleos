import React, { createContext, useState, useContext, useEffect } from 'react';
import { isAuthenticated, getAuthToken } from '../utils/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(isAuthenticated());

    useEffect(() => {
        setAuth(isAuthenticated());
    }, []);

    const login = () => setAuth(true);
    const logout = () => {
        localStorage.removeItem('access_token');
        setAuth(false);
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
