// Loading.js
import React, { useEffect } from 'react';
import './Loader.css';

const Loader = () => {
  useEffect(() => {
    const createStars = () => {
      const numStars = 1; // Adjust the number of stars as needed
      const starsContainer = document.querySelector('.stars-container');

      for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        starsContainer.appendChild(star);
      }
    };

    createStars();
  }, []);

  return (
    <div className="loading-container">
      <div className="loading-text">Welcome to Coding Activist</div>
      <div className="loading-spinner"></div>
      <div className="stars-container"></div>
    </div>
  );
};

export default Loader;