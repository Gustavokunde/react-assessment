import React, { memo, useState } from 'react';

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
  const [isModalOpen, setModalOpen] = useState(false);

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
        />
        <h2 id={`character-title-${character.id}`} className="text-sm font-bold mt-2 text-center">{character.name}</h2>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-darkCard p-6 rounded-lg w-80 text-lightText relative">
            <button className="absolute top-2 right-2 text-white text-xl" onClick={() => setModalOpen(false)}>✖</button>
            <img 
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
              alt={character.name} 
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-xl font-bold mt-4">{character.name}</h2>
            <p className="mt-2">{character.description || "No description available."}</p>
          </div>
        </div>
      )}
    </>
  );
});

export default CharacterCard;
