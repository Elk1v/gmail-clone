import React from 'react';
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  KeyboardHide,
  MoreVert,
  Redo,
  Settings as SettingsIcon,
} from '@material-ui/icons';
import { IconButton, Checkbox } from '@material-ui/core';
import styles from '../emailList.module.css';
import { ICON_COLOR } from '../../../consts';

const Settings = () => {
  return (
    <section className={styles.settings}>
      <section className={styles.left}>
        <Checkbox className={ICON_COLOR} />
        <IconButton children={<ArrowDropDown />} />
        <IconButton children={<Redo />} />
        <IconButton children={<MoreVert />} />
      </section>
      <section className={styles.right}>
        <IconButton children={<ChevronLeft />} />
        <IconButton children={<ChevronRight />} />
        <IconButton children={<KeyboardHide />} />
        <IconButton children={<SettingsIcon />} />
      </section>
    </section>
  );
};

export default Settings;
