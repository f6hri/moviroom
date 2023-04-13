import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Container, Main } from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Loader from "@/components/Shared/Loader";
import FilmCard from "@/components/FilmCard";
import HeroCard from "@/components/HeroCard";

export type Films = {
  id: string;
  poster: string;
  title: string;
  info: string;
  imdb: string;
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
      <Navbar />
      <Main customStyle={`${styles.root.style} ${styles.root.responsive}`}>
        <Sidebar />
        <Container customStyle={`${styles.container.responsive}`}>
          {films.length === 0 ? (
            <Loader />
          ) : (
            <div className={`${styles.content.style} ${styles.content.responsive}`}>
              <HeroCard
                id={films[0].id}
                title={films[0].title}
                desc={films[0].info}
                imdb={films[0].imdb}
              />
              <div className={`${styles.filmContent.style}`}>
                {films.map((item: any) => (
                  <FilmCard key={item.id} poster={item.poster} id={item.id} />
                ))}
              </div>
            </div>
          )}
        </Container>
      </Main>
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
