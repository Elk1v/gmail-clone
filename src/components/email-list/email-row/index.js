import React from 'react';
import { useHistory } from 'react-router-dom';
import { IconButton, Checkbox } from '@material-ui/core';
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons';
import styles from './emailRow.module.css';

const EmailRow = ({ title, subject, description, time = 'now' }) => {
  const history = useHistory();

  const handleCLick = () => {
    history.push('/mail');
  };

  const handlePressKey = (e) => {
    if (e.key === 'Enter') history.push('/mail');
  };

  return (
    <section
      className={styles.wrapper}
      onKeyPress={handleCLick}
      onClick={handlePressKey}
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
