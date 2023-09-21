import React from 'react';

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="rounded-social-buttons">
          <a
            className="social-button github"
            href="https://github.com/secretariuss?tab=repositories"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            className="social-button linkedin"
            href="https://www.linkedin.com/"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}
