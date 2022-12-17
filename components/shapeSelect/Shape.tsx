import type { ShapeInfo } from "../../types";
import { useMedia } from "react-use";

type Props = {
  shapeInfo: ShapeInfo;
  hasPlayed?: boolean;
};

const Shape = ({ shapeInfo, hasPlayed }: Props) => {
  const isWide = useMedia("(min-width: 1280px)", false);
  const { color, bottomShadow, icon } = shapeInfo;

  return (
    <div
      className={`relative ${bottomShadow} rounded-full ${
        hasPlayed
          ? "h-[133px] w-[128px] xl:h-[300px] xl:w-72 cursor-default"
          : "h-[133px] w-[126px] xl:w-44 xl:h-[183px] cursor-pointer"
      }`}
    >
      <div
        className={`absolute flex items-center justify-center ${color} rounded-full ${
          hasPlayed
            ? "w-[128px] h-[128px] xl:w-72 xl:h-72"
            : "w-[126px] h-[126px] xl:w-44 xl:h-44"
        }`}
      >
        <div className="bg-juliet rounded-full h-[75%] w-[75%] flex justify-center items-center relative">
          <div
            className={`absolute bottom-0 left-0 right-0 rounded-full bg-snowbank top-2 ${
              hasPlayed ? "xl:top-3 top-1" : "top-1 xl:top-2"
            }`}
          />
        </div>

        <div
          className={`absolute ${
            hasPlayed ? "xl:scale-150 scale-75" : `${isWide ? "" : "scale-90"}`
          }`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default Shape;
