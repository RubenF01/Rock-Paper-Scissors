import BgTriangle from "../../public/icons/bg-triangle.svg";
import Shape from "./Shape";
import type { ShapeInfo } from "../../types";
import { useMedia } from "react-use";

type Props = {
  makePlay: (selectedShape: string) => void;
  shapes: ShapeInfo[];
};

const ShapeSelect = ({ makePlay, shapes }: Props) => {
  const isWide = useMedia("(min-width: 1280px)", false);

  return (
    <div className="relative flex items-center justify-center w-[330px] xl:w-[450px] h-[450px] mt-20">
      <div className={`${isWide ? "" : "scale-75"}`}>
        <BgTriangle />
      </div>
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
