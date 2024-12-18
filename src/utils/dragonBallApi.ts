import axios from "axios";

const api = axios.create({
    baseURL: "https://dragonball-api.com/api",
});

export const fetchCharacterById = async (id: string) => {
    const response = await api.get(`/characters/${id}`);
    return response.data;
};

export const fetchCharacters = async (params: Record<string, string | number>) => {
    const response = await api.get(`/characters`, { params });    
    return response.data;
};

export default api;
