import type { ShapeInfo } from "../../types";

type Props = {
  shapeInfo: ShapeInfo;
  hasPlayed?: boolean;
};

const Shape = ({ shapeInfo, hasPlayed }: Props) => {
  const { color, bottomShadow, icon } = shapeInfo;
  return (
    <div
      className={`relative ${bottomShadow} rounded-full ${
        hasPlayed
          ? "h-[300px] w-72 cursor-default"
          : "w-44 h-[183px] cursor-pointer"
      }`}
    >
      <div
        className={`absolute flex items-center justify-center ${color} rounded-full ${
          hasPlayed ? "w-72 h-72" : "w-44 h-44"
        }`}
      >
        <div className="bg-juliet rounded-full h-[75%] w-[75%] flex justify-center items-center relative">
          <div
            className={`absolute bottom-0 left-0 right-0 rounded-full bg-snowbank top-2 ${
              hasPlayed ? "top-3" : "top-2"
            }`}
          />
        </div>

        <div className={`absolute ${hasPlayed ? "scale-150" : ""}`}>{icon}</div>
      </div>
    </div>
  );
};

export default Shape;
