import type { NextApiRequest, NextApiResponse } from 'next';
import { getDoc, doc, DocumentData } from "firebase/firestore";
import { db } from '@/config/db';

type Films = {
  id: string;
  title:string;
  poster:string;
  date:string;
  imdb:string;
  genre:string;
  info:string;
}
type Error = {
  errorCode: string,
  message: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Films | Error>) => {
  const id: any = req.query.id;
  await getDoc(doc(db, "series", id))
    .then((querySnapshot: DocumentData) => {
      res.status(200).json({
        id:querySnapshot.id,
        title:querySnapshot.data().title,
        poster:querySnapshot.data().poster,
        date:querySnapshot.data().date,
        imdb:querySnapshot.data().imdb,
        genre:querySnapshot.data().genre,
        info:querySnapshot.data().info
      })
    }).catch((err) => {
      res.status(400).json({
        errorCode: err.code,
        message: err.message
      })
    })
}

export default handler;
