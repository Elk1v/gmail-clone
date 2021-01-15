import React from 'react';
import {
  ArrowDropDown,
  CheckBox,
  ChevronLeft,
  ChevronRight,
  KeyboardHide,
  MoreVert,
  Redo,
  Settings as SettingsIcon,
} from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import styles from './emailList.module.css';
import { HIDDEN, ICON_COLOR } from '../../consts';
import Sections from './sections';
import Settings from './settings';

function EmailList() {
  return (
    <section className={styles.wrapper}>
      <h3 className={HIDDEN}>Email List</h3>
      <Settings />
      <Sections />
      <section className={styles.list} />
    </section>
  );
}

export default EmailList;
