import ImageRules from "../../public/icons/image-rules.svg";
import IconClose from "../../public/icons/icon-close.svg";
import { motion } from "framer-motion";

type Props = {
  setIsVisible: (isVisible: boolean) => void;
};

const RuleModal = ({ setIsVisible }: Props) => {
  return (
    <motion.div
      initial={{ scaleY: 0.3, scaleX: 0.3, opacity: 0 }}
      animate={{ scaleY: 1, scaleX: 1, opacity: 1 }}
      exit={{ scaleY: 0.3, scaleX: 0.3, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="w-full h-screen bg-white rounded-lg xl:w-96 xl:h-96"
    >
      <div className="flex flex-col items-center justify-between h-full pt-8 xl:h-auto px-7 xl:flex-row">
        <h1 className="mt-16 text-3xl font-bold uppercase cursor-default xl:mt-0 xl:text-2xl text-darkText">
          rules
        </h1>
        <IconClose
          onClick={() => setIsVisible(false)}
          className="z-50 mb-16 cursor-pointer xl:mb-0"
        />
      </div>
      <div className="absolute top-0 flex items-center justify-center w-full h-full my-auto xl:items-start xl:static">
        <ImageRules className="mt-5" />
      </div>
    </motion.div>
  );
};

export default RuleModal;
