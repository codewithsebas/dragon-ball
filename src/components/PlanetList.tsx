import React from 'react';
import useCharacterStore from "@/store/useCharacterStore";
import PlanetCard from './PlanetCard';

interface Planet {
  id: string;
  name: string;
  isDestroyed: boolean;
  description: string;
  image: string;
}

interface PlanetListProps {
  planets: Planet[];
}

const PlanetList: React.FC<PlanetListProps> = ({ planets }) => {
  // Puedes agregar lógica de favoritos para planetas si es necesario
  const { addFavorite, removeFavorite, isFavorite } = useCharacterStore();

  const handleFavoriteToggle = (planet: Planet) => {
    if (isFavorite(planet.id)) {
      removeFavorite(planet.id);
    } else {
      addFavorite(planet);
    }
  };

  return (
    <div className='grid grid-cols-2 gap-4'>
      {planets.map((planet) => (
        <PlanetCard
          key={planet.id}
          planet={planet}
          onFavoriteToggle={() => handleFavoriteToggle(planet)}
          isFavorite={isFavorite(planet.id)} // Asegúrate de que la lógica para verificar favoritos esté implementada
        />
      ))}
    </div>
  );
};

export default PlanetList;
