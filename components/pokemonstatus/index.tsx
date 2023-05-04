import { IPokemonData } from "@/interfaces/index";

export default function PokemonStatus(props: IPokemonData) {
  return (
    <div>
      <div className="flex flex-col items-center">


        <div className="z-10 mt-10 animate-[pulse_1s]">
          <img src={props.sprite} className="min-w-[150px] max-w-[200px]"></img>
        </div>

        <div className="font-bold rounded-lg">
          <h1 className="text-6xl text-white">{props.name} N°{props.id}</h1>
        </div>
        
      </div>
      <div className="flex gap-10 m-20">
        <div className="flex flex-col gap-5 text-5xl font-bold ">
          <h3 className="text-white">Types</h3>
          <div className="flex text-center gap-3">
            <p className="bg-blue-950 text-3xl text-white rounded-lg">{props.typeOne}</p>
            <p className="bg-blue-950 text-3xl text-white rounded-lg">{props.typeTwo}</p>
          </div>
        </div>
        <div className="flex flex-col gap-5 text-5xl font-bold">
          <h2 className="text-white">Abilities</h2>
          <div className="flex text-center gap-3">
            <p className="bg-blue-950 text-3xl text-white rounded-lg">{props.abilityOne}</p>
            <p className="bg-blue-950 text-3xl text-white rounded-lg">{props.abilityTwo}</p>
            <p className="bg-blue-950 text-3xl text-white rounded-lg">{props.abilityThree}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
