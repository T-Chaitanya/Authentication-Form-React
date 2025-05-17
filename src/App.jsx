import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Profile from './pages/Profile'
import ProtectedRoute from './components/ProtectedRoute'
import Register from './pages/Register'

function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={
                <ProtectedRoute>
                    <Profile />
                </ProtectedRoute>
            } />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}

export default App
