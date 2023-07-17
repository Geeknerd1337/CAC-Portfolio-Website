import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import MainView from '@/views/MainView';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Craig Alan Carroll</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MainView />
    </>
  );
}
