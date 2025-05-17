import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../services/auth'
import { Link } from 'react-router-dom'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = await login(username, password)
            localStorage.setItem('user', JSON.stringify(data))
            navigate('/profile')
        } catch (err) {
            setError('Invalid credentials')
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username"
                       required/>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}
                       placeholder="Password" required/>
                <button type="submit">Login</button>
                <p>Don't have an account? <Link to="/register">Register here</Link></p>
            </form>
            {error && <p style={{color: 'red'}}>{error}</p>}
        </div>
    )
}

export default Login
