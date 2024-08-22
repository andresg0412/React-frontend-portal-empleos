import React, { useEffect, useState } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { check } from '../services/authService';
import { useNavigate } from 'react-router-dom';


const PrivateRoute = ({ element, ...rest }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isCheckingAuth, setIsCheckingAuth] = useState(true);

    useEffect(() => {
        const userAuth = async () => {
            try {
                const user = await check(dispatch);
            } catch (error) {
                if(error.response && error.response.status === 401) {
                    navigate('/login');
                }else{
                    console.log(error);
                }
            }finally{
                setIsCheckingAuth(false);
            }
        }

        userAuth();
    }, [dispatch]);

    
const isAuthenticated = useSelector((state) => !isCheckingAuth && state.auth.isAuthenticated);

if (isCheckingAuth) {
    return <div>Verificando autenticación...</div>
};

return isAuthenticated ? element : <Navigate to="/login" />;
};


export default PrivateRoute;
