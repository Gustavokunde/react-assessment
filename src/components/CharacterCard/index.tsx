import React, { memo, useState } from "react";
import CharacterModal from "../CharacterModal";

export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: { path: string; extension: string };
}

interface Props {
  character: Character;
}

const CharacterCard = memo(({ character }: Props) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const onCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div
        className="border rounded-lg shadow-lg p-2 bg-darkCard transition-transform transform hover:scale-105 cursor-pointer w-48 h-48 flex flex-col items-center justify-center"
        role="article"
        aria-labelledby={`character-title-${character.id}`}
        tabIndex={0}
        onClick={() => setModalOpen(true)}
      >
        <img
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
          className="w-20 h-20 object-cover rounded-md"
          aria-label={character.name}
        />
        <h2
          id={`character-title-${character.id}`}
          className="text-sm font-bold mt-2 text-center"
        >
          {character.name}
        </h2>
        <p
          className="text-sm text-gray-600"
          data-testid="character-description"
        >
          {character.description || "No description available."}
        </p>
      </div>

      {isModalOpen && (
        <CharacterModal character={character} onCloseModal={onCloseModal} />
      )}
    </>
  );
});

export default CharacterCard;
