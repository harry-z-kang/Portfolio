import { useState } from "react";
import { NextPage } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClipboard } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import Header from "../components/Header";
import contactMeStyles from "../styles/contactMe.module.scss";

const Contact: NextPage = (): React.ReactElement => {
  const [phoneNumberCopied, setPhoneNumberCopied] = useState<Boolean>(false);
  const [addressCopied, setAddressCopied] = useState<Boolean>(false);

  const copyPhoneNumber = async () => {
    await navigator.clipboard.writeText("+14703987810");
    setPhoneNumberCopied(true);
    setTimeout(() => setPhoneNumberCopied(false), 1000);
  };

  const copyAddress = async () => {
    await navigator.clipboard.writeText(
      "Apt. 1528, 200 W Monroe St., Phoenix, AZ, 85003-1763"
    );
    setAddressCopied(true);
    setTimeout(() => setAddressCopied(false), 1000);
  };

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
        <div className={contactMeStyles.boxes__box}>
          <a href="mailto:harry.z.kang@outlook.com">
            <span className="text-secondary">Email: </span>
            harry.z.kang@outlook.com
          </a>
        </div>
        <div
          className={contactMeStyles.boxes__box}
          onClick={async () => await copyPhoneNumber()}
        >
          <FontAwesomeIcon
            size="1x"
            color={phoneNumberCopied ? "green" : "black"}
            icon={phoneNumberCopied ? faCheck : faClipboard}
            className={contactMeStyles.boxes__box__clip}
          />
          <span className="text-secondary">Phone Number: </span>
          +1 (470) 398-7810
        </div>
        <div
          className={contactMeStyles.boxes__box}
          onClick={async () => await copyAddress()}
        >
          <FontAwesomeIcon
            size="1x"
            color={addressCopied ? "green" : "black"}
            icon={addressCopied ? faCheck : faClipboard}
            className={contactMeStyles.boxes__box__clip}
          />
          <span className="text-secondary">Address: </span>
          Apt 1528, 200 W Monroe St., Phoenix, AZ, 85003-1763
        </div>
      </div>
    </div>
  );
};

export default Contact;
