import styles from './Footer.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

import { Logo } from '@/components/logo/Logo';
import { ServiceList } from './ServiceList';

export const Footer = () => 
  <footer className={styles.footer}>
    <div className={styles.servicesListContainer}>
      <ServiceList/>
    </div>
    <div className={styles.copyContainer}>
      <div className={styles.wrapCopy}>
        <FontAwesomeIcon icon={faCopyright}/>
        <span>Todos os direitos reservados</span>
      </div>
      <Logo/>
      <div className={styles.wrapDeveloped}>
        <FontAwesomeIcon icon={faLaptopCode}/>
        <span>Desenvolvido por Caio V. Rodrigues</span>
      </div>
    </div>
  </footer>