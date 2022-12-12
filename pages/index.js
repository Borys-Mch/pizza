import Head from "next/head";
import Image from "next/legacy/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in Newyork</title>
        <meta name="description" content="Best pizza in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Home Page</h1>
    </div>
  );
}
