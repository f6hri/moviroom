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
  posterPath: string;
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
    query(collection(db, "series"), orderBy("imdb", "desc"), limit(24))
  )
    .then((querySnapshot: DocumentData) => {
      const response = querySnapshot.docs.map((doc: any) => ({
        id: doc.id,
        title: doc.data().title,
        info: doc.data().info,
        imdb: doc.data().imdb,
        poster: doc.data().poster,
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
