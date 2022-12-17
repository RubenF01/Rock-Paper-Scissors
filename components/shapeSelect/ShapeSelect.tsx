import BgTriangle from "../../public/icons/bg-triangle.svg";
import Shape from "./Shape";
import type { ShapeInfo } from "../../types";
import { useMedia } from "react-use";
import { motion } from "framer-motion";

type Props = {
  makePlay: (selectedShape: string) => void;
  shapes: ShapeInfo[];
};

const ShapeSelect = ({ makePlay, shapes }: Props) => {
  const isWide = useMedia("(min-width: 1280px)", false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative flex items-center justify-center w-[330px] xl:w-[450px] h-[450px] mt-20"
    >
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
    </motion.div>
  );
};

export default ShapeSelect;
