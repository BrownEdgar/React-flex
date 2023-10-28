import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Post from './Post';
import About from './About';
import Blog from './Blog';
import Projects from './Projects';
import Illustration from './Illustration';
import { IntlProvider } from 'react-intl';
import { messages } from './translation';
import './App.css';

function App() {
  const [locale, setLocale] = useState('en');

  const handleChange = (event) => {
    setLocale(event.target.value);
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Router>
        <div className="app-container">
          <Navbar />
          <div className="language-select">
            <select className = "translation-select" value={locale} onChange={handleChange}>
              <option value="en">English</option>
              <option value="ru">Русский</option>
              <option value="hy">Հայերեն</option>
            </select>
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <Post contentKey="samplePost" titleKey="samplePostTitle" />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/illustration" element={<Illustration />} />
          </Routes>
        </div>
      </Router>
    </IntlProvider>
  );
}

export default App;








