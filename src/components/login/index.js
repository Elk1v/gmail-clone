import React from 'react';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import styles from './login.module.css';
import { HIDDEN } from '../../consts';
import { auth, provider } from '../../firebase';
import { login } from '../../features/auth/authSlice';

const Login = () => {
  const dispatch = useDispatch();

  const handleSignIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.emaik,
            photoURL: user.photoURL,
          })
        );
      })
      .catch((err) => alert(err.message));
  };

  return (
    <section className={styles.wrapper}>
      <h2 className={HIDDEN}>Login page</h2>
      <div className={styles.container}>
        <img
          className={styles.logo}
          src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg"
          alt="Gmail logo"
        />
        <Button variant="contained" color="primary" onClick={handleSignIn}>
          Login
        </Button>
      </div>
    </section>
  );
};

export default Login;
