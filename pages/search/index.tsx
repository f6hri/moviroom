import Head from "next/head";
import { useState } from "react";

import { Container, Main } from "@/components/Layout";
import Sidebar from "@/components/Sidebar";
import CardSkeleton from "@/components/CardSkeleton";
import FilmCard from "@/components/FilmCard";
import { FiSearch } from "react-icons/fi";

type Films = {
  id: string;
  poster: string;
};

const Search: React.FC = () => {
  const [results, setResults] = useState<Films[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const fetchResults = async () => {
    setResults([]);
    setLoading(true);
    const response = await fetch("/api/search/" + query);
    if (!response.ok) {
      setLoading(false);
      throw new Error(`Error: ${response.status}`);
    }
    const resultsJson = await response.json();
    setResults(resultsJson);
    setLoading(false);
  };
  return (
    <>
      <Head>
        <title>Arama Yap</title>
      </Head>
      <Main customStyle={`grid grid-cols-6 relative`}>
        <Sidebar />
        <Container customStyle={`col-span-5`}>
          <div className={`md:w-[50em] mt-5 mx-auto flex gap-4`}>
            <input
              onChange={(e) => setQuery(e.target.value)}
              className={`bg-darkAlpha w-full p-3 text-md rounded-md`}
              placeholder="Arama yap..."
              type="text"
            />
            <button
              type="submit"
              onClick={fetchResults}
              className={`p-3 bg-primary/75 rounded-md px-4 hover:bg-primary transition ease-in`}
            >
              <FiSearch />
            </button>
          </div>
          <div className="flex gap-10 flex-wrap my-10 justify-center">
            {results.length === 0 && loading === true ? (
              <>
                <CardSkeleton />
                <CardSkeleton />
              </>
            ) : (
              <>
                {results.map((item: any) => (
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

export default Search;
