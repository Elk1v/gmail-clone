import React from 'react';
import styles from './sidebarOption.module.css';

function SidebarOption({ Icon, title, number, selected }) {
  const isSelected = selected
    ? `${styles.wrapper} ${styles.selected}`
    : `${styles.wrapper}`;

  return (
    <section className={isSelected}>
      <Icon className={styles.icon} />
      <h3 className={styles.heading}>{title}</h3>
      <p className={styles.number}>{number}</p>
    </section>
  );
}

export default SidebarOption;
