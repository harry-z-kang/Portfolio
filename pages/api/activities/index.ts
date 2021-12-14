import { NextApiRequest, NextApiResponse } from "next";
import { activities } from "../../../activities";

const getActivities = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(activities);
};

export default getActivities;
