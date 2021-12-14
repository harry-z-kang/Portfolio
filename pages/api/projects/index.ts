import { NextApiRequest, NextApiResponse } from "next";
import { projects } from "../../../projects";

const getProjects = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(projects);
};

export default getProjects;
