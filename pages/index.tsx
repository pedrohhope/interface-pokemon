import Header from "../components/header";
import Card from "../components/card";
import axios from "axios";
import { IPokemonData } from "@/interfaces";
import { Endpoints, api } from "@/endpoints";
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
      <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-5 mt-36 mb-36 ml-5 mr-5">
        {pokemons.map((pokemon: IPokemonData) => (
          <Card
            key={pokemon.id}
            routerLink={pokemon.id}
            pokemonName={pokemon.name.toUpperCase()}
            pokemonImage={pokemon.sprites.front_default}
            gameIndex={pokemon.base_experience}
            powerOne={pokemon.abilities[0].ability.name}
            powerTwo={pokemon.abilities[1]?.ability.name}
            powerThree={pokemon.abilities[2]?.ability.name}
          />
        ))}
      </div>
    </React.Fragment>
  );
}
