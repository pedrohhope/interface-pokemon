import { Endpoints } from "@/endpoints";
import { IPokemonData } from "@/interfaces";
import React, { useEffect, useState } from "react";
import Card from "../components/card";
import Header from "../components/header";

export default function Home() {
  const [pokemons, setPokemons] = useState<IPokemonData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const loadMore = () => {
    setCurrentPage((currentPage) => currentPage + 10);
  }

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await Endpoints.pokemonList(currentPage);
      setPokemons((currentPokemons) => [...currentPokemons, ...response]);
    }

    fetchPokemons();



  }, [currentPage]);

  return (
    <div>
      <Header title="PokéDex" />
      <div className="mx-5 flex-col bg-white">
        <div className="grid justify-items-center grid-cols-1  md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 mb-20">
          {!pokemons.length && (
            <React.Fragment>
              {[1, 2, 3].map(() => (
                <Card
                  key=""
                  routerLink=""
                  pokemonName=""
                  pokemonImage=""
                  gameIndex={1}
                  powerOne=""
                  types={[]}
                  pokemonGif=""
                  loading={true}
                />
              ))}
            </React.Fragment>
          )}
          {pokemons.map((pokemon: IPokemonData) => (
            <Card
              key={pokemon.id}
              routerLink={pokemon.id}
              pokemonName={pokemon.name?.toUpperCase()}
              pokemonImage={pokemon.sprites?.other.dream_world.front_default}
              gameIndex={pokemon.base_experience}
              powerOne={pokemon.types?.[0].type.name}
              types={pokemon?.types}
              pokemonGif={
                pokemon.sprites?.versions["generation-v"]["black-white"]
                  .animated.front_default
              }
              loading={false}
            />
          ))}

        </div>
      </div>
      <div className="w-full flex justify-center items-center p-5">
        <button
          onClick={loadMore}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Load More
        </button>
      </div>
    </div>
  );
}
