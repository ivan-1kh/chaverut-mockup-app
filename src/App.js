import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import DocumentPage from './pages/DocumentPage';
import LecturePage from './pages/LecturePage';
import SourceSheetPage from './pages/SourceSheetPage';
import ArticlePage from './pages/ArticlePage';

function App() {
  const [userLoggedIn, setUserLoggedIn] = React.useState(false);

  return (
    <div className="App container-column">
      <header style={{"display": "block"}}>
        <h1 className='container-row padding-v white-text'>Chaverut</h1>
      </header>

      <span style={{"display": "block", "minHeight": "50vh", "width": "100%", "marginTop": "6rem"}}>
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
          <Route path="/document" element={<DocumentPage />} />
          <Route path="/lecture" element={<LecturePage />} />
          <Route path="/source-sheet" element={<SourceSheetPage />} />
          <Route path="/article" element={<ArticlePage />} />
        </Routes>
      </span>
    </div>
  );
}

export default App;