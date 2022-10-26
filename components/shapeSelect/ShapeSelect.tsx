import BgTriangle from "../../public/icons/bg-triangle.svg";
import Shape from "./Shape";
import type { ShapeInfo } from "../../types";

type Props = {
  makePlay: (selectedShape: string) => void;
  shapes: ShapeInfo[];
};

const ShapeSelect = ({ makePlay, shapes }: Props) => {
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
