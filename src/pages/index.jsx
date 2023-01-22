import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className="flex flex-col justify-center">
          <h1 className="my-16 text-center">This is homepage.</h1>
        </div>
      </main>
    </>
  );
}
