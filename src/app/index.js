import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './app.module.css';
import { Header, Sidebar, Compose, Login } from '../components';
import Mail from '../components/email-list/mail';
import { selectIsComposeOpen } from '../features/mail/mailSlice';
import { selectUser, login } from '../features/auth/authSlice';
import { auth } from '../firebase';

const EmailList = React.lazy(() => import('../components/email-list/'));
let count = 0;
const PATH = {
  ROOT: '/',
  MAIL: '/mail',
};

function App() {
  const dispatch = useDispatch();
  const isComposeOpen = useSelector(selectIsComposeOpen);
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      }
    });
  }, []);
  console.log(`[App renders]: ${++count}`);
  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
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
      )}
    </Router>
  );
}

export default App;
