import React from 'react';
import { useNavigate } from 'react-router-dom';

function SharedCurriculumPage() {

    const navigate = useNavigate();

    const handleSomething = () => {
        navigate('/course');
    };

    return (
        <div className='container-column-centered'>
            <p>Shabbat Laws</p>
            <input onClick={handleSomething} type="button" value="View Course" />
            <p>Talmud and Halacha</p>
            <input onClick={handleSomething} type="button" value="View Course" />
            <p>Biblical and Torah Study</p>
            <input onClick={handleSomething} type="button" value="View Course" />
            <p>Chassidus and Spirituality</p>
            <input onClick={handleSomething} type="button" value="View Course" />
        </div>
    );
}

export default SharedCurriculumPage;
