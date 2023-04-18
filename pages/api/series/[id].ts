import type { NextApiRequest, NextApiResponse } from 'next';
import { getDoc, doc, DocumentData } from "firebase/firestore";
import { db } from '@/config/db';

type Films = {
  id: string;
  title: string;
  poster: string;
  backdrop: string;
  date: string;
  imdb: string;
  trailerYoutubeId: string;
  genres: Object[];
  info: string;
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
        id: querySnapshot.id,
        title: querySnapshot.data().title,
        poster: querySnapshot.data().details.poster_path,
        backdrop: querySnapshot.data().details.backdrop_path,
        date: querySnapshot.data().details.first_air_date,
        imdb: querySnapshot.data().details.vote_average.toFixed(1),
        trailerYoutubeId: querySnapshot.data().trailers.results[0].key,
        genres: querySnapshot.data().details.genres,
        info: querySnapshot.data().details.overview
      })
    }).catch((err) => {
      res.status(400).json({
        errorCode: err.code,
        message: err.message
      })
    })
}

export default handler;
