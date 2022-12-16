import ImageRules from "../../public/icons/image-rules.svg";
import IconClose from "../../public/icons/icon-close.svg";

type Props = {
  setIsVisible: (isVisible: boolean) => void;
};

const RuleModal = ({ setIsVisible }: Props) => {
  return (
    <div className="w-full h-screen bg-white rounded-lg xl:w-96 xl:h-96">
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
    </div>
  );
};

export default RuleModal;
