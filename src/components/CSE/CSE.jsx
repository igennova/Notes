import React from 'react';
import './CSE.css'; // Import the necessary CSS for styling

const CSEComponent = () => {
  const cseData = {
    semester1: [
      {
        subject: "Mathematics",
        units: [
          { name: "Unit 1", link: "https://drive.google.com/link1" },
          { name: "Unit 2", link: "https://drive.google.com/link2" },
          { name: "Unit 3", link: "https://drive.google.com/link3" },
          { name: "Unit 4", link: "https://drive.google.com/link4" },
          { name: "Unit 5", link: "https://drive.google.com/link5" },
        ],
      },
      {
        subject: "Physics",
        units: [
          { name: "Unit 1", link: "https://drive.google.com/link6" },
          { name: "Unit 2", link: "https://drive.google.com/link7" },
          { name: "Unit 3", link: "https://drive.google.com/link8" },
          { name: "Unit 4", link: "https://drive.google.com/link9" },
          { name: "Unit 5", link: "https://drive.google.com/link10" },
        ],
      },
      {
        subject: "Soft Skills",
        units: [
          { name: "Unit 1", link: "https://drive.google.com/link11" },
          { name: "Unit 2", link: "https://drive.google.com/link12" },
          { name: "Unit 3", link: "https://drive.google.com/link13" },
          { name: "Unit 4", link: "https://drive.google.com/link14" },
          { name: "Unit 5", link: "https://drive.google.com/link15" },
        ],
      },
      {
        subject: "Mechanical Engineering",
        units: [
          { name: "Unit 1", link: "https://drive.google.com/link16" },
          { name: "Unit 2", link: "https://drive.google.com/link17" },
          { name: "Unit 3", link: "https://drive.google.com/link18" },
          { name: "Unit 4", link: "https://drive.google.com/link19" },
          { name: "Unit 5", link: "https://drive.google.com/link20" },
        ],
      },
      {
        subject: "Electrical Engineering",
        units: [
          { name: "Unit 1", link: "https://drive.google.com/link21" },
          { name: "Unit 2", link: "https://drive.google.com/link22" },
          { name: "Unit 3", link: "https://drive.google.com/link23" },
          { name: "Unit 4", link: "https://drive.google.com/link24" },
          { name: "Unit 5", link: "https://drive.google.com/link25" },
        ],
      },
    ],
    semester2: [
      {
        subject: "Chemistry",
        units: [
          { name: "Unit 1", link: "https://drive.google.com/link26" },
          { name: "Unit 2", link: "https://drive.google.com/link27" },
          { name: "Unit 3", link: "https://drive.google.com/link28" },
          { name: "Unit 4", link: "https://drive.google.com/link29" },
          { name: "Unit 5", link: "https://drive.google.com/link30" },
        ],
      },
      {
        subject: "Environmental Science",
        units: [
          { name: "Unit 1", link: "https://drive.google.com/link31" },
          { name: "Unit 2", link: "https://drive.google.com/link32" },
          { name: "Unit 3", link: "https://drive.google.com/link33" },
          { name: "Unit 4", link: "https://drive.google.com/link34" },
          { name: "Unit 5", link: "https://drive.google.com/link35" },
        ],
      },
      {
        subject: "Electronics",
        units: [
          { name: "Unit 1", link: "https://drive.google.com/link36" },
          { name: "Unit 2", link: "https://drive.google.com/link37" },
          { name: "Unit 3", link: "https://drive.google.com/link38" },
          { name: "Unit 4", link: "https://drive.google.com/link39" },
          { name: "Unit 5", link: "https://drive.google.com/link40" },
        ],
      },
      {
        subject: "Mathematics 2",
        units: [
          { name: "Unit 1", link: "https://drive.google.com/link41" },
          { name: "Unit 2", link: "https://drive.google.com/link42" },
          { name: "Unit 3", link: "https://drive.google.com/link43" },
          { name: "Unit 4", link: "https://drive.google.com/link44" },
          { name: "Unit 5", link: "https://drive.google.com/link45" },
        ],
      },
      {
        subject: "PPS (Problem Solving Program)",
        units: [
          { name: "Unit 1", link: "https://drive.google.com/link46" },
          { name: "Unit 2", link: "https://drive.google.com/link47" },
          { name: "Unit 3", link: "https://drive.google.com/link48" },
          { name: "Unit 4", link: "https://drive.google.com/link49" },
          { name: "Unit 5", link: "https://drive.google.com/link50" },
        ],
      },
    ],
  };

  return (
    <div className="cse-container">
      <h1>CSE Notes</h1>

      {/* Semester 1 Section */}
      <section className="semester">
        <h2>Semester 1</h2>
        <div className="subjects">
          {cseData.semester1.map((subject, index) => (
            <div key={index} className="page subject-card">
              <h3>{subject.subject}</h3>
              <ul>
                {subject.units.map((unit, i) => (
                  <li key={i}>
                    <a href={unit.link} target="_blank" rel="noopener noreferrer">
                      {unit.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Semester 2 Section */}
      <section className="semester">
        <h2>Semester 2</h2>
        <div className="subjects">
          {cseData.semester2.map((subject, index) => (
            <div key={index} className="page subject-card">
              <h3>{subject.subject}</h3>
              <ul>
                {subject.units.map((unit, i) => (
                  <li key={i}>
                    <a href={unit.link} target="_blank" rel="noopener noreferrer">
                      {unit.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CSEComponent;
