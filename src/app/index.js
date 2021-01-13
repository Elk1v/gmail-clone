import React from 'react';
import styles from './app.module.css';
import Header from '../components/header';

function App() {
  return (
    <div className={styles.app}>
      <h1 className="visually-hidden">Gmail Clone</h1>
      <Header />
    </div>
  );
}

export default App;
