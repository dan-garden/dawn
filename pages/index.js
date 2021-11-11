import Head from 'next/head';
import Layout from '../components/Layout';

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Home</title>
        </Head>
        <button className="btn btn-green">Button</button>
      </Layout>
    </>
  );
}
