import Link from "next/link";

interface ICards {
  pokemonName: string;
  pokemonImage: any;
  gameIndex: number;
  routerLink: any;
  powerOne: string;
  powerTwo: string;
  powerThree: string;
}

export default function Card(props: ICards) {
  return (
    <Link
      href={`pokemon/${props.routerLink}`}
      className="animate-[pulse_1s] flex items-center gap-4 h-60 w-full shadow-slate-200 shadow-lg rounded-lg hover:-translate-y-2 duration-150 cursor-pointer"
    >
      <div className="h-full w-40 flex items-center bg-teal-300 rounded-lg">
        <img src={props.pokemonImage} alt="" className="w-40" />
      </div>
      <div>
        <div>
          <h2 className="text-2xl">{props.pokemonName}</h2>
          <p>EXP: {props.gameIndex}</p>
        </div>

        <div>
          <p>{props.powerOne}</p>
          <p>{props.powerTwo}</p>
          <p>{props.powerThree}</p>
        </div>
      </div>
    </Link>
  );
}
