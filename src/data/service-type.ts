import { faDesktop, faCircleNodes, faShieldHalved, faCloud } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface ServiceType {
  id: number;
  typeOfService: string;
  icon: IconDefinition;
}

export const serviceTypes: ServiceType[] = [
  { id: 1, typeOfService: 'Criação de Sistemas', icon: faDesktop },
  { id: 2, typeOfService: 'Computação em Nuvem', icon: faCloud },
  { id: 3, typeOfService: 'Suporte de Sistemas', icon: faCircleNodes },
  { id: 4, typeOfService: 'Cyber Segurança', icon: faShieldHalved },
];