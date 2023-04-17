import type { NextApiRequest, NextApiResponse } from 'next';
import { getDoc, doc, DocumentData } from "firebase/firestore";
import { db } from '@/config/db';

type EposideContent = {
  season: number;
  eposides: Eposide[];
}
type Eposide = {
  title: string;
  name: string;
  embedUrl: string;
}
type Error = {
  errorCode: string,
  message: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<EposideContent[] | Error>) => {
  const id: any = req.query.id;
  await getDoc(doc(db, "series", id))
    .then((querySnapshot: DocumentData) => {
      const eposidesData = querySnapshot.data().eposides;
      const eposidesCount = querySnapshot.data().details.number_of_seasons;
      const eposidesArray:EposideContent[] = []
      for (let i = 1; i <= eposidesCount; i++) {
        const eposideContent = eposidesData.filter((eposide: Eposide) => parseInt(eposide.title.charAt(0)) === i)
        eposidesArray.push({
          season: i,
          eposides: eposideContent
        });
      }
      res.status(200).json(eposidesArray);
    }).catch((err) => {
      res.status(400).json({
        errorCode: err.code,
        message: err.message
      })
    })
}

export default handler;
