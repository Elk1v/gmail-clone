import React from 'react';
import { Button, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { useForm } from 'react-hook-form';
import styles from './compose.module.css';
import { HIDDEN } from '../../consts';

const Compose = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const messageClassName = `${styles.input} ${styles.message}`;
  const subjectClassName = `${styles.input}`;
  const toClassName = `${styles.input}`;

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <section className={styles.wrapper}>
      <h3 className={HIDDEN}>Compose</h3>
      <header className={styles.header}>
        <h4>New Message</h4>
        <IconButton children={<Close />} />
      </header>

      <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
        <input
          name="to"
          placeholder="To"
          className={toClassName}
          type="text"
          ref={register({ required: true })}
        />
        <input
          name="subject"
          placeholder="Subject"
          className={subjectClassName}
          type="text"
          ref={register({ required: true })}
        />
        <input
          name="message"
          placeholder="Message..."
          className={messageClassName}
          type="text"
          ref={register({ required: true })}
        />

        <div className={styles.options}>
          <Button
            className={styles.send}
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Compose;
