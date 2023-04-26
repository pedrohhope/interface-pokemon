import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { IPokemonData } from "@/interfaces";
import { Endpoints, api } from "@/endpoints";

export default function Status() {
  const [pokemon, setPokemon] = useState<IPokemonData>();
  console.log(pokemon);

  const router = useRouter();

  const getApi = useCallback(async () => {
    if (!router.query.id) {
      return;
    }
    const data = await Endpoints.pokemonStatus(router.query.id as string);

    setPokemon(data);
  }, [router.query.id]);

  useEffect(() => {
    getApi();
  }, [getApi]);

  return (
    <>
      <p>{pokemon?.name}</p>
      <img src={pokemon?.sprites.front_default}></img>
      <img src={pokemon?.sprites.back_default}></img>
      <img src={pokemon?.sprites.front_shiny}></img>
      <img src={pokemon?.sprites.back_shiny}></img>
      <p>{pokemon?.abilities[0]?.ability.name}</p>
      <p>{pokemon?.abilities[1]?.ability.name}</p>
      <p>{pokemon?.abilities[2]?.ability.name}</p>
    </>
  );
}
