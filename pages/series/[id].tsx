import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Badge from "@/components/Shared/Badge";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { FiPlayCircle } from "react-icons/fi";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Shared/Loader";
import { DefaultLink } from "@/components/Shared/Link";

type Eposide = {
    title: string;
    name: string;
    embedUrl: string;
}

type Genre = {
    id: number;
    name: string
}

type Detail = {
    title: string;
    poster: string;
    backdrop: string;
    imdb: string;
    date: string;
    genres: Genre[];
    info: string;
    trailerYoutubeId: string;
    eposides: Eposide[]
}

const Series: React.FC = () => {
    const [detail, setDetail] = useState<Detail>({
        title: "",
        poster: "",
        backdrop: "",
        imdb: "",
        date: "",
        genres: [],
        info: "",
        trailerYoutubeId: "",
        eposides: []
    });
    const router = useRouter();
    const id: any = router.query.id;
    const fetchDetail = async () => {
        const response = await fetch("/api/series/" + id);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const detailJson = await response.json();
        setDetail(detailJson)
        console.log("fetch");
    }
    useEffect(() => {
        fetchDetail();
    }, [id])
    return (
        <>
            <Head>
                <title>{detail.title || "Yükleniyor..."}</title>
            </Head>
            <Navbar />
            {detail.title === "" ? (
                <div className={`flex justify-center mt-10`}>
                    <Loader />
                </div>
            ) : (
                <>
                    <Hero backdrop={detail.backdrop} customStyle={`flex justify-center`}>
                        <div className={`flex gap-5 flex-wrap items-center md:flex-nowrap text-center md:text-start`}>
                            <Image className={`rounded-md mx-auto`} src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${detail.poster}`} width={180} height={180} alt="poster" />
                            <div className={`flex flex-col gap-3`}>
                                <h1 className={`text-3xl`}>{detail.title}</h1>
                                <div className={`flex md:justify-start md:items-center flex-wrap justify-center gap-2`}>
                                    <Badge title={detail.date} color="bg-gray-600" />
                                    <Badge title={detail.imdb} color="bg-yellow-500" />
                                    {
                                        detail.genres.map((genre, index) => (
                                            <Badge key={index} title={genre.name} color="bg-cyan-500" />
                                        ))
                                    }
                                </div>
                                <p className={`text-lg`}>{detail.info}</p>
                                <div className={`flex md:gap-3 flex-col md:items-center flex-wrap md:flex-row`}>
                                    <DefaultLink href={`/watch/${id}`} customStyle={`text-lg md:p-1 p-3 md:px-8 md:mt-0 mt-5  rounded-lg md:w-fit bg-primary hover:bg-red-800 transition ease`}>
                                        İzle
                                    </DefaultLink>
                                    <a href={`https://www.youtube.com/watch?v=${detail.trailerYoutubeId}`} className={`font-medium text-lg md:p-1 p-3 md:px-8 md:mt-0 mt-5  rounded-lg md:w-fit border border-primary text-primary hover:text-slate-100 hover:bg-primary transition ease`} rel="noopener noreferrer" target="_blank">
                                        Fragman İzle
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Hero>
                </>
            )}
        </>
    )

}

export default Series;