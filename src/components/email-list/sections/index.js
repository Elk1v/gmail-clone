import React from 'react';
import { Inbox, LocalOffer, People } from '@material-ui/icons';
import styles from '../emailList.module.css';
import { HIDDEN } from '../../../consts';
import Section from './section';

const Sections = () => {
  return (
    <section className={styles.sections}>
      <h4 className={HIDDEN}>Sections</h4>
      <Section Icon={Inbox} title="primary" color="red" />
      <Section Icon={People} title="Social" color="#1a73e8" selected />
      <Section Icon={LocalOffer} title="Promottions" color="green" />
    </section>
  );
};

export default Sections;
