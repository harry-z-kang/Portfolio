import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import Layout from "../components/Layout";
import "../styles/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";

const Portfolio = ({ Component, pageProps }: AppProps): React.ReactElement => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .catch((error) => console.error("Service worker registration failed:", error));
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default Portfolio;
