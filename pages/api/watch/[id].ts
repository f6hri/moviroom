import type { NextApiRequest, NextApiResponse } from 'next';
import { getDoc, doc, DocumentData } from "firebase/firestore";
import { db } from '@/config/db';

type Eposide = {
  title: string;
  name: string;
  embedUrl: string;
}
type Error = {
  errorCode: string,
  message: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Eposide[] | Error>) => {
  const id: any = req.query.id;
  await getDoc(doc(db, "series", id))
    .then((querySnapshot: DocumentData) => {
      res.status(200).json(querySnapshot.data().eposides)
    }).catch((err) => {
      res.status(400).json({
        errorCode: err.code,
        message: err.message
      })
    })
}

export default handler;
