import Header from "../components/header";
import Card from "../components/card";
import { IPokemonData } from "@/interfaces";
import { Endpoints } from "@/endpoints";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "@/components/InfiniteScroll";

export default function Home() {
  const [pokemons, setPokemons] = useState<IPokemonData[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  const scrollEnd = () => {
    setCurrentPage((currentPageInsideState) => currentPageInsideState + 1);
  };

  useEffect(() => {
    Endpoints.pokemonList(currentPage).then((response) =>
      setPokemons((currentPokemons) => [...currentPokemons, ...response])
    );
  }, [currentPage]);

  return (
    <InfiniteScroll onScrollEnd={scrollEnd}>
      <Header title="PokéDex" />
      <div className="bg-white">
        <div className="grid justify-items-center grid-cols-1 mt-20 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 ml-5 mb-20 mr-5">
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
    </InfiniteScroll>
  );
}
