import Head from "next/head";
import { useState, useEffect } from "react";
import { Container } from "@/components/Layout";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import Loader from "@/components/Shared/Loader";

type Eposide = {
  title: string;
  name: string;
  embedUrl: string;
};

const Watch: React.FC = () => {
  const [eposides, setEposides] = useState<Eposide[]>([]);
  const [video, setVideo] = useState<Eposide>({
    title: "",
    name: "",
    embedUrl: "",
  });
  const router = useRouter();
  const id: any = router.query.id;
  const fetchEposides = async () => {
    const response = await fetch("/api/watch/" + id);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const eposidesJson = await response.json();
    setEposides(eposidesJson);
    setVideo(eposidesJson[0]);
  };
  const openVideo = (video: Eposide) => {
    setVideo(video);
  };
  useEffect(() => {
    fetchEposides();
  }, [id]);
  return (
    <>
      <Head>
        <title>{video.name || "Yükleniyor..."}</title>
      </Head>
      <Navbar />
      {eposides.length === 0 ? (
        <div className={`flex justify-center mt-10`}>
          <Loader />
        </div>
      ) : (
        <Container>
          <div className={`mt-5 md:grid md:grid-cols-6 flex flex-col gap-5`}>
            <div className={`md:col-span-4`}>
              <iframe
                allowFullScreen
                src={video.embedUrl}
                frameBorder="0"
                className={`w-full md:h-[480px] h-[200px]`}
              ></iframe>
            </div>
            <div className={`md:col-span-2`}>
              <div
                className={`w-full h-full border border-slate-800 rounded-lg`}
              >
                <h3 className={`mx-4 py-4 border-b border-slate-800 text-xl`}>
                  Bölümler
                </h3>
                <ul className={`overflow-hidden overflow-y-auto h-[400px] p-3`}>
                  {eposides.map((item: any, index: number) => (
                    <li
                      key={index}
                      onClick={() => openVideo(item)}
                      className={`${
                        item.embedUrl === video.embedUrl &&
                        "bg-primary/75 pointer-events-none"
                      } flex cursor-pointer justify-between align-center py-3 border-b-1 hover:bg-primary px-2 rounded-md`}
                    >
                      <p>{item.title}</p>
                      <p>{item.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default Watch;
