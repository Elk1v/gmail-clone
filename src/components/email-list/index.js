import React from 'react';
import styles from './emailList.module.css';
import { HIDDEN } from '../../consts';
import Sections from './sections';
import Settings from './settings';
import EmailRow from './email-row';

function EmailList() {
  return (
    <section className={styles.wrapper}>
      <h3 className={HIDDEN}>Email List</h3>
      <Settings />
      <Sections />
      <section className={styles.list}>
        <EmailRow
          title="random"
          subject="Test subject"
          description="random dasddescription"
          time="18^00"
        />
        <EmailRow
          title="random"
          subject="rae asdm lams ldams ams lasd; maubject"
          description="simple descri"
          time="18^00"
        />
      </section>
    </section>
  );
}

export default EmailList;
