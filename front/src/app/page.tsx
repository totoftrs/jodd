import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div
          className={styles.content}
          style={{ width: '100%', height: '100vh', position: 'relative' }}>
          <video src="/pays.mp4" autoPlay muted/>
        </div>

        <div className={styles.info}>
          <div>info (ex: meteo )</div>
          <div className={styles.underline}></div>
        </div>
      </main>
    </div>
  );
}
