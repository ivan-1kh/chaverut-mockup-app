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
            <nav>
                <Link to="/">Login</Link>
                <br />
                <Link to="/feed">Feed</Link>
            </nav>
        </div>
    );
}

export default NavigationBar;
