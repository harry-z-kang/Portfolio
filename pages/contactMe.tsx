import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClipboard } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import Header from "../components/Header";
import { useClipboard } from "../hooks/useClipboard";
import contactMeStyles from "../styles/contactMe.module.scss";

const Contact = () => {
  const phone = useClipboard("+14703987810");

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
        <button
          type="button"
          aria-label={phone.copied ? "Phone number copied" : "Copy phone number"}
          className={contactMeStyles.boxes__box}
          onClick={phone.copy}
        >
          <FontAwesomeIcon
            size="1x"
            color={phone.copied ? "green" : "black"}
            icon={phone.copied ? faCheck : faClipboard}
            className={contactMeStyles.boxes__box__clip}
          />
          <span className="text-secondary">Phone Number: </span>
          +1 (470) 398-7810
        </button>
      </div>
      <p role="status" aria-live="polite">
        {phone.error || (phone.copied ? "Copied to clipboard." : "")}
      </p>
    </div>
  );
};

export default Contact;
