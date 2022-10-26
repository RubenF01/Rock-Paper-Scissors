import BgTriangle from "../../public/icons/bg-triangle.svg";
import Rock from "../../public/icons/icon-rock.svg";
import Paper from "../../public/icons/icon-paper.svg";
import Scissors from "../../public/icons/icon-scissors.svg";
import Shape from "./Shape";

type Props = {
  makePlay: (selectedShape: string) => void;
};

export const shapes = [
  {
    color: "bg-gradient-to-b from-[#dd405d] to-[#dc2e4e]",
    bottomShadow: "bg-[#9f1535]",
    position: "absolute bottom-0",
    icon: <Rock />,
    name: "rock",
  },
  {
    color: "bg-gradient-to-b from-[#5671f5] to-[#4865f4]",
    bottomShadow: "bg-[#2945c2]",
    position: "absolute left-0 top-0",
    icon: <Paper />,
    name: "paper",
  },
  {
    color: "bg-gradient-to-b from-[#eca922] to-[#ec9e0e]",
    bottomShadow: "bg-[#c76c1b]",
    position: "absolute right-0 top-0",
    icon: <Scissors />,
    name: "scissors",
  },
];

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
