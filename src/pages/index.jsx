import styles from '@/styles/Home.module.css';
import Jumbotron from '../components/home/Jumbotron.jsx';

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <div className="flex flex-col justify-center">
          <Jumbotron />
        </div>
      </main>
    </div>
  );
}
