import React from 'react';
import './Main.css';

function About() {
  return (
    <div className="container">
      <h2 className="title">Welcome to the About Page</h2> {/* Apply styles to the title */}
      <p className="content-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus, odio
        eget ultricies placerat, arcu quam malesuada quam, in mollis libero elit eu
        massa.
      </p>
    </div>
  )
}
export default About