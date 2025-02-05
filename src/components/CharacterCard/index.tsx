import { memo } from 'react';

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
      className="border rounded-lg shadow-lg p-4 bg-white transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500" 
      role="article" 
      aria-labelledby={`character-title-${character.id}`}
      tabIndex={0}
    >
      <img 
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
        alt={character.name} 
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 id={`character-title-${character.id}`} className="text-lg font-bold mt-2">{character.name}</h2>
      <p className="text-sm text-gray-600" aria-live="polite">
        {character.description || "No description available."}
      </p>
    </div>
  );
});

export default CharacterCard;
