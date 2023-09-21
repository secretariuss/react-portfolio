import React from 'react';
import '../../styles/About.css';
import avatar from '../../images/my.png';


export default function About({ handlePageChange }) {
  return (
    <div className="about-wrapper">
      <div>
        <img className="avatar-img" src={avatar} alt="Avatar" />
      </div>
      <div>
        <div>
          <h1 className='about-title'>About Me</h1>
        </div>
        <div className='wrapper-about-text'>
          <p className='about-text'>
            Hi there! I’m Alex, a frontend developer with over 4 years of experience in creating beautiful and functional web applications.
            I have a strong background in both front-end and back-end development using technologies such as HTML, CSS, JavaScript, React, Node.js, MongoDB, etc.
            I love learning new things and exploring new challenges in web development
            You can check out my portfolio website <a href='#portfolio' onClick={() => handlePageChange('Portfolio')}>here</a> to see more of my work.
            I’m always open to new opportunities and collaborations in web development.
            Feel free to contact me <a href='#contact' onClick={() => handlePageChange('Contact')}>here</a> if you have any questions or suggestions.
            Thank you for your time and attention!
          </p>
        </div>
      </div>
    </div>
    
  );
}