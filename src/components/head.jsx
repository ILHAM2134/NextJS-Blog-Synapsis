import Head from 'next/head';

export default function HeadComponent({ data }) {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="NextJS Blog App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>{data}</h1>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  console.log(params);
  return {
    props: {
      data: params,
    }, // will be passed to the page component as props
  };
}
