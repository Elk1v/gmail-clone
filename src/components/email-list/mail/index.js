import React from 'react';
import { IconButton } from '@material-ui/core';
import {
  ArrowBack,
  CheckCircle,
  Delete,
  Email,
  Error,
  LabelImportant,
  MoreVert,
  MoveToInbox,
  WatchLater,
} from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import styles from './mail.module.css';
import { HIDDEN } from '../../../consts';

const Mail = () => {
  const history = useHistory();

  const clickBackHandler = () => {
    history.push('/');
  };

  const presBackHandler = (e) => {
    if (e.key === 'Enter') history.push('/');
  };

  return (
    <section className={styles.wrapper}>
      <section className={styles.tools}>
        <div className={styles.left}>
          <h5 className={HIDDEN}>left settings section</h5>
          <IconButton
            onClick={clickBackHandler}
            onKeyPress={presBackHandler}
            children={<ArrowBack />}
          />
          <IconButton children={<MoveToInbox />} />
          <IconButton children={<Error />} />
          <IconButton children={<Delete />} />
          <IconButton children={<Email />} />
          <IconButton children={<WatchLater />} />
          <IconButton children={<CheckCircle />} />
          <IconButton children={<LabelImportant />} />
          <IconButton children={<MoreVert />} />
        </div>

        <div className={styles.right}>
          <h5 className={HIDDEN}>right settings section</h5>
        </div>
      </section>
      <h4 className={HIDDEN}>MAIL</h4>
    </section>
  );
};

export default Mail;
