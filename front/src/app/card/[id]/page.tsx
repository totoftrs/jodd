'use client';

import { useParams } from 'next/navigation';
import data from '../../../../data.json';
import styles from './../../styles/card.module.scss';

export default function Card() {
  const navigate = useParams();
  const content = data.gallery;
  const t = content.find((elem) => elem.id === Number(navigate.id));
  return (
    <div className={styles.content}>
      {t?.img !== '' && (
        <div className={styles.container_img}>
          <img src={t?.img} />
        </div>
      )}

      {t?.video !== '' && (
        <div className={styles.container_video}>
          <video
            src={t?.video}
            autoPlay
            muted
          />
        </div>
      )}
      <div className={styles.position}>
        <span>
          <img
            src="/gps.png"
            alt=""
          />
        </span>
        <span>123 - 456</span>
      </div>
      <div className={styles.text}>
        If you are going to use a passage of Lorem Ipsum, you need to be sure
        there isn't anything embarrassing hidden in the middle of text.
        If you are going to use a passage of Lorem Ipsum, you need to be sure
        there isn't anything embarrassing hidden in the middle of text.
        If you are going to use a passage of Lorem Ipsum, you need to be sure
        there isn't anything embarrassing hidden in the middle of text.
      </div>
    </div>
  );
}
