"use client";
import CharacterList from "@/components/CharacterList";
import Paginator from "@/components/Paginator";
import PlanetList from "@/components/PlanetList";
import SearchBar from "@/components/SearchBar";
import { fetchCharacters, fetchPlanets } from "@/utils/dragonBallApi"; // Asegúrate de que fetchPlanets esté definido en tu API
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

export default function Home() {
  const [characters, setCharacters] = useState([]); // Estado solo para personajes
  const [planets, setPlanets] = useState([]); // Estado solo para planetas
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleSearch = useCallback(async (filters: Record<string, string> = {}) => {
    const data = await fetchCharacters({ ...filters, page: currentPage.toString() });
    setCharacters(data?.items || []); // Actualiza el estado con los personajes encontrados
    setTotalPages(data?.meta?.totalPages || 0);
  }, [currentPage]);

  const handlePageChange = async (page: number) => {
    setCurrentPage(page);
    const data = await fetchCharacters({ page: page.toString() });
    setCharacters(data?.items || []);
    setTotalPages(data?.meta?.totalPages || 0);
  };

  const handlePlanetSearch = useCallback(async (planetName: string, isDestroyed: boolean | null) => {
    const planetData = await fetchPlanets({ name: planetName, isDestroyed });
    setPlanets(planetData.items || []); // Actualiza el estado con los planetas encontrados
  }, []);

  useEffect(() => {
    handleSearch({});
  }, [currentPage, handleSearch]);

  return (
    <main className="w-full min-h-screen flex items-center flex-col gap-5">
      <div className="w-full max-w-3xl pt-10">
        <SearchBar onSearch={handleSearch} onSearchPlanets={handlePlanetSearch} />
        <Link href="/favorites">Favoritos</Link>
        <CharacterList characters={characters} /> {/* No necesitas el operador spread aquí */}
        <PlanetList planets={planets} /> {/* No necesitas el operador spread aquí */}
        <Paginator
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </main>
  );
}
