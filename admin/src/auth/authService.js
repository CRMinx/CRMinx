import axiosClient from '../axios-client';
import { useNavigate } from 'react-router-dom';

// Function to get CSRF token
const getCsrfToken = async () => {
    await axiosClient.get('/sanctum/csrf-cookie');
};

// Register function
export const register = async (userData) => {
    try {
        await getCsrfToken();
        const response = await axiosClient.post('/register', userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Login function
export const login = async (userData) => {
    try {
        await axiosClient.get('/sanctum/csrf-cookie');
        const response = await axiosClient.post('/login', userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Logout function
export const logout = async () => {
    try {
        const response = await axiosClient.post('/logout');
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

