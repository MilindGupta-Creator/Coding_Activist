import React ,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faQuestion,faChalkboardUser } from '@fortawesome/free-solid-svg-icons'; // Import the required icon
import './Practice.css'; // Import CSS file for styling
import CodeSandboxComponent from '../Questions/CodeSandboxComponent';

const Practice = () => {

  useEffect(() => {
    // Create a new meta tag for viewport
    const viewportMetaTag = document.createElement('meta');
    viewportMetaTag.name = "viewport";
    viewportMetaTag.content = "width=device-width, initial-scale=0.35, maximum-scale=1.0, user-scalable=no";

    // Append the new meta tag to the head
    document.head.appendChild(viewportMetaTag);
    
    // Clean up function to remove the viewport meta tag when the component unmounts
    return () => {
      document.head.removeChild(viewportMetaTag);
    };
  }, []);

  return (
    <div className="practice-container">
      <ul className='practicelinks'>
        <li className="centered-li">
          {/* Use FontAwesomeIcon component and specify the icon */}
          
          <Link to="/questions"  className='questionslink' rel="noopener noreferrer">
          <FontAwesomeIcon icon={faQuestion} />
            Questions</Link>
        </li>
        
        <li className="centered-li">
          <Link to="/interviews" className='questionslink' target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faChalkboardUser} />
          Interviews</Link>
          
          </li>
      </ul>
    </div>
  );
};

export default Practice;
