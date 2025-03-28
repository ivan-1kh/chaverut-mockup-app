import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import LoginPage from "./pages/LoginPage";
import FeedPage from "./pages/FeedPage";

import ChatsPage from './pages/ChatsPage';
import ChatPage from './pages/ChatPage';
import SharedCurriculumPage from './pages/SharedCurriculumPage';
import CoursePage from './pages/CoursePage';
import ChapterPage from './pages/ChapterPage';
import QuestionnairePage from './pages/QuestionnairePage';
import ResultsPage from './pages/ResultsPage';

function App() {

  const [userLoggedIn, setUserLoggedIn] = React.useState(false);

  return (
    <div className="App container-column">

      <header>
        <h1 className='container-row padding-v white-text'>Chaverut</h1>
      </header>

      <Routes>
        <Route path="/" element={<LoginPage userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/chats" element={<ChatsPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/shared-curriculum" element={<SharedCurriculumPage />} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/chapter" element={<ChapterPage />} />
        <Route path="/questionnaire" element={<QuestionnairePage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </div>
  );
}

export default App;
