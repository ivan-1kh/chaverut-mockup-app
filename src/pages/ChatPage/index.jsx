import React from 'react';
import { useNavigate } from 'react-router-dom';

import PersonChat from '../../components/PersonChat';
import MessageInputBox from '../../components/MessageInputBox';

function ChatPage() {

    const navigate = useNavigate();

    const handleSomething = () => {
        navigate('/shared-curriculum');
    };

    return (
    <div className='container-column'>
            <div className='container-column-centered chat-inside-header'>
                <PersonChat name="Yechiel Ben Ari" pfp="./pfp3.jpeg" callIcon="true" />
                <br />
                <input onClick={handleSomething} type="button" className='curriculum-button' value="Shared Curriculum" />
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <MessageInputBox />
        </div>
    );
}

export default ChatPage;
