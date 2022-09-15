import Head from "next/head";
import { Main } from "../components/containers/Main";
import styles from "../styles/Home.module.css";

export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>T O D O</title>
        <meta name="description" content="The next generation of TODO app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </div>
  );
}
