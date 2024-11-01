import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Planet {
    id: string; // Asegúrate de que el tipo de id sea adecuado para tu API
    name: string;
    isDestroyed: boolean; // Indica si el planeta está destruido
    description: string; // Descripción del planeta
    image: string; // URL de la imagen del planeta
}

interface PlanetCardProps {
    planet: Planet;
    onFavoriteToggle: () => void;
    isFavorite: boolean;
}

const PlanetCard: React.FC<PlanetCardProps> = ({ planet, onFavoriteToggle, isFavorite }) => {
    return (
        <div className='border rounded p-4'>
            <Image
                src={planet.image}
                alt={planet.name}
                width={150}
                height={150}
                loading="lazy"
            />
            <h2>{planet.name}</h2>
            <p>Estado: {planet.isDestroyed ? 'Destruido' : 'Intacto'}</p>
            <p>Descripción: {planet.description}</p>
            <div className='flex items-center gap-3'>
                <button onClick={onFavoriteToggle} className="bg-blue-500 text-white rounded px-2 py-1">
                    {isFavorite ? 'Eliminar de Favoritos' : 'Agregar a Favoritos'}
                </button>
                <Link href={`/planets/${planet.id}`} className="bg-blue-500 text-white rounded px-2 py-1">
                    Detalles
                </Link>
            </div>
        </div>
    );
};

export default PlanetCard;
