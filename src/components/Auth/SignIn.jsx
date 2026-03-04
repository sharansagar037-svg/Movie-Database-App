import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
    console.log('Current Backend URL:', BACKEND_URL);

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${BACKEND_URL}/login`, { email, password });
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('userName', res.data.name);
            navigate('/');
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong');
        }
    };

    return (
        <div className="auth">
            <div className="auth__container">
                <h1>Sign In</h1>
                {error && <p className="auth__error">{error}</p>}
                <form onSubmit={handleSignIn}>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit">Sign In</button>
                    <div className="auth__help">
                        <span>Remember me</span>
                        <span>Need help?</span>
                    </div>
                </form>
                <div className="auth__footer">
                    <span>New to Netflix? <span className="auth__link" onClick={() => navigate('/signup')}>Sign up now.</span></span>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
