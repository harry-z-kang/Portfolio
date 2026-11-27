import type { FC } from "react";
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
}): React.ReactElement => {
  return (
    <div
      className={[iconsStyles.icons, iconsStyles[`icons-${alignment}`]].join(
        " "
      )}
    >
      <a href="https://twitter.com/harry_z_kang" aria-label="Twitter" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.facebook.com/harryzkang" aria-label="Facebook" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/zixuan-kang-090220171/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://github.com/harry-z-kang?tab=repositories" aria-label="GitHub" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://1drv.ms/b/s!AltiROOwfMyzneguKUdaXBHB1tC2AQ?e=QJt4hD" aria-label="Resume" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faFile} size="2x" />
      </a>
    </div>
  );
};

export default Icons;
