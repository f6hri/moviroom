import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Badge from "@/components/Shared/Badge";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { FiPlayCircle } from "react-icons/fi";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Shared/Loader";
import { ButtonLink } from "@/components/Shared/Link";

type Eposide = {
    title: string;
    name: string;
    embedUrl: string;
}

type Detail = {
    title: string;
    poster: string;
    imdb: string;
    date: string;
    genre: string;
    info: string;
    eposides: Eposide[]
}

const Series: React.FC = () => {
    const [detail, setDetail] = useState<Detail>({
        title: "",
        poster: "",
        imdb: "",
        date: "",
        genre: "",
        info: "",
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
                    <Hero>
                        <div className={`flex gap-5 flex-wrap items-center md:flex-nowrap`}>
                            <Image className={`rounded-md`} src={detail.poster} width={180} height={180} alt="poster" />
                            <div className={`flex flex-col gap-3`}>
                                <h1 className={`text-3xl`}>{detail.title}</h1>
                                <div className={`flex items-center gap-2`}>
                                    <Badge title={detail.date} color="bg-gray-600" />
                                    <Badge title={detail.imdb} color="bg-yellow-500" />
                                    <Badge title={detail.genre} color="bg-cyan-600" />
                                </div>
                                <p className={`text-lg`}>{detail.info}</p>
                                <ButtonLink href={`/watch/${id}`} icon={<FiPlayCircle />} title="İzle" customStyle="bg-primary/75" />
                            </div>
                        </div>
                    </Hero>
                </>
            )}
        </>
    )

}

export default Series;