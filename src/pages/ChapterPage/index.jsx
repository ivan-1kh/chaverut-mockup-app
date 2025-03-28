import React from 'react';
import { useNavigate } from 'react-router-dom';

import PersonChat from '../../components/PersonChat';
import MessageInputBox from '../../components/MessageInputBox';

function ChapterPage() {

    const navigate = useNavigate();

    const openDocument = () => {
        navigate('/shared-curriculum');
    };

    const openLecture = () => {
        navigate('/shared-curriculum');
    };

    const openSourceSheet = () => {
        navigate('/shared-curriculum');
    };

    const openArticle = () => {
        navigate('/shared-curriculum');
    };

    const openBookAmazonAffiliate = () => {
        navigate('/shared-curriculum');
    };

    return (
        <div className='container-column'>
            <input onClick={openDocument} type="button" value="Document" />
            <br />
            <input onClick={openLecture} type="button" value="Lecture" />
            <br />
            <input onClick={openSourceSheet} type="button" value="Source Sheet" />
            <br />
            <input onClick={openArticle} type="button" value="Article" />
            <br />
            <input onClick={openBookAmazonAffiliate} type="button" value="Book (Amazon)" />
            <br />
        </div>
    );
}

export default ChapterPage;
