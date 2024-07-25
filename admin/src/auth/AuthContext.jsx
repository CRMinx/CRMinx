import { createContext, useState, useEffect } from 'react';
import axiosClient from '../axios-client';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            const response = await axiosClient.get('/user');
            setUser(response.data);
        } catch (error) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const login = async (userData) => {
        await axiosClient.get('/sanctum/csrf-cookie');
        const response = await axiosClient.post('/login', userData);
        checkAuth();
    };

    const register = async (userData) => {
        await axiosClient.get('/sanctum/csrf-cookie');
        const response = await axiosClient.post('/register', userData);
        checkAuth();
    };

    const logout = async () => {
        await axiosClient.post('/logout');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };
