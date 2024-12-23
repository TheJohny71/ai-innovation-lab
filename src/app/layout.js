import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>AI Innovation Lab</title>
      </Head>
      <div>
        {children}
      </div>
    </>
  );
}
