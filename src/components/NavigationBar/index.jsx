import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function NavigationBar() {

    const navigate = useNavigate();

    const handleNavigation = () => {

        navigate('/feed');
    };

    return (
        <div>
            <nav className='container-row padding-v'>
                <Link to="/" className='white-text'>Login</Link>
                <br />
                <Link to="/feed" className='white-text'>Feed</Link>
            </nav>
        </div>
    );
}

export default NavigationBar;
