import React from 'react';
import { useHistory } from 'react-router-dom';
import { IconButton, Checkbox } from '@material-ui/core';
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons';
import styles from './emailRow.module.css';

const EmailRow = ({ id, title, subject, description, time }) => {
  const history = useHistory();

  const clickHandler = () => {
    history.push('/mail');
  };

  const pressKeyHandler = (e) => {
    if (e.key === 'Enter') history.push('/mail');
  };

  return (
    <section
      className={styles.wrapper}
      onKeyPress={pressKeyHandler}
      onClick={clickHandler}
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
