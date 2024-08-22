import instance from "./axios";
import { checkAuth } from "../redux/reducers/authReducer";


export const login = async (email, password) => {
    try {
        const response = await instance.post('/auth/login', { email, password });
        return response.data;
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        throw error;
    }    
}