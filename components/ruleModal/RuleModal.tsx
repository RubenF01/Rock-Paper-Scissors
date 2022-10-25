import ImageRules from "../../public/icons/image-rules.svg";
import IconClose from "../../public/icons/icon-close.svg";

type Props = {
  setIsVisible: (isVisible: boolean) => void;
};

const RuleModal = ({ setIsVisible }: Props) => {
  return (
    <div className="bg-white rounded-lg w-96 h-96">
      <div className="flex justify-between pt-8 px-7">
        <h1 className="text-2xl font-bold uppercase cursor-default text-darkText">
          rules
        </h1>
        <IconClose
          onClick={() => setIsVisible(false)}
          className="cursor-pointer"
        />
      </div>
      <div className="flex justify-center">
        <ImageRules className="mt-5" />
      </div>
    </div>
  );
};

export default RuleModal;
