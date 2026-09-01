// src/components/auth/ErrorMsg.tsx

import styles from './ErrorMsg.module.css';

type Props = {
  msg: string
}

export const ErrorMsg = ({ msg }: Props) => 
  <div className={styles.errorMsgContainer}>
    <p>{msg}</p>
  </div>