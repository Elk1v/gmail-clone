import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styles from './app.module.css';
import { Header, Sidebar, EmailList } from '../components';
import Mail from '../components/email-list/mail';

const PATH = {
  ROOT: '/',
  MAIL: '/mail',
};

function App() {
  return (
    <Router>
      <div className={styles.wrapper}>
        <h1 className="visually-hidden">Gmail Clone</h1>
        <Header />
        <main className={styles.main}>
          <Sidebar />

          <Switch>
            <Route path={PATH.MAIL} component={Mail} />
            <Route exact path={PATH.ROOT} component={EmailList} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
