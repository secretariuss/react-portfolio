import React from 'react';
import '../../styles/Resume.css';

export default function Resume() {
  return (
    <div>
      <div>
        <h1 className='resume-title'>Resume</h1>
      </div>
      <div className='wrapper-resume-text'>
        <p className='resume-text'><pre>{`
          Motivated well trained junior full stack Web Developer graduate 
          from UNB bootcamp is looking for a development position to expand 
          knowledge and skills towards working in a collaborative environment. 
          Adapt at solving various technical problems with practical solutions 
          using various types of computer software. Ability and willingness to 
          innovate and learn new technologies, quick learner passionate 
          about development.

          Skills
          •	JavaScript, NodeJS, HTML/CSS,
          •	SQL, MySQL
          •	Git/GitHub, Bootstrap, React
          •	MongoDB, NoSQL, Visual Studio
          •	Time Management
          •	Project Scope Analysis

          UNB Coding Boot Camp Full Stack Web Development - October2023`}</pre>
        </p>
      </div>
    </div>
  );
}
