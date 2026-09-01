'use client';

import Link from 'next/link';
import { Logo } from '@/components/logo/Logo';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { logout } from '@/connection/authService';
import styles from './Header.module.css';

type props = {
  inside: boolean
}

export const Header = ({ inside }: props) => 
  <header className={styles.header}>
    {inside ? 
      <div className={styles.inside}>
        <Logo/>
        <Link 
          href={'/'} 
          className={styles.logoutLink} 
          // onClick={logout}
        >
          <FontAwesomeIcon icon={faXmark} className={styles.logoutIcon}/>
        </Link> 
      </div>
      : 
      <div className={styles.logoContainer}>
        <Logo/>
      </div>}
  </header>