// Yes.js

import React from 'react';
import style from "./Yes.module.css";

const Yes = () => {
  return (
    <div className={style.container}>
      <div>
        <h1 className={style.header_text}>Yeeeyyyy!!</h1>
      </div>
      <div className={style.gif_container}>
        <img
          src="https://media0.giphy.com/media/T86i6yDyOYz7J6dPhf/giphy.gif"
          alt="Cute animated illustration"
        />
      </div>
    </div>
  );
};

export default Yes;
