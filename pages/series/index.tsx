import Head from "next/head";
import { useState, useEffect } from "react";

import { Container, Main } from "@/components/Layout";
import Sidebar from "@/components/Sidebar";
import Loader from "@/components/Shared/Loader";
import FilmCard from "@/components/FilmCard";
import { Films } from "..";

const Series: React.FC = () => {
  const [films, setFilms] = useState<Films[]>([]);
  const fetchFilms = async () => {
    const response = await fetch("/api/series/");
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
        <title>Diziler</title>
      </Head>
      <Main customStyle={`grid grid-cols-6 relative`}>
        <Sidebar />
        <Container customStyle={`col-span-5`}>
          <div className="flex gap-10 flex-wrap justify-center">
            {films.length === 0 ? (
              <Loader />
            ) : (
              <>
                {films.map((item: any) => (
                  <FilmCard key={item.id} poster={item.poster} id={item.id} />
                ))}
              </>
            )}
          </div>
        </Container>
      </Main>
    </>
  );
};

export default Series;
