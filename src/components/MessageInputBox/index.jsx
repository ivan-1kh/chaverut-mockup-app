import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function MessageInputBox() {

    const navigate = useNavigate();

    const handleNavigation = () => {

        navigate('/feed');
    };

    return (
        <div className='container-row padding-v'>
            <input className='textbox' type="text" placeholder="Enter message..." />
            <div className='button'>
                <img style={{"width": "2rem"}} src="msgIcon.svg" />
            </div>
        </div>
    );
}

export default MessageInputBox;
