import React from 'react';
import { useNavigate } from 'react-router-dom';

function ResultsPage() {

    const navigate = useNavigate();

    const handleSomething = () => {
        navigate('/feed');
    };

    return (
        <div className='container-column'>
            <h2>Here are your results:</h2>
            <div style={{
                border: "1px solid #ccc",
                padding: "15px",
                borderRadius: "5px",
                fontFamily: "sans-serif"
            }}>
                <h3>Learning Goals &amp; Objectives</h3>
                <ul style={{
                    listStyle: "none",
                    paddingLeft: "0",
                }}>
                    <li><strong>Deepen Knowledge of Jewish Texts</strong></li>
                    <li>Enhance my understanding of Jewish texts</li>
                </ul>
                <p><strong>Level:</strong> Intermediate</p>

                <h3>Learning Preferences</h3>
                <ul style={{
                    listStyle: "none",
                    paddingLeft: "0",
                }}>
                    <li><strong>Frequency:</strong> 2</li>
                    <li><strong>Preferred Time:</strong> Afternoon</li>
                    <li><strong>Focus:</strong> Text and Application</li>
                </ul>

                <h3>Learning Style &amp; Pace</h3>
                <ul style={{
                    listStyle: "none",
                    paddingLeft: "0",
                }}>
                    <li><strong>Pace:</strong> Gradual and Reflective</li>
                    <li><strong>Structure:</strong> Structured Curriculum</li>
                </ul>

                <h3>Interests &amp; Topics</h3>
                <ul style={{
                    listStyle: "none",
                    paddingLeft: "0",
                }}>
                    <li>Talmud and Halacha</li>
                    <li>Shabbat Laws</li>
                    <li>Biblical and Torah Study</li>
                    <li>Chassidus and Spirituality</li>
                </ul>
                <p><strong>Interested in Traditional Texts:</strong> Yes</p>

                <h3>Previous Experience &amp; Expectations</h3>
                <ul style={{
                    listStyle: "none",
                    paddingLeft: "0",
                }}>
                    <li><strong>Previous Experience:</strong> Yes</li>
                    <li><strong>Time Constraints:</strong> Understanding of Texts</li>
                </ul>
            </div>

<br />

            <input onClick={handleSomething} type="button" value="Go to feed" />
        </div>
    );
}

export default ResultsPage;
