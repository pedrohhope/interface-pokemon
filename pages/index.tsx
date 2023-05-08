import Header from "../components/header";
import Card from "../components/card";
import { IPokemonData } from "@/interfaces";
import { Endpoints } from "@/endpoints";
import React, { useEffect, useState } from "react";
import { infiniteScroll } from "@/components/infinitescroll";

export default function Home() {
  const [pokemons, setPokemons] = useState<IPokemonData[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [limits, setLimits] = useState(14)

  useEffect(() => {
    Endpoints.pokemonList(currentPage, limits).then(setPokemons);
  }, [currentPage]);

  useEffect(() => {
    if (!document) return;
    const sentinel = document.querySelector("#sentinel");
    infiniteScroll(setCurrentPage, setLimits ,sentinel);
  }, []);

  return (
    <>
      <React.Fragment>
        <Header title="PokéDex" />
        <div className="absolute w-full h-full md:top-[350px] bg-white">
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
                    powerTwo=""
                    powerThree=""
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
                powerTwo={pokemon.types?.[1]?.type.name}
                powerThree={pokemon.types?.[2]?.type.name}
                pokemonGif={
                  pokemon.sprites?.versions["generation-v"]["black-white"]
                    .animated.front_default
                }
                loading={false}
              />
            ))}
          </div>
          <div className="w-full h-1" id="sentinel"></div>
        </div>
      </React.Fragment>
    </>
  );
}
