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

export default function Status({ pokemon }) {
  console.log(pokemon)

  return (
    <div className={`w-full h-full bg-${pokemon?.types[0].type.name}`}>
      <PokemonStatus
        name={pokemon?.name.toUpperCase()}
        id={pokemon?.id}
        sprite={pokemon?.sprites.other.dream_world.front_default}
        abilities={pokemon?.abilities}
        typeOne={pokemon?.types[0].type.name}
        types={pokemon.types}
        stats={pokemon.stats}
        pokemonGif={
          pokemon.sprites?.versions["generation-v"]["black-white"].animated
            .front_default
        }
      />
    </div>
  );
}
