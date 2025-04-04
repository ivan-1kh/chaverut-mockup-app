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
        <div style={{"margin-top": "6rem"}} className='container-column'>
            <div className='container-column-centered'>
                <h1 style={{"margin-top": "5rem"}}>Shabbat Laws</h1>
                <h3>Chapter 1</h3>
                <input onClick={handleSomething} type="button" value="Foundations of Shabbat" />
                <br />
                <h3>Chapter 2</h3>
                <input onClick={handleSomething} type="button" value="The 39 Melachot" />
                <br />
                <h3>Chapter 3</h3>
                <input onClick={handleSomething} type="button" value="Muktzeh" />
                <br />
                <h3>Chapter 4</h3>
                <input onClick={handleSomething} type="button" value="Eruv and Carrying" />
                <br />
                <h3>Chapter 5</h3>
                <input onClick={handleSomething} type="button" value="Food Preparation" />
                <br />
                <h3>Chapter 6</h3>
                <input onClick={handleSomething} type="button" value="Electricity and Technology" />
                <br />
                <h3>Chapter 7</h3>
                <input onClick={handleSomething} type="button" value="Walking and Boundaries" />
                <br />
                <h3>Chapter 8</h3>
                <input onClick={handleSomething} type="button" value="The Spirit of Shabbat" />
                <br />
            </div>
        </div>
    );
}

export default CoursePage;
