"use client";
import BackButton from '@/components/BackButton';
import CharacterCard from '@/components/CharacterCard';
import useCharacterStore from '@/store/useCharacterStore';
import React from 'react';
import { FaRegHeart } from 'react-icons/fa';

interface Character {
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

export default function Favorites() {
    const { favorites, addFavorite, removeFavorite, isFavorite } = useCharacterStore();

    const handleFavoriteToggle = (character: Character) => {
        if (isFavorite(character.id)) {
            removeFavorite(character.id);
        } else {
            addFavorite(character);
        }
    };

    return (
        <div className="w-full min-h-screen text-white flex flex-col items-center justify-center relative z-10">
            <div className="max-w-3xl w-full flex flex-col justify-center items-center gap-3 mt-10">

                {favorites.length > 0 && (
                    <>
                        <div className='flex justify-between items-center w-full'>
                            <h1 className="font-bold text-3xl text-white mb-3">Favoritos</h1>
                            <BackButton title="Volver" link="/" />
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10 w-full'>
                            {
                                favorites.map((character) => (
                                    <CharacterCard
                                        show={false}
                                        key={character.id}
                                        character={character}
                                        onFavoriteToggle={() => handleFavoriteToggle(character)}
                                        isFavorite={isFavorite(character.id)}
                                    />
                                ))}
                        </div></>
                )}

                {favorites.length === 0 && (
                    <div className='flex flex-col gap-3 items-center justify-center w-full'>
                        <p className="flex flex-col gap-3 items-center text-xl">
                            <FaRegHeart /> No tienes personajes favoritos</p>

                        <BackButton title="Ir al inicio" link="/" />
                    </div>
                )}

            </div>
        </div>
    );
}
