import { IPokemonData } from "@/interfaces/index";
import Image from "next/image";

export default function PokemonStatus(props: IPokemonData) {

  return (
    <div className="w-full">
      <div className="flex relative justify-center pokemon-animation h-[20rem]">
        <div className="z-10 ml-96 pokemon-img">
          <Image
            src={props.sprite}
            alt={props.name}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "60%", height: "100%" }}
            loading="lazy"
          />
        </div>

        <div className="font-bold absolute pokemon-name">
          <h1 className="text-9xl text-white">{props.name}</h1>
        </div>
      </div>

      <div className="flex justify-center">
        <div
          className={`mt-[100px] w-full h-screen rounded-t-lg container mx-auto bg-slate-50 drop-shadow-2xl`}
        >
          <div className="m-10">
            <div>
              <h2 className="text-3xl font-bold">
                {`Let's`} Go, {props.name}!
              </h2>

              {props.abilities.map((ability: any) => (
                <p key={Math.random() * 10}>{ability.ability.name}</p>
              ))}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
