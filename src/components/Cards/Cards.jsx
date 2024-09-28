import React from 'react';
import { Link } from 'react-router-dom';
import './CourseCards.css';

const branches = [
  { name: 'CSE', description: 'Computer Science and Engineering', link: '/cse' },
  { name: 'AI', description: 'Artificial Intelligence', link: '/ai' },
  { name: 'IoT', description: 'Internet of Things', link: '/iot' },
  { name: 'IT', description: 'Information Technology', link: '/it' },
];

const FlipCard = ({ name, description, link }) => {
  return (
    <Link to={`${link}/year`} className="flip-card"> {/* Link to the year selection for each branch */}
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <p className="title">{name}</p>
          <p>Hover Me</p>
        </div>
        <div className="flip-card-back">
          <p className="title">{description}</p>
          <p>Leave Me</p>
        </div>
      </div>
    </Link>
  );
};

const FlipCardSection = () => {
  return (
    <section id="courses" className="flip-card-section">
      <div className='courses-name'>
        <h1>NOTES</h1>
      </div>
      <div className="card-container">
        {branches.map((branch, index) => (
          <FlipCard key={index} name={branch.name} description={branch.description} link={branch.link} />
        ))}
      </div>
    </section>
  );
};

export default FlipCardSection;
