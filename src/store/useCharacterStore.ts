import {create} from 'zustand';

// Interfaces para Character y Planet
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
    id: string;
    name: string;
    isDestroyed: boolean;
    description: string;
    image: string;
}

// Interfaz del store
interface CharacterStore {
    favorites: (Character | Planet)[];
    addFavorite: (item: Character | Planet) => void;
    removeFavorite: (id: string | number) => void;
    isFavorite: (id: string | number) => boolean;
}

// Creación del store
const useCharacterStore = create<CharacterStore>((set, get) => {
    const initialFavorites: (Character | Planet)[] = typeof window !== 'undefined'
        ? JSON.parse(localStorage.getItem('favorites') || '[]')
        : [];

    return {
        favorites: initialFavorites,
        addFavorite: (item: Character | Planet) => {
            set((state) => {
                const updatedFavorites = [...state.favorites, item];
                if (typeof window !== 'undefined') {
                    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
                }
                return { favorites: updatedFavorites };
            });
        },
        removeFavorite: (id: string | number) => {
            set((state) => {
                const updatedFavorites = state.favorites.filter((item) => item.id !== id);
                if (typeof window !== 'undefined') {
                    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
                }
                return { favorites: updatedFavorites };
            });
        },
        isFavorite: (id: string | number) => {
            const state = get();
            return state.favorites.some((item) => item.id === id);
        },
    };
});

export default useCharacterStore;
