import styles from './Logo.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCanadianMapleLeaf } from '@fortawesome/free-brands-svg-icons';

export const Logo = () => 
  <div className={styles.wrapLogo}>
    <h1>CloudSolux</h1>
    <FontAwesomeIcon icon={faCanadianMapleLeaf} className={styles.logoIcon}/>
  </div>