"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { fetchPlanetsById } from "@/utils/dragonBallApi"; // Asegúrate de usar la función correcta
import { useParams } from "next/navigation";
import BackButton from "@/components/BackButton";
import useCharacterStore from "@/store/useCharacterStore";

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

interface Planet {
    id: number;
    name: string;
    isDestroyed: boolean;
    description: string;
    image: string;
    characters: Character[];
}

const Planet = () => {
    const [planet, setPlanet] = useState<Planet | null>(null);
    const { id } = useParams();

    useEffect(() => {
        const getPlanet = async () => {
            try {
                const data = await fetchPlanetsById(String(id)); // Usar la función correcta
                setPlanet(data);
            } catch (error) {
                console.error("Error fetching planet:", error);
            }
        };
        getPlanet();
    }, [id]);

    const { addPlanet, removePlanet, isPlanetFavorite } = useCharacterStore();

    const handleFavoriteToggle = () => {
        if (!planet) return;

        if (isPlanetFavorite(planet.id)) {
            removePlanet(planet.id);
        } else {
            addPlanet(planet);
        }
    };

    if (!planet) return <div>Cargando planeta...</div>;

    return (
        <div className="p-4 border rounded max-w-sm">
            <BackButton />
            <Image
                src={planet.image}
                alt={planet.name}
                width={150}
                height={150}
                loading="lazy"
            />
            <h2>{planet.name}</h2>
            <p>Estado: {planet.isDestroyed ? 'Destruido' : 'No destruido'}</p>
            <p>Descripción: {planet.description}</p>
            <p>Personajes:</p>
            <ul>
                {planet.characters.map((character) => (
                    <li key={character.id}>{character.name}</li>
                ))}
            </ul>

            <button
                onClick={handleFavoriteToggle}
                className="mt-2 bg-blue-500 text-white rounded px-2 py-1"
            >
                {isPlanetFavorite(planet.id) ? 'Eliminar de Favoritos' : 'Agregar a Favoritos'}
            </button>
        </div>
    );
};

export default Planet;
