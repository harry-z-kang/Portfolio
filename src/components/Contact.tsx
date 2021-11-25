import { FC, useEffect } from "react";
import Header from "./common/Header";
import "./Contact.scss";

const Contact: FC = (): JSX.Element => {
  useEffect(() => {
    document.title = "Contact Me";
  });

  return (
    <div className="container">
      <Header
        largeHeading="Contact Me"
        smallHeading="This is how you can reach me..."
      />
      <div className="boxes">
        <div>
          <a href="mailto:harry.z.kang@outlook.com">
            <span className="text-secondary">Email: </span>
            harry.z.kang@outlook.com
          </a>
        </div>
        <div>
          <span
            className="text-secondary"
            onClick={() => navigator.clipboard.writeText("+14703987810")}
          >
            Phone Number:{" "}
          </span>
          +1 (470) 398-7810
        </div>
        <div>
          <span
            className="text-secondary"
            onClick={() =>
              navigator.clipboard.writeText(
                "333738 Georgia Tech Station, Atlanta, GA 30332"
              )
            }
          >
            Address:{" "}
          </span>
          333738 Georgia Tech Station, Atlanta, GA 30332
        </div>
      </div>
    </div>
  );
};

export default Contact;
