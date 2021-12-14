import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Navigation from "../components/Navigation";
import "@fortawesome/fontawesome-svg-core/styles.css";

const Portfolio = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <div>
      <Navigation />
      <Component {...pageProps} />
    </div>
  );
};

export default Portfolio;
