import times from "lodash/times";
import "./PageNotFound.scss";

const PageNotFound = () => {
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
        times(11, (j) => <div className={`cell cell-${i}-${j}`}></div>)
      )}
    </div>
  );
};

export default PageNotFound;
