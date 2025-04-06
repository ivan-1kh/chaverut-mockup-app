import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function PersonChat({ name, pfp, callIcon }) {

    const navigate = useNavigate();

    const handleNavigation = () => {

        navigate('/chats');
    };

    return (
        <div onClick={handleNavigation} className='container-row chat-item padding-v'>
            <img className='pfp' src={pfp} />
            <h2 className='white-text chat-item-name'>{name}</h2>
            {callIcon && <img className='callIcon' src="callIcon.png" />}
        </div>
    );
}

export default PersonChat;
