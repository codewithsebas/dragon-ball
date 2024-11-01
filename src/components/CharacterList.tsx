import React from 'react';
import useCharacterStore from "@/store/useCharacterStore";
import CharacterCard from './CharacterCard';

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

interface CharacterListProps {
  characters: Character[];
}

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  const { addFavorite, removeFavorite, isFavorite } = useCharacterStore();

  const handleFavoriteToggle = (character: Character) => {
    if (isFavorite(character.id)) {
      removeFavorite(character.id);
    } else {
      addFavorite(character);
    }
  };

  return (
    <div className='grid grid-cols-2 gap-4'>
      {characters.map((character) => (
        <CharacterCard 
          key={character.id}
          character={character}
          onFavoriteToggle={() => handleFavoriteToggle(character)}
          isFavorite={isFavorite(character.id)}
        />
      ))}
    </div>
  );
};

export default CharacterList;
