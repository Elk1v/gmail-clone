import React from 'react';
import styles from './section.module.css';

function Section({ Icon, title, color, selected }) {
  const isSelected = selected
    ? `${styles.wrapper} ${styles.selected}`
    : `${styles.wrapper}`;

  return (
    <section
      className={isSelected}
      style={{
        color: `${selected && color}`,
        borderBottom: `3px solid ${color}`,
      }}
    >
      <Icon />
      <h5>{title}</h5>
    </section>
  );
}

export default Section;
