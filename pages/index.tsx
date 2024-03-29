import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { ResponsiveLayout } from "@/components/Layout";
import Loader from "@/components/Shared/Loader";
import FilmCard from "@/components/FilmCard";
import HeroCard from "@/components/HeroCard";

export type Films = {
  id: string;
  poster: string;
  title: string;
  info: string;
  imdb: number;
  backdrop:string;
};

const Index: React.FC = () => {
  const [films, setFilms] = useState<Films[]>([]);
  const router = useRouter();
  const fetchFilms = async () => {
    const response = await fetch("/api/films");
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const films = await response.json();
    setFilms(films);
  };
  useEffect(() => {
    fetchFilms();
  }, []);
  return (
    <>
      <Head>
        <title>Moviroom</title>
      </Head>
      <ResponsiveLayout>
      {films.length === 0 ? (
            <Loader />
          ) : (
            <div className={`${styles.content.style} ${styles.content.responsive}`}>
              <HeroCard
                id={films[1].id}
                title={films[1].title}
                desc={films[1].info}
                imdb={films[1].imdb}
                backdrop={films[1].backdrop}
              />
              <div className={`${styles.filmContent.style}`}>
                {films.map((item: any) => (
                  <FilmCard key={item.id} poster={item.poster} id={item.id} />
                ))}
              </div>
            </div>
          )}
      </ResponsiveLayout>
    </>
  );
};

const styles = {
  root: {
    style: `grid-cols-6 relative `,
    responsive: `md:grid `,
  },
  container: {
    responsive: `md:col-span-5 `,
  },
  content: {
    style: `max-w-[1280px] `,
    responsive:`sm:px-8 px-0 `
  },
  filmContent: {
    style: `flex flex-row justify-center gap-8 flex-wrap `,
  },
};

export default Index;
