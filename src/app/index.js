import React from 'react';
import styles from './app.module.css';
import Header from '../components/header';
import Sidebar from '../components/sidebar';

function App() {
  return (
    <div className={styles.app}>
      <h1 className="visually-hidden">Gmail Clone</h1>
      <Header />
      <Sidebar />
    </div>
  );
}

export default App;
