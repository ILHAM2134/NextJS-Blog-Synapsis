import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className="flex flex-col justify-center bg-blue-400">
          <h1 className="my-8">Lorem ipsum dolor sit amet.</h1>
          <h2 className="my-8">Lorem ipsum dolor sit amet.</h2>
          <h3 className="my-8">Lorem ipsum dolor sit amet.</h3>
          <h4 className="my-8">Lorem ipsum dolor sit amet.</h4>
          <h5 className="my-8">Lorem ipsum dolor sit amet.</h5>
          <h6 className="my-8">Lorem ipsum dolor sit amet.</h6>
        </div>
      </main>
    </>
  );
}
