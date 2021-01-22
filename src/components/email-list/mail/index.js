import React from 'react';
import { IconButton } from '@material-ui/core';
import {
  ArrowBack,
  CheckCircle,
  Delete,
  Email,
  Error,
  ExitToApp,
  LabelImportant,
  MoreVert,
  MoveToInbox,
  Print,
  UnfoldMore,
  WatchLater,
} from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './mail.module.css';
import { selectCurrentMail } from '../../../features/mail/mailSlice';
import { HIDDEN } from '../../../consts';

const Mail = () => {
  const history = useHistory();

  const handleBack = () => {
    history.push('/');
  };

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') handleBack();
  };

  const selectedMail = useSelector(selectCurrentMail);
  console.log(selectedMail);

  return (
    <section className={styles.wrapper}>
      <h4 className={HIDDEN}>MAIL</h4>
      <section className={styles.tools}>
        <div className={styles.toolsLeft}>
          <h5 className={HIDDEN}>left settings section</h5>
          <IconButton
            onClick={handleBack}
            onKeyPress={handleEnterPress}
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

        <div className={styles.toolsRight}>
          <h5 className={HIDDEN}>right settings section</h5>
          <IconButton children={<UnfoldMore />} />
          <IconButton children={<Print />} />
          <IconButton children={<ExitToApp />} />
        </div>
      </section>

      <section className={styles.subject}>
        <h5 className={HIDDEN}>Message body</h5>

        <header className={styles.header}>
          <h6>{selectedMail?.subject}</h6>
          <LabelImportant className={styles.important} />
          <p>{selectedMail?.title}</p>
          <p className={styles.time}>{selectedMail?.time}</p>
        </header>

        <div className={styles.message}>
          <p>{selectedMail?.description}</p>
        </div>
      </section>
    </section>
  );
};

export default Mail;
