import BgTriangle from "../../public/icons/bg-triangle.svg";
import Rock from "../../public/icons/icon-rock.svg";
import Paper from "../../public/icons/icon-paper.svg";
import Scissors from "../../public/icons/icon-scissors.svg";
import Shape from "./Shape";
import { shapes } from "../../utils";

type Props = {
  makePlay: (selectedShape: string) => void;
};

const ShapeSelect = ({ makePlay }: Props) => {
  return (
    <div className="relative flex items-center justify-center w-[450px] h-[450px] mt-20">
      <BgTriangle />
      {shapes.map((shape, index) => (
        <div
          key={index}
          className={shape.position}
          onClick={() => makePlay(shape.name)}
        >
          <Shape shapeInfo={shape} />
        </div>
      ))}
    </div>
  );
};

export default ShapeSelect;
