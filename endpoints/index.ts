import axios from "axios";

export interface IPokemonResult {
  name: string;
  url: string;
}

export const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export class Endpoints {
  static pokemonList = async (page: number) => {
    const offset = page === 1 ? 0 : (page - 1) * 10;

    const { data } = await api.get(`/pokemon?offset=${offset}&limit=10`);

    const pokemonsData = await Promise.all(
      data.results.map(async (pokemon: IPokemonResult) => {
        const res = await axios.get(pokemon.url);
        return res.data;
      })
    );

    return pokemonsData;
  };

  static pokemonStatus = async (id: string) => {
    const { data } = await api.get(`/pokemon/${id}`);

    return data;
  };
}
