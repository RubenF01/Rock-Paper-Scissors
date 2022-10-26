import Shape from "../shapeSelect/Shape";
import type { ShapeInfo } from "../../types";

type Props = {
  result: string;
  currentPlay: { player: string; computer: string };
  shapes: ShapeInfo[];
};

const PlayResult = ({ result, currentPlay, shapes }: Props) => {
  const playerShape = shapes.find((shape) => shape.name === currentPlay.player);
  const computerShape = shapes.find(
    (shape) => shape.name === currentPlay.computer
  );

  console.log(playerShape, computerShape);

  const formatResult = (result: string) => {
    switch (result) {
      case "win":
        return "you lose";
        break;
      case "lose":
        return "you lose";
        break;
      default:
        return "tie";
    }
  };
  return (
    <div>
      <Shape shapeInfo={playerShape as ShapeInfo} />
      <h1 className="uppercase">{formatResult(result)}</h1>
      <Shape shapeInfo={computerShape as ShapeInfo} />
    </div>
  );
};

export default PlayResult;
