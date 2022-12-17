import Shape from "../shapeSelect/Shape";
import type { ShapeInfo } from "../../types";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

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
  const [isResultVisible, setIsResultVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const playerShape = shapes.find((shape) => shape.name === currentPlay.player);
  const computerShape = shapes.find(
    (shape) => shape.name === currentPlay.computer
  );

  const formatResult = (result: string) => {
    switch (result) {
      case "win":
        return "you win";
      case "lose":
        return "you lose";
      default:
        return "tie";
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsResultVisible(true);
    }, 2500);

    setTimeout(() => {
      setIsButtonVisible(true);
    }, 4500);
  });

  return (
    <div className="relative justify-center flex items-center w-[290px] xl:w-full mt-24 space-x-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <h1 className="order-last pt-8 text-sm font-bold text-white uppercase xl:order-first xl:pb-16 xl:text-2xl">
          you picked
        </h1>
        <Shape shapeInfo={playerShape as ShapeInfo} hasPlayed={hasPlayed} />
      </motion.div>

      <AnimatePresence>
        {isButtonVisible && (
          <motion.div
            initial={{ opacity: 0, scaleX: 0.5 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute flex flex-col items-center top-[300px] right-3 xl:mt-10 xl:static"
          >
            <h1 className="pb-4 text-5xl font-bold text-white uppercase">
              {formatResult(result)}
            </h1>
            <button
              className="uppercase bg-white hover:text-[#9f1535] w-64 h-[50px] rounded-lg font-bold"
              onClick={() => resetGame()}
            >
              play again
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isResultVisible ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            key="result"
            className="flex flex-col items-center"
          >
            <h1 className="order-last pt-8 text-sm font-bold text-white uppercase xl:order-first xl:pb-16 xl:text-2xl">
              the house picked
            </h1>
            <Shape
              shapeInfo={computerShape as ShapeInfo}
              hasPlayed={hasPlayed}
            />
          </motion.div>
        ) : (
          <motion.div
            key="placeholder"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 2.2 }}
            className="flex items-center h-full w-72"
          >
            <div className="absolute right-0 w-32 h-32 rounded-full top-1 xl:mt-16 xl:w-56 xl:h-56 bg-black/10 xl:static" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PlayResult;
