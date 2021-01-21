import React from 'react';
import { Button, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import styles from './compose.module.css';
import { HIDDEN } from '../../consts';
import { closeCompose } from '../../features/mail/mailSlice';

const Compose = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const messageClassName = `${styles.input} ${styles.message}`;
  const subjectClassName = `${styles.input}`;
  const toClassName = `${styles.input}`;
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.table(data);
  };

  const handleCloseClick = () => {
    dispatch(closeCompose());
  };

  return (
    <section className={styles.wrapper}>
      <h3 className={HIDDEN}>Compose</h3>
      <header className={styles.header}>
        <h4>New Message</h4>
        <IconButton onClick={handleCloseClick} children={<Close />} />
      </header>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          className={toClassName}
          type="text"
          defaultValue=""
          ref={register({ required: true })}
        />
        {errors.to && <p className={styles.error}>Receiver is required</p>}
        <input
          name="subject"
          placeholder="Subject"
          className={subjectClassName}
          type="text"
          defaultValue=""
          ref={register}
        />

        <input
          name="message"
          placeholder="Message..."
          className={messageClassName}
          type="text"
          defaultValue=""
          ref={register({ required: true })}
        />
        {errors.message && <p className={styles.error}>Insert your message</p>}

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
