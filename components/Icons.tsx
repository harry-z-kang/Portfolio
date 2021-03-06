import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import iconsStyles from "../styles/components/Icons.module.scss";

export enum IconAlignment {
  Start = "start",
  Center = "center",
  End = "end",
}

interface IconsProps {
  alignment: IconAlignment;
}

const Icons: FC<IconsProps> = ({
  alignment = IconAlignment.Start,
}): JSX.Element => {
  return (
    <div
      className={[iconsStyles.icons, iconsStyles[`icons-${alignment}`]].join(
        " "
      )}
    >
      <a href="https://twitter.com/harry_z_kang">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.facebook.com/harryzkang">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/zixuan-kang-090220171/">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://github.com/harry-z-kang?tab=repositories">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://gtvault-my.sharepoint.com/:b:/g/personal/zkang35_gatech_edu/EW73vP4c_dZIpmLWzhaysaABn2ZblpziUpggfUwHAo-02A?e=Bm58Dn">
        <FontAwesomeIcon icon={faFile} size="2x" />
      </a>
    </div>
  );
};

export default Icons;
