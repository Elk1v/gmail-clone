import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './app.module.css';
import { Header, Sidebar, Compose } from '../components';
import Mail from '../components/email-list/mail';
import { selectIsComposeOpen } from '../features/mail/mailSlice';

const EmailList = React.lazy(() => import('../components/email-list/'));

let count = 0;
const PATH = {
  ROOT: '/',
  MAIL: '/mail',
};

function App() {
  const isComposeOpen = useSelector(selectIsComposeOpen);
  console.log(`[App renders]: ${++count}`);

  return (
    <Router>
      <div className={styles.wrapper}>
        <h1 className="visually-hidden">Gmail Clone</h1>
        <Header />
        <main className={styles.main}>
          <Sidebar />
          <React.Suspense fallback={<p>Loading...</p>}>
            <Switch>
              <Route path={PATH.MAIL} component={Mail} />
              <Route exact path={PATH.ROOT} component={EmailList} />
            </Switch>
          </React.Suspense>
        </main>

        {isComposeOpen && <Compose />}
      </div>
    </Router>
  );
}

export default App;
