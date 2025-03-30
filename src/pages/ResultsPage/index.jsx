import React from 'react';
import { useNavigate } from 'react-router-dom';

function ResultsPage() {

    const navigate = useNavigate();

    const handleSomething = () => {
        navigate('/feed');
    };

    return (
        <div className='container-column'>
            <h2>Here are your results:</h2>
            <p style={{"text-align": "center"}}>Your learning style appears to be more independent.</p>
            <input onClick={handleSomething} type="button" value="Go to feed" />
        </div>
    );
}

export default ResultsPage;
