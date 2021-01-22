import React from 'react';
import styles from './emailList.module.css';
import { HIDDEN } from '../../consts';
import Sections from './sections';
import Settings from './settings';
import EmailRow from './email-row';
import { dataBase } from '../../firebase';

let count = 0;

const  EmailList = () => {
  const [emails, setEmails] = React.useState([]);
  console.log(emails);
  console.log(`[Email list renders]: ${++count}`);
  React.useEffect(() => {
    const unsubscribe = dataBase
      .collection('emails')
      .orderBy('timeStamp', 'desc')
      .onSnapshot((querySnapshot) => {
        setEmails(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });

    return () => unsubscribe();
  }, []);

  return (
    <section className={styles.wrapper}>
      <h3 className={HIDDEN}>Email List</h3>
      <Settings />
      <Sections />
      <section className={styles.list}>
        {emails.map(({ id, data: { to, subject, message, timeStamp } }) => (
          <EmailRow
            key={id}
            id={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timeStamp?.seconds * 1000).toUTCString()} // eslint-disable-line
          />
        ))}
      </section>
    </section>
  );
}

export default EmailList;
