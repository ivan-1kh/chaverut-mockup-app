import React from 'react';
import { useNavigate } from 'react-router-dom';

import PersonChat from '../../components/PersonChat';

function FeedPage() {

    const navigate = useNavigate();

    const handleSomething = () => {
        navigate('/idk');
    };

    return (
        <div className='container-column'>
            <p className='large-text'>You've got a match!</p>
            <PersonChat name="Yechiel Ben Ari" pfp="./pfp1.jpeg" />
        </div>
    );
}

export default FeedPage;
