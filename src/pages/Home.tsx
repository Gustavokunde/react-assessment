import React, { useEffect } from "react";
import CharacterCard from "../components/CharacterCard";
import Loader from "../components/Loader";
import { useMarvelStore } from "../store/marvelStore";

export default function Home() {
  const { characters, fetchCharacters, loading, error } = useMarvelStore();

  useEffect(() => {
    fetchCharacters();
  }, []);

  if (loading) return <Loader />;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-6 min-h-screen bg-darkBg text-lightText">
      <h1 className="text-3xl font-bold mb-6 text-center">Marvel Characters</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        {characters.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>
    </div>
  );
}
