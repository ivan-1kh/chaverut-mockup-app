import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function PersonChat({ name, pfp }) {

    const navigate = useNavigate();

    const handleNavigation = () => {

        navigate('/chat here???');
    };

    return (
        <div onClick={handleNavigation} className='container-row chat-item padding-v'>
            <img className='pfp' src={pfp} />
            <h2 className='white-text'>{name}</h2>
        </div>
    );
}

export default PersonChat;
