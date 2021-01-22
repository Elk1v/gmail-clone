import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { IconButton, Checkbox } from '@material-ui/core';
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons';
import { selectMail } from '../../../features/mail/mailSlice';
import styles from './emailRow.module.css';

const EmailRow = ({ id, title, subject, description, time = 'now' }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleOpenMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );

    history.push('/mail');
  };

  const handlePressEnter = (e) => {
    if (e.key === 'Enter') handleOpenMail();
  };

  return (
    <section
      className={styles.wrapper}
      onKeyPress={handlePressEnter}
      onClick={handleOpenMail}
      role="button"
      tabIndex="0"
    >
      <div className={styles.options}>
        <Checkbox />
        <IconButton children={<StarBorderOutlined />} />
        <IconButton children={<LabelImportantOutlined />} />
      </div>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.message}>
        <h5>{subject}</h5>
        <span className={styles.description}> - {description}</span>
      </div>

      <p className={styles.time}>{time}</p>
    </section>
  );
};

export default EmailRow;
