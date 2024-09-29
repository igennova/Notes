import React from 'react';
import './CSE.css'; // Import the necessary CSS for styling

const CSEComponent = () => {
  const cseData = {
    semester1: [
      {
        subject: "Mathematics",
        units: [
          { name: "Unit 1", link: "https://drive.google.com/file/d/1qPuug610ctUeP3lVusQ08y_AKNgkNn4O/view?usp=drive_link" },
          { name: "Unit 2", link: "https://drive.google.com/file/d/1djQ6AIPuyduSsqUkCzo55yhe2xhvgO8C/view?usp=drive_link" },
          { name: "Unit 3", link: "https://drive.google.com/file/d/1NCnTVxHV-G7hICM8AMBCoRD5GTGyerDO/view?usp=drive_link" },
          { name: "Unit 4", link: "https://drive.google.com/file/d/1PRT2VcKNFSZ9_u2iCcD6u8eRH_AVvf0y/view?usp=drive_link" },
          { name: "Unit 5", link: "https://drive.google.com/file/d/1gHQ4sMRC-56I3CL-HjD_n-2Og8lQVMqV/view?usp=drive_link" },
          // {name: "Previou year Paper",link: "https://drive.google.com/file/d/"},
        ],
      },
      {
        subject: "Physics",
        units: [
          { name: "Unit 1", link: "https://drive.google.com/file/d/1exMDdQsQTFIkyLqyH4G9rR6wOcllUqcr/view?usp=sharing" },
          { name: "Unit 2", link: "https://drive.google.com/file/d/1IiDkmoAsivIvDBNDyZxRowk4k0A-0HMy/view?usp=sharing" },
          { name: "Unit 3", link: "https://drive.google.com/link8" },
          { name: "Unit 4", link: "https://drive.google.com/link9" },
          { name: "Unit 5", link: "https://drive.google.com/link10" },
        ],
      },
      {
        subject: "Soft Skills",
        units: [
          { name: "Unit 1", link: "https://drive.google.com/link11" },
          { name: "Unit 2", link: "https://drive.google.com/file/d/14uDi2OBpcD-L7bFUXP8cxy6ZVQFeOglC/view?usp=sharing" },
          { name: "Unit 3", link: "https://drive.google.com/file/d/1GMzKohQzSfM7YKk2xIjm79BNF8RiwGlu/view?usp=sharing" },
          { name: "Unit 4", link: "https://drive.google.com/link14" },
          { name: "Unit 5", link: "https://drive.google.com/file/d/1rPBjVT4woIQ8wNUXno_Mvy-xY0UuVi-o/view?usp=drive_link" },
        ],
      },
      {
        subject: "Mechanical Engineering",
        units: [
          { name: "Unit 1", link: "https://drive.google.com/drive/folders/17lAM2wAxA-wCDt9WLF27Z66R9KLRO4PQ?usp=drive_link" },
          { name: "Unit 2", link: "https://drive.google.com/drive/folders/1bdionDIa50iOGYGzrCLRY7witeHzGDEH?usp=drive_link" },
          { name: "Unit 3", link: "https://drive.google.com/drive/folders/1kIONW3ty180GaH0wgXMwVjGj30tEbVeQ?usp=drive_link" },
          { name: "Unit 4", link: "https://drive.google.com/drive/folders/1A96pd5rUQlcZPdXFF_AJm6OL0pYuxnB0?usp=drive_link" },
          { name: "Unit 5", link: "https://drive.google.com/drive/folders/1-75WUwvQcADcJz15QJhlCWjzjKBx7FVP?usp=drive_link" },
        ],
      },
      {
        subject: "Electrical Engineering",
        units: [
          { name: "Unit 1", link: "https://drive.google.com/link21" },
          { name: "Unit 2", link: "https://drive.google.com/file/d/1ZGu00KP-qY6-UIig_ZwAtVCgFUKl2f_S/view?usp=drive_link2" },
          { name: "Unit 3", link: "https://drive.google.com/link23" },
          { name: "Unit 4", link: "https://drive.google.com/file/d/14nqoE5Y_gAD2eZp_U0YWzYIBuyYHd3rQ/view?usp=drive_link" },
          { name: "Unit 5", link: "https://drive.google.com/file/d/1UVtjC_VSnBHChfrbqyfGrz9iEiGAWW7h/view?usp=drive_link" },
        ],
      },
    ],
    semester2: [
      {
        subject: "Chemistry",
        units: [
          { name: "Unit 1", link: "https://drive.google.com/file/d/1DycEsg_dR7sl53MR1e_GLviLUYouDkFE/view?usp=drive_link" },
          { name: "Unit 2", link: "https://drive.google.com/file/d/1okjZ2HK4SF2JxY65GwjANtl06CvUWZba/view?usp=drive_link" },
          { name: "Unit 3", link: "https://drive.google.com/file/d/1EknXe51oJT1g7bitQeBv0feyDOAMyHfi/view?usp=drive_link" },
          { name: "Unit 4", link: "https://drive.google.com/drive/folders/1S8FH_0CGHL5XBAWcsgkRd5ePb_0soUQe?usp=sharing" },
          { name: "Unit 5", link: "https://drive.google.com/file/d/19ZaZCd70MDSzq3RmZYpzh6AW-U4a_LlL/view?usp=drive_link" },
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
          { name: "Unit 1", link: "https://drive.google.com/drive/folders/190Mb7pNsmWsjc5jQBq_uQvA9tKcfO2bN?usp=drive_link" },
          { name: "Unit 2", link: "https://drive.google.com/drive/folders/1-MI52Q-n5ssSjPrWcfgo1aru7T1M_pie?usp=drive_link" },
          { name: "Unit 3", link: "https://drive.google.com/drive/folders/1ikaa_vCniikTajUaSsI7gZx1jQjYW5ad?usp=drive_link" },
          { name: "Unit 4", link: "https://drive.google.com/drive/folders/1SynyaWmEVdQzrHTwdVzLTXBzbqrUyiM6?usp=drive_link" },
          { name: "Unit 5", link: "https://drive.google.com/drive/folders/1n5uEK9g1sg9ofS2lY5QpGEU-lbQygU-e?usp=drive_link" },
        ],
      },
      {
        subject: "Mathematics 2",
        units: [
          { name: "Unit 1", link: "https://drive.google.com/file/d/1Y_4eMDAP9aLPlhv-2FnyXmnTOOA823F-/view?usp=drive_link" },
          { name: "Unit 2", link: "https://drive.google.com/file/d/1msRd1MoJOA3zt77wkjEs5dAiHoYkHA2v/view?usp=drive_link" },
          { name: "Unit 3", link: "https://drive.google.com/file/d/1c8PN9CwO8eBsq1gO1kv4W4zbUo-P6MkF/view?usp=drive_link" },
          { name: "Unit 4", link: "https://drive.google.com/file/d/1-FZt1qKUMJyXOAwur0VjZkyO16F7cLS5/view?usp=drive_link" },
          { name: "Unit 5", link: "https://drive.google.com/file/d/1L2W-lfreEcx7neke_aUNenWh6x7IyMmM/view?usp=drive_link" },
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
