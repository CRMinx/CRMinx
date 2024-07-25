import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import { AuthProvider } from './auth/AuthContext'
import './App.css'

function App() {
    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    );
}

export default App
