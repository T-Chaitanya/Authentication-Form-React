import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Profile() {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const stored = localStorage.getItem('user')
        if (stored) setUser(JSON.parse(stored))
    }, [])

    const logout = () => {
        localStorage.removeItem('user')
        navigate('/login')
    }

    if (!user) return <p>Loading...</p>

    return (
        <div>
            <h2>Welcome, {user.firstName}</h2>
            <p>Email: {user.email}</p>
            <p>Token: {user.accessToken}</p>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Profile
