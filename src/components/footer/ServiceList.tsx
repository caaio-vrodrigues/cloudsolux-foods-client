import styles from './ServiceList.module.css';

import { serviceTypes } from '@/data/service-type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ServiceList = () => 
  <ul className={styles.list}>
    {serviceTypes.map(service => 
      <li key={service.id}>
        <FontAwesomeIcon icon={service.icon}/>
        <span>{service.typeOfService}</span>
      </li>
    )}
  </ul>