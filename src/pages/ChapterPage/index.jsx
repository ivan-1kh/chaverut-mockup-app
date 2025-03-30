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
        window.open("https://a.co/d/2D0hRCP", "_blank").focus();
    };

    return (
        <div className='container-column'>
            <input className="bigBtn" onClick={openDocument} type="button" value="Document" />
            <br />
            <input className="bigBtn" onClick={openLecture} type="button" value="Lecture" />
            <br />
            <input className="bigBtn" onClick={openSourceSheet} type="button" value="Source Sheet" />
            <br />
            <input className="bigBtn" onClick={openArticle} type="button" value="Article" />
            <br />
            <input className="bigBtn" onClick={openBookAmazonAffiliate} type="button" value="Book (Amazon)" />
            <br />
        </div>
    );
}

export default ChapterPage;
