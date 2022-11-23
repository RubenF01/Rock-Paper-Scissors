import Shape from "../shapeSelect/Shape";
import type { ShapeInfo } from "../../types";

type Props = {
  result: string;
  currentPlay: { player: string; computer: string };
  shapes: ShapeInfo[];
  hasPlayed: boolean;
  resetGame: () => void;
};

const PlayResult = ({
  result,
  currentPlay,
  shapes,
  hasPlayed,
  resetGame,
}: Props) => {
  const playerShape = shapes.find((shape) => shape.name === currentPlay.player);
  const computerShape = shapes.find(
    (shape) => shape.name === currentPlay.computer
  );

  const formatResult = (result: string) => {
    switch (result) {
      case "win":
        return "you win";
        break;
      case "lose":
        return "you lose";
        break;
      default:
        return "tie";
    }
  };

  return (
    <div className="flex items-center mt-24">
      <div className="flex flex-col items-center">
        <h1 className="text-white uppercase">you picked</h1>
        <Shape shapeInfo={playerShape as ShapeInfo} hasPlayed={hasPlayed} />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="pb-4 text-4xl font-bold text-white uppercase">
          {formatResult(result)}
        </h1>
        <button
          className="uppercase bg-white hover:text-[#9f1535] px-10 py-2 rounded-lg font-bold"
          onClick={() => resetGame()}
        >
          play again
        </button>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-white uppercase">the house picked</h1>
        <Shape shapeInfo={computerShape as ShapeInfo} hasPlayed={hasPlayed} />
      </div>
    </div>
  );
};

export default PlayResult;
