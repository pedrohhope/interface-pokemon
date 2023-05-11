import { IPokemonData } from "@/interfaces/index";
import Image from "next/image";
import Link from "next/link";

export default function PokemonStatus(props: IPokemonData) {
  return (
    <div className="w-full">
      <div className="flex relative justify-center pokemon-animation h-[20rem]">
        <Link href={"/"}>
          <div className="absolute left-5 top-10">
            <div className="bg-white pl-7 pr-7 pt-2.5 pb-2.5 rounded-xl">
              <p>Voltar</p>
            </div>
          </div>
        </Link>
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
            <div className="flex flex-col md:justify-between md:flex-row">
              <div>
                <h2 className="text-3xl font-bold">
                  {`Let's`} Go, {props.name}!
                </h2>
                <div>
                  <h3>ABILITIES</h3>
                  {props.abilities.map((ability: any) => (
                    <div
                      className={`bg-${props.typeOne} p-3 w-40 rounded-lg`}
                      key={Math.random() * 10}
                    >
                      <p>{ability.ability.name}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <h3>TYPES</h3>
                  {props.types.map((type: any) => (
                    <div
                      className={`bg-${type.type.name} p-3 w-40 rounded-lg text-white font-bold`}
                      key={Math.random() * 10}
                    >
                      <p>{type.type.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div
                  className={`flex justify-end bg-${props.typeOne} w-full h-full lg:h-96 md:full text-white`}
                >
                  <div>
                    <Image
                      src={props.pokemonGif}
                      alt={props.name}
                      width={100}
                      height={100}
                    ></Image>
                  </div>
                  <div>
                    <h3>STATS</h3>
                    {props.stats.map((stat) => (
                      <div key={Math.random() * 10}>
                        <p>{stat.stat.name}</p>
                        <p>{stat.base_stat}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
