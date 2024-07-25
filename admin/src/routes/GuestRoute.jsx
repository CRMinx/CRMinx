import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

const GuestRoute = () => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div>Loading...</div>; // Loading state
    }

    return user ? <Navigate to="/" /> : <Outlet />;
};

export default GuestRoute;

