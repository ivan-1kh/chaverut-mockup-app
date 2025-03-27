import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import LoginPage from "./pages/LoginPage";
import FeedPage from "./pages/FeedPage";

import NavigationBar from "./components/NavigationBar";
import ChatsPage from './pages/ChatsPage';
import ChatPage from './pages/ChatPage';
import SharedCurriculumPage from './pages/SharedCurriculumPage';

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
      </Routes>

      <footer>
        {userLoggedIn && <NavigationBar />}
      </footer>

    </div>
  );
}

export default App;
