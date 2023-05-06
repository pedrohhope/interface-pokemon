import Header from "../components/header";
import Card from "../components/card";
import { IPokemonData } from "@/interfaces";
import { Endpoints } from "@/endpoints";
import React from "react";

export async function getStaticProps() {
  const pokemonsData = await Endpoints.pokemonList();

  return {
    props: {
      pokemons: pokemonsData,
    },
  };
}

export default function Home({ pokemons }) {
  return (
    <React.Fragment>
      <Header title="PokéDex" />
      <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 mt-36 mb-36 ml-5 mr-5">
        {pokemons.map((pokemon: IPokemonData) => (
          <Card
            key={pokemon.id}
            routerLink={pokemon.id}
            pokemonName={pokemon.name.toUpperCase()}
            pokemonImage={pokemon.sprites.other.dream_world.front_default}
            gameIndex={pokemon.base_experience}
            powerOne={pokemon.types[0].type.name}
            powerTwo={pokemon.types[1]?.type.name}
            powerThree={pokemon.types[2]?.type.name}
            pokemonGif={
              pokemon.sprites.versions["generation-v"]["black-white"].animated
                .front_default
            }
          />
        ))}
      </div>
    </React.Fragment>
  );
}
