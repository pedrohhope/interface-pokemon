import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { IPokemonData } from "@/interfaces";
import { Endpoints, api } from "@/endpoints";
import axios from "axios";
import PokemonStatus from '@/components/pokemonstatus/index'

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
    <PokemonStatus 
        name={pokemon?.name.toUpperCase()}
        id={pokemon?.id}
        sprite={pokemon?.sprites.other.dream_world.front_default}
        typeOne={pokemon?.types[0].type.name}
        typeTwo={pokemon?.types[1]?.type.name}
        abilityOne={pokemon?.abilities[0]?.ability.name}
        abilityTwo={pokemon?.abilities[1]?.ability.name}
        abilityThree={pokemon?.abilities[2]?.ability.name} 
        abilities={[]} base_experience={0} forms={[]} game_indices={[]} height={0} held_items={[]} is_default={false} location_area_encounters={""} moves={[]} order={0} past_types={[]} species={undefined} sprites={undefined} stats={[]} types={[]} weight={0}  
    />
  );
}
