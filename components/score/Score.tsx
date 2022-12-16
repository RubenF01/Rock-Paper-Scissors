import Logo from "../../public/icons/logo.svg";
import { useMedia } from "react-use";

type Props = {
  score: number;
};

const Score = ({ score }: Props) => {
  const isWide = useMedia("(min-width: 1280px)", false);

  return (
    <div className="flex justify-between items-center border-2 w-80 xl:w-[700px] border-white/50 rounded-lg xl:rounded-2xl pr-3 xl:pr-5 xl:pl-7 cursor-default">
      <div className="xl:py-5">
        <Logo className={`${isWide || "scale-50 -ml-5"}`} />
      </div>

      <div className="bg-white h-[75%] w-20 xl:w-36 flex items-center flex-col justify-center font-bold rounded-lg">
        <p className="text-[10px] uppercase text-bellFlower xl:text-base tracking-widest">
          score
        </p>
        <h1 className="text-4xl tracking-tighter xl:text-5xl text-freefall">
          {score}
        </h1>
      </div>
    </div>
  );
};

export default Score;
