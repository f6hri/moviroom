import type { NextApiRequest, NextApiResponse } from "next";
import { getDocs, collection, DocumentData } from "firebase/firestore";
import { db } from "@/config/db";


type Film = {
    id: string;
    poster: string;
}
type Error = {
    errorCode: string,
    message: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Film[] | Error>) => {
    const q: any = req.query.q;
    await getDocs(collection(db, "series"))
        .then((querySnapshot: DocumentData) => {
            const out: Film[] = [];
            querySnapshot.docs.map((doc: any) => {
                if (doc.data().title.search(eval(`/${q}/i`)) >= 0) {
                    out.push({
                        id: doc.id,
                        poster: doc.data().poster
                    })
                }
            });
            res.status(200).json(out)
        }).catch((err) => {
            res.status(400).json({
                errorCode: err.code,
                message: err.message
            })
        })
}

export default handler;