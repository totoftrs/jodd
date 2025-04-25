'use client'

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [file, setFile] = useState<File>();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;

    try {
      const data = new FormData();
      data.set('file', file);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: data
      })

      
      if(!res.ok) throw new Error(await res.text())
    } catch (e: any) {
      console.error(e);
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h2>TEST</h2>
        <form onSubmit={onSubmit}>
          <input
            type="file"
            name=""
            id=""
            onChange={(e) => setFile(e.target.files?.[0])}
          />
          <input
            type="submit"
            value="upload"
          />
        </form>
      </main>
    </div>
  );
}
