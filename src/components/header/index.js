import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

import { useDispatch, useSelector } from 'react-redux';
import styles from './header.module.css';
import { ALT, URL, PL } from './consts';
import { HIDDEN } from '../../consts';
import { logout, selectUser } from '../../features/auth/authSlice';
import { auth } from '../../firebase';

export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleSignOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <header className={styles.header}>
      <h2 className={HIDDEN}>Header</h2>
      <section className={styles.left}>
        <h3 className={HIDDEN}>Menu icon</h3>
        <IconButton children={<MenuIcon />} />
        <img src={URL.GMAIL_LOGO} alt={ALT.GMAIL_LOGO} />
      </section>

      <section className={styles.middle}>
        <h3 className={HIDDEN}>Search field</h3>
        <SearchIcon className={styles.search} />
        <input type="text" placeholder={PL.SEARCH} />
        <ArrowDropDownIcon className={styles.inputCaret} />
      </section>

      <section className={styles.right}>
        <h3 className={HIDDEN}>User Menu</h3>
        <IconButton children={<AppsIcon />} />
        <IconButton children={<NotificationsIcon />} />
        <Avatar src={user?.photoURL} onClick={handleSignOut} />
      </section>
    </header>
  );
}
