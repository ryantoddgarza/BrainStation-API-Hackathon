import React from 'react';
import sprite from '../assets/sprite.svg';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <a href="https://github.com/ryantoddgarza/donyewump"
         title="view on GitHub"
         rel="noopener noreferrer"
         target="_blank">
        <svg className="icon--footer">
          <use href={sprite + "#github-icon"} />
        </svg>
      </a>
    </footer>
  )
}

export default Footer;
