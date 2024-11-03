import { useState } from "react";

interface SearchBarProps {
    onSearch: (filters: Record<string, string>) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
    const [name, setName] = useState("");
    const [race, setRace] = useState("");
    const [gender, setGender] = useState("");
    const [affiliation, setAffiliation] = useState("");

    const handleCharacterSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const filters: Record<string, string> = {};
        if (name) filters.name = name;
        if (gender) filters.gender = gender;
        if (race) filters.race = race;
        if (affiliation) filters.affiliation = affiliation;
        onSearch(filters);
    };


    return (
        <div className="flex flex-col gap-3">
            <form onSubmit={handleCharacterSearch} className="flex flex-col gap-3">
                <div className="flex items-center flex-col gap-2">
                    <div className="flex items-center gap-2 justify-between w-full">
                        <input
                            type="text"
                            placeholder="Busca tu personaje favorito"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="p-2 px-3 w-full rounded-md bg-white outline-none text-indigo-600"
                        />
                        <button className="bg-indigo-500 text-white rounded-md p-2 px-4 border border-indigo-100" type="submit">Buscar</button>
                    </div>
                    <div className="flex flex-col items-center gap-2  w-full sm:flex-row">
                        <select value={race} onChange={(e) => setRace(e.target.value)} className="w-full h-full bg-indigo-500/30 border border-indigo-100 p-2 rounded-md cursor-pointer text-white outline-none">
                            <option className="text-indigo-600" value="">Filtrar por raza</option>
                            <option className="text-indigo-600" value="Human">Human</option>
                            <option className="text-indigo-600" value="Saiyan">Saiyan</option>
                            <option className="text-indigo-600" value="Namekian">Namekian</option>
                            <option className="text-indigo-600" value="Majin">Majin</option>
                            <option className="text-indigo-600" value="Frieza Race">Frieza Race</option>
                            <option className="text-indigo-600" value="Android">Android</option>
                            <option className="text-indigo-600" value="Jiren Race">Jiren Race</option>
                            <option className="text-indigo-600" value="God">God</option>
                            <option className="text-indigo-600" value="Angel">Angel</option>
                            <option className="text-indigo-600" value="Evil">Evil</option>
                            <option className="text-indigo-600" value="Nucleico">Nucleico</option>
                            <option className="text-indigo-600" value="Nucleico benigno">Nucleico benigno</option>
                            <option className="text-indigo-600" value="Unknown">Unknown</option>
                        </select>
                        <select value={gender} onChange={(e) => setGender(e.target.value)} className="w-full h-full bg-indigo-500/30 border border-indigo-100 p-2 rounded-md cursor-pointer text-white outline-none">
                            <option className="text-indigo-600" value="">Filtrar por género</option>
                            <option className="text-indigo-600" value="Male">Masculino</option>
                            <option className="text-indigo-600" value="Female">Femenino</option>
                            <option className="text-indigo-600" value="Unknown">Desconocido</option>
                        </select>
                        <select value={affiliation} onChange={(e) => setAffiliation(e.target.value)} className="w-full h-full bg-indigo-500/30 border border-indigo-100 p-2 rounded-md cursor-pointer text-white outline-none">
                            <option className="text-indigo-600" value="">Filtrar por afiliación</option>
                            <option className="text-indigo-600" value="Z Fighter">Z Fighter</option>
                            <option className="text-indigo-600" value="Red Ribbon Army">Red Ribbon Army</option>
                            <option className="text-indigo-600" value="Namekian Warrior Freelancer">Namekian Warrior Freelancer</option>
                            <option className="text-indigo-600" value="Army of Frieza">Army of Frieza</option>
                            <option className="text-indigo-600" value="Pride Troopers">Pride Troopers</option>
                            <option className="text-indigo-600" value="Assistant of Vermoud">Assistant of Vermoud</option>
                            <option className="text-indigo-600" value="God Assistant of Beerus">God Assistant of Beerus</option>
                            <option className="text-indigo-600" value="Villain">Villain</option>
                            <option className="text-indigo-600" value="Other">Other</option>
                        </select>
                    </div>
                </div>

            </form>
        </div>
    );
}

export default SearchBar;
