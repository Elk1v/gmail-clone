import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './app.module.css';
import { Header, Sidebar, EmailList, Compose } from '../components';
import Mail from '../components/email-list/mail';
import { selectIsComposeOpen } from '../features/mail/mailSlice';

const PATH = {
  ROOT: '/',
  MAIL: '/mail',
};

function App() {
  const isComposeOpen = useSelector(selectIsComposeOpen);

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

        {isComposeOpen && <Compose />}
      </div>
    </Router>
  );
}

export default App;
