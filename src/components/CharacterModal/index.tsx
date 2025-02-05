import React, { memo } from "react";
import { Character } from "../CharacterCard";
interface Props {
  onCloseModal: () => void;
  character: Character;
}

const CharacterModal = memo(({ onCloseModal, character }: Props) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-darkCard p-8 rounded-lg w-80 text-lightText relative">
        <button
          className="absolute top-2 right-2 text-white text-xl"
          name="close"
          data-testid="close"
          onClick={onCloseModal}
        >
          ✖
        </button>
        <img
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
          className="w-full h-40 object-cover rounded-md"
        />
        <h2 className="text-xl font-bold mt-4">{character.name}</h2>
        <p className="mt-2">
          {character.description || "No description available."}
        </p>
      </div>
    </div>
  );
});

export default CharacterModal;
