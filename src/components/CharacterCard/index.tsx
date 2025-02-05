import React, { memo } from "react";

interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: { path: string; extension: string };
}

interface Props {
  character: Character;
}

const CharacterCard = memo(({ character }: Props) => {
  return (
    <div
      className="border rounded-lg shadow-lg p-4 bg-white transition-transform transform hover:scale-105"
      role="article"
      aria-label={character.name}
    >
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-lg font-bold mt-2">{character.name}</h2>
      <p className="text-sm text-gray-600" aria-live="polite">
        {character.description || "No description available."}
      </p>
    </div>
  );
});

export default CharacterCard;
