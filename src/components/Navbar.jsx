import React, { useState, useEffect } from 'react';
import './Navbar.css';

import { useNavigate } from 'react-router-dom';

function Navbar() {
    const [show, handleShow] = useState(false);
    const navigate = useNavigate();
    const isLoggedIn = !!localStorage.getItem('token');
    const userName = localStorage.getItem('userName');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        navigate('/login');
    };

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix Logo"
                onClick={() => navigate('/')}
            />
            <div className="nav__links">
                <span onClick={() => navigate('/')}>Home</span>
                <span>TV Shows</span>
                <span>Movies</span>
                <span>New & Popular</span>
                <span>My List</span>
            </div>
            {isLoggedIn ? (
                <div className="nav__user">
                    <span>{userName}</span>
                    <img
                        className="nav__avatar"
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt="Netflix Avatar"
                        onClick={logout}
                        title="Logout"
                    />
                </div>
            ) : (
                <button className="nav__login" onClick={() => navigate('/login')}>Sign In</button>
            )}
        </div>
    );
}

export default Navbar;
