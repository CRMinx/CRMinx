import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

const ProtectedRoute = () => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div>Loading...</div>; // Loading state
    }

    return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
