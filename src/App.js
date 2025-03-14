import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import LoginPage from "./pages/LoginPage";
import FeedPage from "./pages/FeedPage";

import NavigationBar from "./components/NavigationBar";

function App() {

  const [userLoggedIn, setUserLoggedIn] = React.useState(false);

  return (
    <div className="App">

      <header>
        {userLoggedIn && <h1>Chaverut</h1>}
      </header>

      <Routes>
        <Route path="/" element={<LoginPage userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} />} />
        <Route path="/feed" element={<FeedPage />} />
      </Routes>

      <footer>
        {userLoggedIn && <NavigationBar />}
      </footer>

    </div>
  );
}

export default App;
