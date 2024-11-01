import { useState } from "react";

interface SearchBarProps {
    onSearch: (filters: Record<string, string>) => void;
    onSearchPlanets: (planetName: string, isDestroyed: boolean | null) => void; // Modificación para incluir el estado isDestroyed
}

const SearchBar = ({ onSearch, onSearchPlanets }: SearchBarProps) => {
    const [name, setName] = useState("");
    const [race, setRace] = useState("");
    const [gender, setGender] = useState("");
    const [affiliation, setAffiliation] = useState("");
    const [planetName, setPlanetName] = useState("");
    const [isDestroyed, setIsDestroyed] = useState<boolean | null>(null); // Nuevo estado para isDestroyed

    const handleCharacterSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const filters: Record<string, string> = {};
        if (name) filters.name = name;
        if (gender) filters.gender = gender;
        if (race) filters.race = race;
        if (affiliation) filters.affiliation = affiliation;
        onSearch(filters);
    };

    const handlePlanetSearch = (e: React.FormEvent) => {
        e.preventDefault();
        onSearchPlanets(planetName, isDestroyed); // Pasar isDestroyed a la función
    };

    return (
        <div className="flex flex-col gap-3">
            <form onSubmit={handleCharacterSearch} className="flex flex-col gap-3">
                <input
                    type="text"
                    placeholder="Busca tu personaje favorito"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border p-2 px-3 rounded-lg"
                />
                <select value={race} onChange={(e) => setRace(e.target.value)}>
                    <option value="">Filtrar por raza</option>
                    <option value="Human">Human</option>
                    <option value="Saiyan">Saiyan</option>
                    <option value="Namekian">Namekian</option>
                    <option value="Majin">Majin</option>
                    <option value="Frieza Race">Frieza Race</option>
                    <option value="Android">Android</option>
                    <option value="Jiren Race">Jiren Race</option>
                    <option value="God">God</option>
                    <option value="Angel">Angel</option>
                    <option value="Evil">Evil</option>
                    <option value="Nucleico">Nucleico</option>
                    <option value="Nucleico benigno">Nucleico benigno</option>
                    <option value="Unknown">Unknown</option>
                </select>
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="">Filtrar por género</option>
                    <option value="Male">Masculino</option>
                    <option value="Female">Femenino</option>
                    <option value="Unknown">Desconocido</option>
                </select>
                <select value={affiliation} onChange={(e) => setAffiliation(e.target.value)}>
                    <option value="">Filtrar por afiliación</option>
                    <option value="Z Fighter">Z Fighter</option>
                    <option value="Red Ribbon Army">Red Ribbon Army</option>
                    <option value="Namekian Warrior Freelancer">Namekian Warrior Freelancer</option>
                    <option value="Army of Frieza">Army of Frieza</option>
                    <option value="Pride Troopers">Pride Troopers</option>
                    <option value="Assistant of Vermoud">Assistant of Vermoud</option>
                    <option value="God Assistant of Beerus">God Assistant of Beerus</option>
                    <option value="Villain">Villain</option>
                    <option value="Other">Other</option>
                </select>
                <button type="submit">Buscar Personajes</button>
            </form>
            <div className="flex flex-col gap-3">
                <input
                    type="text"
                    placeholder="Buscar planeta"
                    value={planetName}
                    onChange={(e) => setPlanetName(e.target.value)}
                    className="border p-2 px-3 rounded-lg"
                />
                <select onChange={(e) => setIsDestroyed(e.target.value === 'true' ? true : e.target.value === 'false' ? false : null)}>
                    <option value="">Filtrar por destruido</option>
                    <option value="true">Destruido</option>
                    <option value="false">No destruido</option>
                </select>
                <button onClick={handlePlanetSearch}>Buscar Planetas</button>
            </div>
        </div>
    );
}

export default SearchBar;
