import axios from "axios";

export interface IPokemonResult {
  name: string;
  url: string;
}

export const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export class Endpoints {
  static pokemonList = async () => {
    const { data } = await api.get("/pokemon?limit=50");

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
