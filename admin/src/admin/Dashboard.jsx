import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    console.log(user.name);

    return (
        <div>
            <p>{ user.name }</p>
            <div>Dashboard</div>
        </div>
    )
}

export default Dashboard;
