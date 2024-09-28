import React from 'react';
import './CSE.css'; // Import the necessary CSS for styling

const CSEComponent = () => {
  const cseData = {
    semester1: [
      {
        subject: "Mathematics",
        chapters: [
          { name: "Chapter 1", link: "https://drive.google.com/link1" },
          { name: "Chapter 2", link: "https://drive.google.com/link2" },
          { name: "Chapter 3", link: "https://drive.google.com/link3" },
          { name: "Chapter 4", link: "https://drive.google.com/link4" },
          { name: "Chapter 5", link: "https://drive.google.com/link5" },
        ],
      },
      {
        subject: "Physics",
        chapters: [
          { name: "Chapter 1", link: "https://drive.google.com/link6" },
          { name: "Chapter 2", link: "https://drive.google.com/link7" },
          { name: "Chapter 3", link: "https://drive.google.com/link8" },
          { name: "Chapter 4", link: "https://drive.google.com/link9" },
          { name: "Chapter 5", link: "https://drive.google.com/link10" },
        ],
      },
      // Add 3 more subjects similarly...
    ],
    semester2: [
      {
        subject: "Computer Science",
        chapters: [
          { name: "Chapter 1", link: "https://drive.google.com/file/d/1gHQ4sMRC-56I3CL-HjD_n-2Og8lQVMqV/view?usp=drive_link" },
          { name: "Chapter 2", link: "https://drive.google.com/link12" },
          { name: "Chapter 3", link: "https://drive.google.com/link13" },
          { name: "Chapter 4", link: "https://drive.google.com/link14" },
          { name: "Chapter 5", link: "https://drive.google.com/link15" },
        ],
      },
      {
        subject: "Digital Logic",
        chapters: [
          { name: "Chapter 1", link: "https://drive.google.com/link16" },
          { name: "Chapter 2", link: "https://drive.google.com/link17" },
          { name: "Chapter 3", link: "https://drive.google.com/link18" },
          { name: "Chapter 4", link: "https://drive.google.com/link19" },
          { name: "Chapter 5", link: "https://drive.google.com/link20" },
        ],
      },
      // Add 3 more subjects similarly...
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
            <div key={index} className="subject-card">
              <h3>{subject.subject}</h3>
              <ul>
                {subject.chapters.map((chapter, i) => (
                  <li key={i}>
                    <a href={chapter.link} target="_blank" rel="noopener noreferrer">
                      {chapter.name}
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
            <div key={index} className="subject-card">
              <h3>{subject.subject}</h3>
              <ul>
                {subject.chapters.map((chapter, i) => (
                  <li key={i}>
                    <a href={chapter.link} target="_blank" rel="noopener noreferrer">
                      {chapter.name}
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
