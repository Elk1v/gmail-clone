import React from 'react';
import { Button, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import styles from './compose.module.css';
import { HIDDEN } from '../../consts';

const Compose = () => {
  const messageClasses = `${styles.input} ${styles.message}`;
  const subjectClasses = `${styles.input}`;
  const toClasses = `${styles.input}`;

  return (
    <section className={styles.wrapper}>
      <h3 className={HIDDEN}>Compose</h3>
      <header className={styles.header}>
        <h4>New Message</h4>
        <IconButton children={<Close />} />
      </header>

      <form className={styles.form}>
        <input placeholder="To" className={toClasses} type="text" />
        <input placeholder="Subject" className={subjectClasses} type="text" />
        <input placeholder="Message" className={messageClasses} type="text" />

        <div className={styles.options}>
          <Button className={styles.send}>Send</Button>
        </div>
      </form>
    </section>
  );
};

export default Compose;
