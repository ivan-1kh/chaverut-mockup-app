import React from 'react';
import { useNavigate } from 'react-router-dom';

import PersonChat from '../../components/PersonChat';

function FeedPage() {

    const [matched, setMatched] = React.useState(false);

    const navigate = useNavigate();

    const handleSomething = () => {
        navigate('/idk');
    };

    return (
        <div className='container-column'>
            {matched ? 
            <><p className='large-text'>You've got a match!</p>
            <PersonChat name="Yechiel Ben Ari" pfp="./pfp1.jpeg" /></> :
            
            <>
            
            <div className='matchingContainer'>
                <img className="bigPfp" src="./pfp1.jpeg" />
                <div className='acceptOrRejectContainer'>
                <input className="rejectBtn" type='button' value="Reject" onclick={() => {}} />
                <input className="acceptBtn" type='button' value="Accept" onClick={() => setMatched(true)} />
                </div>
            </div>

            </>}
        </div>
    );
}

export default FeedPage;
