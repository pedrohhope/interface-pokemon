import { Endpoints } from "@/endpoints";
import PokemonStatus from "@/components/pokemonstatus/index";

export async function getStaticProps({ params }) {
  const data = await Endpoints.pokemonStatus(params.id);

  return {
    props: {
      pokemon: data,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

// const data = await Endpoints.pokemonStatus(router.query.id as string);

export default function Status({ pokemon }) {
  return (
    <div className={`w-screen h-screen bg-${pokemon?.types[0].type.name}`}>
      <PokemonStatus
        name={pokemon?.name.toUpperCase()}
        id={pokemon?.id}
        sprite={pokemon?.sprites.other.dream_world.front_default}
        typeOne={pokemon?.types[0].type.name}
        typeTwo={pokemon?.types[1]?.type.name}
        abilityOne={pokemon?.abilities[0]?.ability.name}
        abilityTwo={pokemon?.abilities[1]?.ability.name}
        abilityThree={pokemon?.abilities[2]?.ability.name}
        abilities={[]}
        base_experience={0}
        forms={[]}
        game_indices={[]}
        height={0}
        held_items={[]}
        is_default={false}
        location_area_encounters={""}
        moves={[]}
        order={0}
        past_types={[]}
        species={undefined}
        sprites={undefined}
        stats={[]}
        types={[]}
        weight={0}
      />
    </div>
  );
}
