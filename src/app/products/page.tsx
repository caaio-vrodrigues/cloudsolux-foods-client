'use client'

import { Header } from '@/components/header/Header'
import styles from './page.module.css'
import { Footer } from '@/components/footer/Footer'
import { generateExcelProductsRelation } from '@/connection/product/productsRelation'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Products = () => {
  return (
    <div className={styles.container}>
      <Header inside={true}/>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Produtos</h1>
        <div className={styles.continerExcelButton}>
          <h2>Gerar Planilha Excel</h2>
          <button onClick={() => generateExcelProductsRelation()}>
            <FontAwesomeIcon icon={faFileArrowDown} className={styles.downloadIcon}/>
            <span className={styles.downloadSpan}>BAIXAR</span>
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Products