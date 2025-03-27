import React from 'react';
import { useNavigate } from 'react-router-dom';

import PersonChat from '../../components/PersonChat';
import MessageInputBox from '../../components/MessageInputBox';

function SharedCurriculumPage() {

    const navigate = useNavigate();

    const handleSomething = () => {
        navigate('/shared-curriculum');
    };

    return (
        <div className='container-column-centered'>
            <p>Laws</p>
            <input type="button" value="View Course" />
            <p>Shabbat</p>
            <input type="button" value="View Course" />
        </div>
    );
}

export default SharedCurriculumPage;
