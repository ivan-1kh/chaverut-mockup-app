import React from 'react';
import { useNavigate } from 'react-router-dom';
import CoursePreview from '../../components/CoursePreview';

const curriculumStyle2 = {
    fontSize: '3.5em',
    fontWeight: 'bold',
    display: 'inline-block',
    padding: '0.2em 0.5em',
    borderRadius: '0.2em',
    // background: 'rgba(173, 216, 230, 0.15)', // Light blue highlight
    letterSpacing: '0.05em',
    textShadow: '1px 1px 0 rgba(0, 0, 0, 0.05)',
};

const colorfulTextStyle2 = {
    color: '#333',
    backgroundImage: 'linear-gradient(90deg, #ffab91,rgb(185, 145, 158),rgb(106, 77, 111), #8e99f3)', // Multiple colors
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    display: 'inline',
};

const curriculumContainer2Style = {
    textAlign: 'center',
    padding: '30px',
    background: '#f8f8f8', // Light background for contrast
};

function SharedCurriculumPage() {

    const curriculumText = "Curriculum";
    const colorfulSpans = curriculumText.split("").map((letter, index) => (
        <span key={index} style={{ ...colorfulTextStyle2, WebkitTextFillColor: 'transparent' }}>
            {letter}
        </span>
    ));

    return (
        <div className='container-column-centered'>
            <div style={curriculumContainer2Style}>
                <h1 style={curriculumStyle2}>
                    {colorfulSpans}
                </h1>
            </div>

            <CoursePreview title="Shabbat Laws" photo="shabbat.jpg" />
            <CoursePreview title="Talmud and Halacha" photo="talmud.jpg" />
            <CoursePreview title="Biblical and Torah Study" photo="biblical.jpg" />
            <CoursePreview title="Chassidus and Spirituality" photo="chassidus.jpg" />
        </div>
    );
}

export default SharedCurriculumPage;
