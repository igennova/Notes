import React from 'react';
import { Link, useParams } from 'react-router-dom'; // Import useParams for getting branch
import './yearCard.css';

const Card = ({ year }) => {
  const { branchName } = useParams(); // Get the branch name from the URL

  return (
    <div className="flip-card">
      {/* Dynamic link with branchName and year */}
      <Link to={`/${branchName}/year/${year}`} className="card-link">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h2>{`Year ${year}`}</h2>
          </div>
          <div className="flip-card-back">
            <p>{`Notes for Year ${year}`}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

const CardComponent = () => {
  const years = [1, 2, 3, 4]; // You can modify the years as needed

  return (
    <>
      <div className="courses-name">
        <h1>ALL NOTES WILL BE PROVIDED SOON</h1>
      </div>
      <div className="card-container">
        {years.map((year, index) => (
          <Card key={index} year={year} />
        ))}
      </div>
    </>
  );
};

export default CardComponent;
