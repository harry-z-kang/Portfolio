import { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import contactMeStyles from "../styles/contactMe.module.scss";

const Contact: NextPage = (): JSX.Element => {
  return (
    <div className="container">
      <Head>
        <title>Harry Kang | Contact Me</title>
      </Head>
      <Header
        largeHeading="Contact Me"
        smallHeading="This is how you can reach me..."
      />
      <div className={contactMeStyles.boxes}>
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
          200 W Monroe St., Phoenix, AZ, 85003-1763
        </div>
      </div>
    </div>
  );
};

export default Contact;
