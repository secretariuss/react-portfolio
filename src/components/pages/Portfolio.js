import React from 'react';
import '../../styles/Portfolio.css';
import data from '../../data';

export default function Portfolio() {
  return (
    <div>
      <div className="content card-container">
      {data.map((user) => (
        <a href={user.url} key={user.id} className="card-flex-button btn-block">
          <div id="card">
            <div className="card-flex-wrapper">
            <div className="card-flex-content">
              <h3 style={{color: user.titleColor}}>{user.titleText}</h3>
              <p style={{color: user.descriptionColor}}>{user.description}</p>
            </div>
          </div>
          </div>
          </a>
        ))}
      </div>
    </div>
  );
}