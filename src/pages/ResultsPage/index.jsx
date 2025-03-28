import React from 'react';
import { useNavigate } from 'react-router-dom';

function ResultsPage() {

    const navigate = useNavigate();

    const handleSomething = () => {
        navigate('/feed');
    };

    return (
        <div className='container-column'>
            Here are your results:
            bla bla
            <input onClick={handleSomething} type="button" value="Go to feed (matching)" />
        </div>
    );
}

export default ResultsPage;
