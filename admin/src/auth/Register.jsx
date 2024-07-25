import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPassword_confirmation] = useState('');
    const [error, setError] = useState(null);
    const { register } = useContext(AuthContext);

    const handleRegister = async () => {
        try {
            const userData = { name, email, password, password_confirmation };
            const response = await register(userData);
            console.log('Registration successful');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password_confirmation}
                onChange={(e) => setPassword_confirmation(e.target.value)}
            />
            <button onClick={handleRegister}>Register</button>

            <Link to="/login">Have an account?</Link>

            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Register;

