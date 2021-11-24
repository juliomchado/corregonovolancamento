import type { NextPage } from 'next'

import styles from './styles.module.scss';

import { formatDuration, intervalToDuration } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useEffect, useState } from 'react';


const Home: NextPage = () => {

  const [timeToLaunch, setTimeToLaunch] = useState<string | null | undefined>('');

  function calculateAndFormatTimeToLaunch() {

    const startDate = new Date();
    const endDate = new Date(2021, 11, 25, 12);

    const duration = intervalToDuration(
      {
        start: startDate,
        end: endDate
      }
    );

    if (duration.days === 0
      && duration.hours === 0
      && duration.seconds === 0
    ) {
      setTimeToLaunch(null);
    }
    else {

      const formattedDuration = formatDuration(duration, {
        delimiter: ', ',
        format: ['days', 'hours', 'minutes', 'seconds'],
        locale: ptBR
      });


      return formattedDuration
    }



  }

  useEffect(() => {
    const formattedValue = calculateAndFormatTimeToLaunch();


    setTimeToLaunch(formattedValue);


  }, []);

  setInterval(() => {
    if (timeToLaunch) {
      const formattedValue = calculateAndFormatTimeToLaunch();


      setTimeToLaunch(formattedValue);
    }

  }, 1000)

  return (
    <main className={styles.container}>
      <section className={styles.titlesSection}>
        <h1 className={styles.primaryTitle} >
          Lançamento Oficial da Cachaça Córrego Novo
        </h1>
        <h2 className={styles.secondaryTitle}>
          Dia 25 de Novembro às 12h
        </h2>
      </section>

      <img src="images/logo.svg" alt="Logo Córrego Novo" />

      <section className={styles.countdownSection}>
        <h5 className={styles.countdownText}>
          Tempo para o lançamento
        </h5>
        <div className={styles.countdownContainer}>
          <p>{timeToLaunch ? timeToLaunch : 'Produto Foi Lançado!!'}</p>
        </div>
      </section>
    </main>
  )
}

export default Home
