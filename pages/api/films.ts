import type { NextApiRequest, NextApiResponse } from "next";
import {
  getDocs,
  collection,
  query,
  limit,
  orderBy,
  DocumentData,
} from "firebase/firestore";
import { db } from "@/config/db";

type Film = {
  id: string;
  title:string;
  info:string;
  imdb:number;
  poster: string;
  backdrop:string;
};
type Error = {
  errorCode: string;
  message: string;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Film | Error>
) => {
  await getDocs(
    query(collection(db, "series"), limit(24))
  )
    .then((querySnapshot: DocumentData) => {
      const response = querySnapshot.docs.map((doc: any) => ({
        id: doc.id,
        title: doc.data().title,
        info: doc.data().details.overview,
        imdb: doc.data().details.vote_average.toFixed(1),
        poster: doc.data().details.poster_path,
        backdrop: doc.data().details.backdrop_path
      }));
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(400).json({
        errorCode: err.code,
        message: err.message,
      });
    });
};

export default handler;
