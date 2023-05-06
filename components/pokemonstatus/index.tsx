import { IPokemonData } from "@/interfaces/index";
import Link from "next/link";

export default function PokemonStatus(props: IPokemonData) {
  return (
    <div className="w-full">
      <div className="flex relative justify-center pokemon-animation h-[25rem]">
        <div className="z-10 ml-96 pokemon-img">
          <img src={props.sprite} className="min-w-[190px] max-w-[250px]"></img>
        </div>

        <div className="font-bold absolute rounded-lg pokemon-name">
          <h1 className="text-9xl text-white">{props.name}</h1>
        </div>
      </div>

      <div className="m-10">
        <h2 className="text-3xl font-bold text-stone-900">
         {`Let's`} Go, {props.name}!
        </h2>
        <div>
          <h4>Type</h4>
        </div>
      </div>
    </div>
  );
}
