import { NextApiRequest, NextApiResponse } from "next";
import { lyrics } from "../../../lyrics";

const getLyrics = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(lyrics);
};

export default getLyrics;
