import { useState, useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

const MainLayout = () => {
    const [error, setError] = useState(null);
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            console.log('Logout successful');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <div>Main Layout</div>
            <button onClick={handleLogout}>Logout</button>
            <Outlet />
        </div>
    )
}

export default MainLayout;
