import React from 'react';
import { useNavigate } from 'react-router-dom';

import PersonChat from '../../components/PersonChat';
import MessageInputBox from '../../components/MessageInputBox';

function CoursePage() {

    const navigate = useNavigate();

    const handleSomething = () => {
        navigate('/chapter');
    };

    return (
        <div className='container-column'>
            <div className='container-column-centered'>
                <h3>Chapter 1</h3>
                <input onClick={handleSomething} type="button" value="Open Chapter" />
                <br />
                <h3>Chapter 2</h3>
                <input onClick={handleSomething} type="button" value="Open Chapter" />
                <br />
                <h3>Chapter 3</h3>
                <input onClick={handleSomething} type="button" value="Open Chapter" />
                <br />
                <h3>Chapter 4</h3>
                <input onClick={handleSomething} type="button" value="Open Chapter" />
                <br />
            </div>
        </div>
    );
}

export default CoursePage;
