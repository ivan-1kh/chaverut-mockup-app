import React from 'react';
import { useNavigate } from 'react-router-dom';

function FeedPage() {

    const navigate = useNavigate();

    const handleSomething = () => {
        navigate('/idk');
    };

    return (
        <div>
            <h1>Feed</h1>
        </div>
    );
}

export default FeedPage;
