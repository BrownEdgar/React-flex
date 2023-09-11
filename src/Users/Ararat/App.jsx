import React from 'react';
import { GoLocation } from 'react-icons/go';
import { AiOutlineFolder } from 'react-icons/ai';
import { AiOutlineIdcard } from 'react-icons/ai';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import './App.css';

function App() {
  const date = new Date();

  const obj = {
    id: "R134783",
    title: "2023 Intern - Software Engineer (Java or Javascript)",
    location: "Yerevan, Armenia",
    folder: "Other",
    date: date.toLocaleDateString(),
  };

  return (
    <div className="container">
      <img src="./public/main.jpg" alt="Main Image" className="top-image" />
      <div className="container_content">
        <p>{obj.title}</p>
        <div className="container_icons">
          <span>
            <GoLocation />{obj.location}
          </span>
          <span>
            <AiOutlineFolder />{obj.folder}
          </span>
          <span>
            <AiOutlineIdcard />{obj.id}
          </span>
          <span>
            <MdOutlineCalendarMonth />{obj.date}
          </span>
        </div>
        <div className="container_btn">
          <button>Save Job</button>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  );
}

export default App;
