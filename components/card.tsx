import Link from "next/link";

interface ICards {
  pokemonName: string;
  pokemonImage: any;
  gameIndex: number;
  routerLink: any;
  powerOne: string;
  powerTwo: string;
  powerThree: string;
  pokemonGif:any;
}


export default function Card(props: ICards) {
  return (
    <Link
      href={`pokemon/${props.routerLink}`}
      className="animate-[pulse_1s] flex h-72 lg:flex-row flex-col lg:items-center gap-4 lg:h-60 w-full shadow-slate-200 shadow-lg rounded-lg hover:-translate-y-2 duration-150 cursor-pointer"
    >
      <div className={`h-32 w-full lg:w-40 lg:h-full flex items-center lg:justify-center bg-${props.powerOne} rounded-lg`}>
        <img src={props.pokemonImage} alt="" className="w-20 ml-5 lg:ml-0 lg:w-4/5" />
      </div>
      <div className="flex ml-5 space-x-10 lg:ml-0">
        <div>
          <div>
            <h2 className="text-2xl">{props.pokemonName}</h2>
            <p>EXP: {props.gameIndex}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p>Powers: </p>
            <p className={`text-white text-center font-bold rounded-lg bg-${props.powerOne}`}>{props.powerOne}</p>
            <p className={`text-white text-center mr-3 font-bold rounded-lg bg-${props.powerTwo}`}>{props.powerTwo}</p>
            <p className={`text-white text-center mr-2 font-bold rounded-lg bg-${props.powerThree}`}>{props.powerThree}</p>
          </div>
        </div>

        <div className="flex items-end  w-full">
          <img src={props.pokemonGif} alt="" className="lg:w-full"/>
        </div>
      </div>
    </Link>
  );
}
