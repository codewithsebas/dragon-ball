import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

interface CharacterCardProps {
    character: Character;
    onFavoriteToggle: () => void;
    isFavorite: boolean;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, onFavoriteToggle, isFavorite }) => {
    return (
        <div className='border rounded p-4'>
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
            <div className='flex items-center gap-3'>
                <button onClick={onFavoriteToggle} className=" bg-blue-500 text-white rounded px-2 py-1">
                    {isFavorite ? 'Eliminar de Favoritos' : 'Agregar a Favoritos'}
                </button>
                <Link href={`/characters/${character.id}`} className=" bg-blue-500 text-white rounded px-2 py-1">
                    Detalles
                </Link>
            </div>
        </div>
    );
};

export default CharacterCard;
