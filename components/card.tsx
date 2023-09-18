import Link from "next/link";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface ICards {
  types?: any[];
  pokemonName?: string;
  pokemonImage?: any;
  gameIndex?: number;
  routerLink?: any;
  powerOne?: string;
  pokemonGif?: any;
  loading?: boolean;
}

export default function Card(props: ICards) {
  return (
    <Link
      href={`pokemon/${props.routerLink}`}
      className="flex h-full lg:flex-row flex-col lg:items-center gap-4 lg:h-60 w-full shadow-slate-200 shadow-lg rounded-lg hover:-translate-y-2 duration-150 cursor-pointer"
    >
      <div
        className={`h-full w-full lg:pl-0 lg:w-36 flex items-center lg:justify-center bg-${props.powerOne} rounded-lg pl-5`}
      >
        <div
          className={`h-32 w-24 lg:w-40 flex items-center lg:justify-center `}
        >
          {!props.loading && (
            <img
              src={props.pokemonImage}
              alt={props.pokemonName}
              width={100}
              height={100}
              loading="lazy"
            />
          )}
          {props.loading && <Skeleton count={1} width={150} height={250} />}
        </div>
      </div>
      <div className="flex ml-5 space-x-10 lg:ml-0 h-full mt-5">
        <div>
          <div>
            <h2 className="text-2xl">{props.pokemonName}</h2>
            <p>EXP: {props.gameIndex}</p>
          </div>
          <div className="flex flex-col gap-2 mb-5">
            <p>Types: </p>

            {props.types?.map((type: any) => (
              <div className={`bg-${type.type.name} rounded-lg flex items-center`} key={Math.random() * 10}>
                <p className="text-white pl-2 font-bold" key={Math.random() * 10}>
                  {type.type.name}
                </p>
              </div>
            ))}

          </div>
        </div>

        <div className="flex items-end mb-5">
          <img
            src={props.pokemonGif}
            alt={props.pokemonName}
            width={100}
            height={100}
          />
        </div>
      </div>
    </Link>
  );
}
