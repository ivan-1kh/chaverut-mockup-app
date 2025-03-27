import React from 'react';
import { useNavigate } from 'react-router-dom';

import PersonChat from '../../components/PersonChat';

function ChatsPage() {

    const navigate = useNavigate();

    const handleSomething = () => {
        navigate('/chat');
    };

    return (
        <div className='container-column'>
            <p className='large-text'>Chats</p>
            <div className='container-column-centered' onClick={handleSomething}>
                <PersonChat name="Yechiel Ben Ari" pfp="./pfp1.jpeg" />
                <br />
                <PersonChat name="Donald Dukski" pfp="./pfp2.jpg" />
                <br />
                <PersonChat name="Popeye Ben Yehuda" pfp="./pfp3.webp" />
            </div>
        </div>
    );
}

export default ChatsPage;
