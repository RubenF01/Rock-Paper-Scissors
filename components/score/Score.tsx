import Logo from "../../public/icons/logo.svg";

type Props = {
  score: number;
};

const Score = ({ score }: Props) => {
  return (
    <div className="flex justify-between items-center border-2 w-[700px] border-white/50 rounded-2xl pr-5 pl-7 cursor-default">
      <div className="py-5">
        <Logo />
      </div>

      <div className="bg-white h-[75%] w-36 flex items-center flex-col justify-center font-bold rounded-lg">
        <p className="uppercase text-bellFlower">score</p>
        <h1 className="text-5xl text-freefall">{score}</h1>
      </div>
    </div>
  );
};

export default Score;
