// src/app/page.tsx

import styles from './page.module.css';

import { Header } from '@/components/header/Header';
import { LoginForm } from "@/components/auth/LoginForm";
import { Footer } from '@/components/footer/Footer';

const Login = () => {
  return (
    <div className={styles.loginPageContainer}>
      <Header inside={false}/>
      <div className={styles.formContainer}>
        <LoginForm/>
        {/* <MsgSupport/>
        <HelpLink/> */}
      </div>
      <Footer/>
    </div>
  );
}

export default Login;