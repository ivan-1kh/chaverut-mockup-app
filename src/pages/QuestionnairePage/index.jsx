import React from 'react';
import { useNavigate } from 'react-router-dom';


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

function QuestionnairePage() {
  const navigate = useNavigate();
  const [questionNumber, setQuestionNumber] = React.useState(1);
  const [animationState, setAnimationState] = React.useState('fade-in'); // Initial state

  const questions = {
    1: {
      "Preference for learning partner:": ["Male", "Female", "Either / No Preference"],
    },
    2: {
      "Do you have any short-term or long-term goals for your Jewish education?": ["Enhance my understanding of Jewish texts", "Learn about Jewish holidays", "Study Jewish philosophy and history", "Spiritual Growth", "Other"],
    },
    3: {
      "What is your prior knowledge or experience with Jewish learning?": ["Beginner", "Intermediate", "Advanced", "Others"],
    },
    4: {
      "Do you prefer in-person or virtual sessions?": ["In-Person", "Virtual", "Both"],
    },
    5: {
      "How much time would you like to dedicate to Jewish learning each week?": ["1", "2", "3+"],
    },
    6: {
      "What time of day would work best for you to learn?": ["Morning", "Afternoon", "Night"],
    },
    7: {
      "How do you prefer to learn?": ["Collaborative and Interactive", "Focused on Text and Application", "Clear Explanations and Patient Discussion", "Reflection and Personal Application", "Casual, Yet Productive Conversations", "Others"],
    },
    8: {
      "What is your preferred pace of learning? (e.g., fast-paced or more gradual and reflective)": ["Fast paced", "Gradual and Reflective"],
    },
    9: {
      "Are you comfortable with a more structured curriculum, or would you prefer flexibility in your study path?": ["Structured Curriculum", "Flexibility"],
    },
    10: {
      "Are there any particular areas of Jewish study that interest you most?": ["Talmud and Halacha", "Jewish History", "Biblical and Torah Study", "Jewish Philosophy", "Kabbalah and Mysticism", "Jewish Ethics and Mussar", "Chassidus and Spirituality", "Contemporary Jewish Thought and Social Issues", "Others"],
    },
    11: {
      "Are you more interested in traditional texts (e.g., Talmud, Tanakh) or contemporary Jewish thought?": ["Traditional Texts", "Contemporary Jewish Thought"],
    },
    12: {
      "Do you have any interest in learning about Jewish culture, customs, or modern issues within the Jewish world?": ["Yes", "No"],
    },
    13: {
      "Have you previously studied Jewish texts or subjects?": ["Yes", "No"],
    },
    14: {
      "What have been your challenges or frustrations with Jewish learning in the past?": ["Complexity of Jewish Law", "Time Constraints", "Understanding of Texts", "Differences in Interpretations", "Access to Resources", "Balancing Personal Beliefs with Tradition", "Maintaining Consistency", "Other"],
    },
    15: {
      "What are your primary goals for Jewish learning?": ["Deepen Knowledge of Jewish Texts", "Strengthen Personal Connection to Jewish Identity", "Learn Jewish Ethics and Values", "Understand Jewish History and Culture", "Explore Contemporary Jewish Issues", "Others"],
    },
  };

  const currentQuestion = questions[questionNumber];

  if (!currentQuestion) {
    navigate('/results');
    return <div>All questions answered!</div>;
  }

  const questionText = Object.keys(currentQuestion)[0];
  const answers = currentQuestion[questionText];

  const handleAnswerClick = () => {
    setAnimationState('fade-out');

    setTimeout(() => {
      setQuestionNumber((prevNumber) => prevNumber + 1);
      setAnimationState('fade-start-bottom');

      setTimeout(() => {
        setAnimationState('fade-in-from-bottom');
      }, 10);
    }, 300); // Match CSS transition duration
  };

  
  const curriculumText = "Getting to know you";
  const colorfulSpans = curriculumText.split("").map((letter, index) => (
      <span key={index} style={{ ...colorfulTextStyle2, WebkitTextFillColor: 'transparent' }}>
          {letter}
      </span>
  ));

  return (
    <div className="container-column-centered beginUp">


      <div style={curriculumContainer2Style}>
                <h1 style={curriculumStyle2}>
                    {colorfulSpans}
                </h1>
            </div>

      <h3>{questionNumber}/{Object.keys(questions).length}</h3>
      <div className={`container-column-centered-q ${animationState}`}>
        <h2>{questionText}</h2>
        {answers.map((answer, index) => (
          <button className="add-margin" key={index} onClick={handleAnswerClick}>
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionnairePage;
