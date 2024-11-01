"use client";
import useCharacterStore from '@/store/useCharacterStore';
import React from 'react';

export default function Favorites() {
    const { favorites, removeFavorite } = useCharacterStore();

    const handleDeleteFavorite = (id: string) => {
        removeFavorite(id);
    };

    return (
        <div>
            <h1>Favoritos</h1>
            {favorites.length > 0 ? (
                favorites.map((item) => (
                    <div key={item.id} className="p-4 border rounded mb-4">
                        <h2>{item.name}</h2>
                        <p>Raza: {item.race}</p>
                        <p>Género: {item.gender}</p>
                        <p>Afiliación: {item.affiliation}</p>

                        <button onClick={() => handleDeleteFavorite(item.id)} className="mt-2 bg-red-500 text-white rounded px-2 py-1">
                            Eliminar
                        </button>
                    </div>
                ))
            ) : (
                <p>No tienes personajes favoritos.</p>
            )}
        </div>
    );
}
