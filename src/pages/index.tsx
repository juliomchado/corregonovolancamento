import type { NextPage } from 'next'

import styles from './styles.module.scss';

const Home: NextPage = () => {
  return (
    <main className={styles.container}>
      <section className={styles.titlesSection}>
        <h1 className={styles.primaryTitle} >
          Lançamento Oficial da Cachaça Córrego Novo
        </h1>
        <h2 className={styles.secondaryTitle}>
          Dia 25 de Novembro
        </h2>
      </section>

      <img src="images/logo.svg" alt="Logo Córrego Novo" />

      <section className={styles.countdownSection}>
        <h5 className={styles.countdownText}>
          Tempo para o lançamento
        </h5>
        <div className={styles.countdownContainer}>
          <p>3 dias, 12 horas e 32 segundos</p>
        </div>
      </section>
    </main>
  )
}

export default Home
