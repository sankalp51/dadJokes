import styles from './app.module.css';
import { useState, useEffect } from 'react';
const App = () => {
  const [joke, setJoke] = useState('');
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": 'application/json'
      }
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        setJoke(data.joke);
      })
  }, [flag])


  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p className={styles["main-heading"]}>Try not to laugh 😂</p>
      </div>
      <div className={styles.joke} id="joke">
        {joke}
      </div>
      <button onClick={() => setFlag(!flag)} id="insert">new joke</button>
    </div>
  );
}

export default App;