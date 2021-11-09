import Head from 'next/head'
import Layout from '../components/layout'
import { CMS_NAME } from '../lib/constants';

export default function Index() {
	return (
		<>
		<Layout>
			<Head>
			<title>Home</title>
			</Head>
		</Layout>
		</>
	)
}