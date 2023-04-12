import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Container, Main } from "@/components/Layout";
import Sidebar from "@/components/Sidebar";
import Loader from "@/components/Shared/Loader";
import FilmCard from "@/components/FilmCard";
import HeroCard from "@/components/HeroCard";

export type Films = {
  id: string;
  poster: string;
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
      <Main customStyle={`grid grid-cols-6 relative`}>
        <Sidebar />
        <Container customStyle={`col-span-5`}>
          {films.length === 0 ? (
            <Loader />
          ) : (
            <>
              <HeroCard
                id={films[0].id}
                title={films[0].title}
                desc={films[0].info}
                imdb={films[0].imdb}
              />
              <div className="flex gap-10 flex-wrap justify-center">
                {films.map((item: any) => (
                  <FilmCard key={item.id} poster={item.poster} id={item.id} />
                ))}
              </div>
            </>
          )}
        </Container>
      </Main>
    </>
  );
};

export default Index;
