import React from 'react';
import { useNavigate } from 'react-router-dom';

import PersonChat from '../../components/PersonChat';
import MessageInputBox from '../../components/MessageInputBox';

function ChapterPage() {

    const navigate = useNavigate();

    const openDocument = () => {
        navigate('/document');
    };

    const openLecture = () => {
        navigate('/lecture');
    };

    const openSourceSheet = () => {
        navigate('/source-sheet');
    };

    const openArticle = () => {
        navigate('/article');
    };

    const openBookAmazonAffiliate = () => {
        window.open("https://a.co/d/2D0hRCP", "_blank").focus();
    };

    return (
        <div className='container-column'>
            
                <h1 style={{"margin-top": "5rem"}}>Foundations of Shabbat</h1>
            <input className="bigBtn chptr" onClick={openDocument} type="button" value="Document" />
            <br />
            <input className="bigBtn chptr" onClick={openLecture} type="button" value="Lecture" />
            <br />
            <input className="bigBtn chptr" onClick={openSourceSheet} type="button" value="Source Sheet" />
            <br />
            <input className="bigBtn chptr" onClick={openArticle} type="button" value="Article" />
            <br />
            <input className="bigBtn chptr" onClick={openBookAmazonAffiliate} type="button" value="Book (Amazon)" />
            <br />
        </div>
    );
}

export default ChapterPage;
