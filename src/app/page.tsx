"use client";
import CharacterList from "@/components/CharacterList";
import Paginator from "@/components/Paginator";
import SearchBar from "@/components/SearchBar";
import { fetchCharacters } from "@/utils/dragonBallApi";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { FaHeart } from "react-icons/fa";

export default function Home() {
  const [characters, setCharacters] = useState([]); 
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleSearch = useCallback(async (filters: Record<string, string> = {}) => {
    const data = await fetchCharacters({ ...filters, page: currentPage.toString() });
    setCharacters(data?.items || data);
    setTotalPages(data?.meta?.totalPages || 0);
  }, [currentPage]);

  const handlePageChange = async (page: number) => {
    if (page !== currentPage) {
      setCurrentPage(page);
      const data = await fetchCharacters({ page: page.toString() });
      setCharacters(data?.items || []);
      setTotalPages(data?.meta?.totalPages || 0);
    }
  };

  useEffect(() => {
    handleSearch({});
  }, [currentPage, handleSearch]);

  return (
    <main className="w-full min-h-screen flex items-center flex-col gap-5 z-10">
      <div className="w-full max-w-3xl relative z-10 px-3 py-5 md:px-0 md:py-10">
        <h1 className="font-bold text-3xl text-white mb-3">Dragon Ball Z super</h1>
        <SearchBar onSearch={handleSearch} />
        <div className="flex flex-col justify-between items-center gap-2 sm:flex-row my-3">
        <Link href="/favorites" className="text-white flex items-center gap-3 my-5 w-fit">Mis Favoritos <FaHeart size={15} /></Link>
        <Paginator
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
        </div>
        <CharacterList characters={characters} />
        <Paginator
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </main>
  );
}
