import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <FormattedMessage id="home" />
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            <FormattedMessage id="about" />
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/blog" className="nav-link">
            <FormattedMessage id="blog" />
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className="nav-link">
            <FormattedMessage id="projects" />
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/illustration" className="nav-link">
            <FormattedMessage id="illustration" />
          </Link>
        </li>
        <li className="nav-item">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="nav-link">
            <FormattedMessage id="github" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;





