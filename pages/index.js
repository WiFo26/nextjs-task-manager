import Head from "next/head";
import { useContext } from "react";
import { Main } from "../components/containers/Main";
import { ThemeContext } from "../store/theme-context";
import styles from "../styles/Home.module.css";

export default function Home() {
const {theme} = useContext(ThemeContext)
return (
    <div className={styles.container} style={{
      background: theme.background
    }}>
      <Head>
        <title>T O D O</title>
        <meta name="description" content="The next generation of TODO app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </div>
  );
}
