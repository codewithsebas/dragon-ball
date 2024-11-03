"use client";
import React, { useEffect, useState } from "react";
import { fetchCharacterById } from "@/utils/dragonBallApi";
import { useParams } from "next/navigation";
import useCharacterStore from "@/store/useCharacterStore";
import CharacterCard from "@/components/CharacterCard";
import { LuLoader2 } from "react-icons/lu";
import BackButton from "@/components/BackButton";

interface CharacterData {
  id: string;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
}

const Character = () => {
  const [character, setCharacter] = useState<CharacterData | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const getCharacter = async () => {
      try {
        const data = await fetchCharacterById(String(id));
        setCharacter(data);
      } catch (error) {
        console.error("Error fetching character:", error);
      }
    };
    getCharacter();
  }, [id]);

  const { addFavorite, removeFavorite, isFavorite } = useCharacterStore();

  const handleFavoriteToggle = (character: CharacterData) => {
    if (isFavorite(character.id)) {
      removeFavorite(character.id);
    } else {
      addFavorite(character);
    }
  };

  if (!character) return (
    <div className="w-full min-h-screen text-white flex items-center justify-center">
      <p className="flex flex-col gap-3 items-center text-xl">
        <LuLoader2 className="animate-spin" size={30} />
        Cargando personaje...</p>
    </div>
  );

  return (
    <div className="p-4 rounded relative z-10 w-full min-h-screen flex items-center justify-center">
      <div className="max-w-sm w-full flex flex-col gap-3">
        <BackButton title="Volver" link="/" />
        <CharacterCard
          show={true}
          character={character}
          onFavoriteToggle={() => handleFavoriteToggle(character)}
          isFavorite={isFavorite(character.id)} />
      </div>
    </div>
  );
};

export default Character;
