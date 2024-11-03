import React from 'react';
import Image from 'next/image';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

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
    show: boolean;
    character: Character;
    onFavoriteToggle: () => void;
    isFavorite: boolean;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ show, character, onFavoriteToggle, isFavorite }) => {
    const router = useRouter();
    return (
        <div onClick={() => router.push(`/characters/${character.id}`)} className='p-3 relative overflow-hidden cursor-pointer rounded-lg group bg-gradient-to-t from-indigo-400 border border-indigo-300 text-white'>
            <div className='flex flex-col'>
                <h2 className='font-bold'>{character.name}</h2>
                <Image
                    src={character.image}
                    alt={character.name}
                    width={150}
                    height={150}
                    loading="lazy"
                    className='w-full sm:max-w-96 h-full max-h-60 min-h-60 p-2 object-contain duration-200 scale-110 group-hover:scale-[1.2]'
                />
            </div>
            <div className='pt-3 border-t border-indigo-300 text-sm'>
                <p>Ki: <b>{character.ki}</b></p>
                {show && (
                    <p>MaxKi: <b>{character.maxKi}</b></p>
                )}
                <p>Raza: <b>{character.race}</b></p>
                <p>Género: <b>{character.gender}</b></p>
                <p>Afiliación: <b>{character.affiliation}</b></p>
                {show && (
                    <p className='mt-3'>{character.description}</p>
                )}
            </div>

            <div className='w-40 h-40 bg-white/10 absolute -top-14 -left-28 rotate-45 duration-200 group-hover:-left-20 -z-10'></div>

            <button onClick={(e) => {
                e.stopPropagation();
                onFavoriteToggle()
            }} className="rounded absolute top-2 right-2 group text-white">
                {isFavorite ? (<FaHeart className='duration-200 group-active:scale-110' />) : (<FaRegHeart className='duration-200 group-active:scale-110' />)}

            </button>
        </div>
    );
};

export default CharacterCard;
