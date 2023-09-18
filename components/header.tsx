import Image from "next/image";
import localFont from "next/font/local";
const myFont = localFont({ src: "./fonts/pokemon-solid.ttf" });

interface IHeader {
  title: string;
}

export default function Header(props: IHeader) {
  return (
    <header className="header-app">
      <div className="w-full h-full">
        <img
          src={"/592678.png"}
          alt={props.title}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
          loading="lazy"
        />
      </div>

      <div className={`${myFont.className} absolute`}>
        <h1 className="text-7xl md:text-9xl text-[#FECA1B]">{props.title}</h1>
      </div>
    </header>
  );
}
