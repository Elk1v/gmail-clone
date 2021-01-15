import React from 'react';
import { Button, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';

import SidebarOption from './sidebar-option';
import styles from './sidebar.module.css';

import { HIDDEN } from '../../consts';

export default function Sidebar() {
  return (
    <section className={styles.wrapper}>
      <h2 className={HIDDEN}>Sidebar</h2>
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className={styles.compose}
      >
        Compose
      </Button>
      {/* use map after */}
      <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected />
      <SidebarOption Icon={StarIcon} title="Starred" number={30} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={30} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={30} />
      <SidebarOption Icon={NearMeIcon} title="Sent" number={30} />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={30} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={30} />

      <footer className={styles.footer}>
        <h2 className={HIDDEN}>SideBar footer</h2>
        <div className={styles.icons}>
          <IconButton children={<PersonIcon />} />
          <IconButton children={<DuoIcon />} />
          <IconButton children={<PhoneIcon />} />
        </div>
      </footer>
    </section>
  );
}
