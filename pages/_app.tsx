import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";

const Portfolio = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default Portfolio;
