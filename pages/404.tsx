import times from "lodash/times";
import Head from "next/head";
import four04Styles from "../styles/404.module.scss";

const PageNotFound = (): JSX.Element => {
  return (
    <div className={four04Styles.matrix}>
      <Head>
        <title>Uhhh Ohhh....</title>
      </Head>
      <code className={four04Styles.code}>
        A: Knock knock
        <br /> B: Who's there?
        <br /> A: A local returned by reference
        <br /> B: reference to who?
        <br /> A: Segmentation fault
      </code>
      {times(9, (i) =>
        times(11, (j) => (
          <div
            key={i * 10 + j}
            className={[four04Styles.cell, four04Styles[`cell-${i}-${j}`]].join(
              " "
            )}
          ></div>
        ))
      )}
    </div>
  );
};

export default PageNotFound;
