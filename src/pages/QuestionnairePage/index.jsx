import React from 'react';
import { useNavigate } from 'react-router-dom';

function QuestionnairePage() {

    

    const navigate = useNavigate();

    const handleSomething = () => {
        navigate('/results');
    };

    const [questionNumber, setQuestionNumber] = React.useState(1);

    const questions = {
        1: {
            "Lol?": ["ahaha", "bobobaboob", "boob"],
        },
        2: {
            "aaaaa?": ["aaaa2", "boobs"],
        },
        3: {
            "q3?": ["efwwef", "wdoob", "boob"],
        },
        4: {
            "q4?": ["hig", "abcdefg", "432"],
        },
        5: {
            "q5?": ["stoned", "fdf", "3232323"],
        },
    };

    const currentQuestion = questions[questionNumber];

    if (!currentQuestion) {
        handleSomething();
        return <div>All questions answered!</div>;
    }

    const questionText = Object.keys(currentQuestion)[0];
    const answers = currentQuestion[questionText];

    const handleAnswerClick = () => {
        setQuestionNumber((prevNumber) => prevNumber + 1);
    };

    return (
        <div className='container-column-centered'>
            <h2>Getting to know you</h2>
            <h3>{questionNumber}/5</h3>
            <div>
                <h2>{questionText}</h2>
                {answers.map((answer, index) => (
                    <button key={index} onClick={handleAnswerClick}>
                        {answer}
                    </button>
                ))}
            </div>

        </div>
    );
}

export default QuestionnairePage;
