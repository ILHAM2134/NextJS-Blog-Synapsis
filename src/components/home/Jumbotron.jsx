import styles from '@/styles/Jumbotron.module.css';
import Link from 'next/link';

export default function Jumbotron() {
  return (
    <div className={styles.jumbotron}>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-white-900/10 hover:ring-gray-900/20 hover:bg-indigo-700 hover:text-white">
                <span className="text-gray-100">
                  Announcing our next round of funding.
                  <Link href="/" className="font-semibold text-indigo-100">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </Link>
                </span>
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl text-slate-200">
                Latest relevant, sharp, and insightful Blog
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-200 sm:text-center">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className="mt-8 flex gap-x-4 justify-center">
                <Link
                  href="/blog"
                  className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                >
                  Get started
                  <span className="text-indigo-200" aria-hidden="true">
                    &rarr;
                  </span>
                </Link>
                <Link
                  href="/user"
                  className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-300 ring-1 ring-white-100/20 hover:ring-gray-100/20"
                >
                  See Users
                  <span className="text-gray-400" aria-hidden="true">
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Link
          className="text-white text-italic mb-3 text-end"
          href="https://www.vecteezy.com/free-vector/secure"
        >
          Secure Vectors by Vecteezy
        </Link>
      </main>
    </div>
  );
}
