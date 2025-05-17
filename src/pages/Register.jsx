import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from '../services/auth'
import { Link } from 'react-router-dom'

function Register() {
    const [form, setForm] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: ''
    })
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const newUser = await register(form)
            alert('Registration successful! Now log in.')
            navigate('/login')
        } catch (err) {
            setError('Registration failed. Try again.')
        }
    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input name="firstName" placeholder="First Name" onChange={handleChange} required/>
                <input name="lastName" placeholder="Last Name" onChange={handleChange} required/>
                <input name="email" placeholder="Email" type="email" onChange={handleChange} required/>
                <input name="username" placeholder="Username" onChange={handleChange} required/>
                <input name="password" placeholder="Password" type="password" onChange={handleChange} required/>
                <button type="submit">Register</button>
                <p>Already have an account? <Link to="/login">Login here</Link></p>
            </form>
            {error && <p style={{color: 'red'}}>{error}</p>}
        </div>
    )
}

export default Register
