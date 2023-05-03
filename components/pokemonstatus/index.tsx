import { IPokemonData } from "@/interfaces/index";

export default function PokemonStatus(props: IPokemonData) {
  return (
    <div className="">
      <div className="flex flex-col mt-5 items-center">

        <div className="absolute top-[20%] font-bold ">
          <h1 className="text-9xl">{props.name}</h1>
        </div>

        <div className="z-10 animate-[pulse_1s]">
          <img src={props.sprite} className="min-w-[350px] "></img>
        </div>
        
      </div>
      <div className="">
        <div className="">
          <h3>Types: </h3>
          <p>{props.typeOne}</p>
          <p>{props.typeTwo}</p>
        </div>
        <div className="">
          <h2>Abilities: </h2>
          <p>{props.abilityOne}</p>
          <p>{props.abilityTwo}</p>
          <p>{props.abilityThree}</p>
        </div>
      </div>
    </div>
  );
}
