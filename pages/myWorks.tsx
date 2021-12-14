import { GetStaticProps, GetStaticPropsResult, NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import { server } from "../config";
import myWorksStyles from "../styles/myWorks.module.scss";

interface Project {
  description: string;
  img: string;
  github: string;
  website: string;
  name: string;
}

interface myWorksProps {
  projects: Project[];
}

export const getStaticProps: GetStaticProps<myWorksProps> = async (
  context
): Promise<GetStaticPropsResult<myWorksProps>> => {
  const res = await fetch(`${server}/api/projects`);
  const projects = await res.json();

  return {
    props: {
      projects,
    },
  };
};

const Works: NextPage<myWorksProps> = ({ projects }): JSX.Element => {
  return (
    <div className="container">
      <Head>
        <title>Harry Kang | My Works</title>
      </Head>
      <Header
        largeHeading="My Work"
        smallHeading="Check out some of my projects..."
      />
      <div className={myWorksStyles.projects}>
        {projects.map((project, index) => (
          <div className={myWorksStyles.projects__item} key={index}>
            <a
              href={project?.website}
              className={myWorksStyles.projects__item__card}
            >
              <Image
                className={myWorksStyles.projects__item__card__img}
                src={require(`../public/assets/project/${project.img}`).default}
                alt={project.name}
                width={3}
                height={2}
                layout="responsive"
              />
              <p className={myWorksStyles.projects__item__card__desc}>
                {project.description}
              </p>
            </a>
            <a
              href={project.website}
              className={[myWorksStyles.btn, myWorksStyles["btn-light"]].join(
                " "
              )}
            >
              <FontAwesomeIcon icon={faEye} /> {project.name}
            </a>
            <a
              href={project.github}
              className={[myWorksStyles.btn, myWorksStyles["btn-dark"]].join(
                " "
              )}
            >
              <FontAwesomeIcon icon={faGithub} /> Github
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
