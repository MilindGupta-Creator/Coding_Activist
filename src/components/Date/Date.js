import React, { useState } from 'react';
import styles from './Date.module.css';
import { useNavigate } from 'react-router-dom';

const Date = () => {
  const [buttonStyle, setButtonStyle] = useState({
    position: 'relative',
    left: 0,
    top: 0,
  });
  const navigate = useNavigate(); 

  const moveButton = () => {
    const randomLeft = Math.floor(Math.random() * window.innerWidth)-10;
    const randomTop = Math.floor(Math.random() * window.innerHeight)-10;

    setButtonStyle({
      position: 'absolute',
      left: `${randomLeft}px`,
      top: `${randomTop}px`,
    });
  };

  const nextPage = () => {
    // Use navigate to navigate to the "yes" component
    navigate('/yes');
  };

  return (
    <>
    <div className={styles.container}>
      <div>
        <h1 className={styles.headerText}>Do you wanna go out with me?</h1>
      </div>
      <div className={styles.gifContainer}>
        <img
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtZ2JiZDR0a3lvMWF4OG8yc3p6Ymdvd3g2d245amdveDhyYmx6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif"
          alt="Cute animated illustration"
        />
      </div>
      <div className={styles.buttons}>
        <button className={styles.btn} id="yesButton" onClick={nextPage}>
          Yes
        </button>
        <button
          className={styles.btn}
          id="noButton"
          onMouseOver={moveButton}
          onClick={moveButton}
          style={buttonStyle}
        >
          No
        </button>
      </div>
    </div>
    <div className={styles.mobileOnly}>
      <h1  style={{display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",marginTop:"31vh"}}>Switch to Desktop Version</h1>
    </div>

    </>
    
  );
};

export default Date;
