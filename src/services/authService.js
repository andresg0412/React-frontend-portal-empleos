import instance from "./axios";
import { checkAuth } from "../redux/reducers/authReducer";


export const login = async (email, password) => {
    console.log(email, password);
    try {
        
        const response = await instance.post('/auth/login', { email, password });
        return response.data;
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        throw error;
    }    
}

export const check = async (dispatch) => {
    try {
        const user = await instance.get('/auth/protected', { withCredentials: true });
        if (user.data) {
            dispatch(checkAuth(user.data));
        }
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        throw error;
    }
}