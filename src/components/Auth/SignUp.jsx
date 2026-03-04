import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

function SignUp() {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${BACKEND_URL}/signup`, { name, mobile, email, password });
            const loginRes = await axios.post(`${BACKEND_URL}/login`, { email, password });
            localStorage.setItem('token', loginRes.data.token);
            localStorage.setItem('userName', loginRes.data.name);
            navigate('/');
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong');
        }
    };

    return (
        <div className="auth">
            <div className="auth__container">
                <h1>Sign Up</h1>
                {error && <p className="auth__error">{error}</p>}
                <form onSubmit={handleSignUp}>
                    <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
                    <input type="text" placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit">Sign Up</button>
                </form>
                <span onClick={() => navigate('/login')}>Already have an account? Sign In now.</span>
            </div>
        </div>
    );
}

export default SignUp;
