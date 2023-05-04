import localFont from "next/font/local";
const myFont = localFont({ src: "./fonts/pokemon-solid.ttf" });

interface IHeader {
  title: string;
}

export default function Header(props: IHeader) {
  return (
    <header className="flex justify-center items-center">
      <div className={myFont.className}>
        <h1 className="text-6xl md:text-9xl text-[#FECA1B]">{props.title}</h1>
      </div>
    </header>
  );
}
