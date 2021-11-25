import times from "lodash/times";
import { useEffect } from "react";
import "./PageNotFound.scss";

const PageNotFound = (): JSX.Element => {
  useEffect(() => {
    document.title = "Page Not Found";
  })

  return (
    <div className="matrix">
      <code>
        A: Knock knock
        <br /> B: Who's there?
        <br /> A: A local returned by reference
        <br /> B: reference to who?
        <br /> A: Segmentation fault
      </code>
      {times(9, (i) =>
        times(11, (j) => (
          <div key={i * 10 + j} className={`cell cell-${i}-${j}`}></div>
        ))
      )}
    </div>
  );
};

export default PageNotFound;
