import type { ShapeInfo } from "../../types";

type Props = {
  shapeInfo: ShapeInfo;
};

const BigShape = ({ shapeInfo }: Props) => {
  const { color, bottomShadow, icon } = shapeInfo;
  return (
    <div
      className={`relative ${bottomShadow} rounded-full h-[300px] cursor-pointer w-72`}
    >
      <div
        className={`absolute flex items-center justify-center ${color} rounded-full w-72 h-72`}
      >
        <div className="bg-juliet rounded-full h-[75%] w-[75%] flex justify-center items-center relative">
          <div className="absolute bottom-0 left-0 right-0 rounded-full bg-snowbank top-3" />
        </div>

        <div className="absolute">{icon}</div>
      </div>
    </div>
  );
};

export default BigShape;
