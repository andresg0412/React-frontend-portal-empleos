import axios from 'axios';
import { getAuthToken } from '../utils/auth'

// Configura la URL base de la API
const API_BASE_URL = 'http://localhost:8000'; // Reemplaza con la URL de tu API

const api = axios.create({
    baseURL: 'http://localhost:8000',
});

api.interceptors.request.use(
    (config) => {
        const token = getAuthToken();
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Función para obtener las vacantes
export const getVacantes = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/vacantes/`);
        return response.data; // Devuelve los datos de la respuesta
    } catch (error) {
        console.error('Error al obtener las vacantes:', error);
        throw error; // Propaga el error para manejarlo en el componente
    }
};

export const createVacante = async (vacante) => {
    try {
        
        const response = await api.post(`${API_BASE_URL}/vacantes/`, vacante);
        return response.data; // Devuelve los datos de la respuesta
    } catch (error) {
        console.error('Error al crear la vacante:', error);
        throw error; // Propaga el error para manejarlo en el componente
    }
};

export const updateVacante = async (vacanteId, vacante) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/vacantes/${vacanteId}/`, vacante);
        return response.data; // Devuelve los datos de la respuesta
    } catch (error) {
        console.error('Error al actualizar la vacante:', error);
        throw error; // Propaga el error para manejarlo en el componente
    }
};

export const deleteVacante = async (vacanteId) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/vacantes/${vacanteId}/`);
        return response.data; // Devuelve los datos de la respuesta
    } catch (error) {
        console.error('Error al eliminar la vacante:', error);
        throw error; // Propaga el error para manejarlo en el componente
    }
};

export const finalizarVacante = async (vacanteId) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/vacantes/${vacanteId}/finalizar/`);
        return response.data; // Devuelve los datos de la respuesta
    } catch (error) {
        console.error('Error al finalizar la vacante:', error);
        throw error; // Propaga el error para manejarlo en el componente
    }
}