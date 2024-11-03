"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { fetchCharacterById } from "@/utils/dragonBallApi";
import { useParams } from "next/navigation";
import BackButton from "@/components/BackButton";
import useCharacterStore from "@/store/useCharacterStore";

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

  const handleFavoriteToggle = () => {
    if (!character) return;

    if (isFavorite(character.id)) {
      removeFavorite(character.id);
    } else {
      addFavorite(character);
    }
  };

  if (!character) return <div>Cargando personaje...</div>;

  return (
    <div className="p-4 rounded relative z-10 w-full min-h-screen flex items-center justify-center">
      <div className="max-w-sm bg-white rounded-lg">
        <BackButton />
        <Image
          src={character.image}
          alt={character.name}
          width={150}
          height={150}
          loading="lazy"
        />
        <h2>{character.name}</h2>
        <p>Raza: {character.race}</p>
        <p>Género: {character.gender}</p>
        <p>Afiliación: {character.affiliation}</p>
        <p>Descripción: {character.description}</p>
        <p>Ki: {character.ki}</p>
        <p>Máximo Ki: {character.maxKi}</p>

        <button
          onClick={handleFavoriteToggle}
          className="mt-2 bg-blue-500 text-white rounded px-2 py-1"
        >
          {isFavorite(character.id) ? 'Eliminar de Favoritos' : 'Agregar a Favoritos'}
        </button>
      </div>
    </div>
  );
};

export default Character;
