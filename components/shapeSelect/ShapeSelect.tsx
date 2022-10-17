import BgTriangle from "../../public/icons/bg-triangle.svg";
import Rock from "../../public/icons/icon-rock.svg";
import Paper from "../../public/icons/icon-paper.svg";
import Scissors from "../../public/icons/icon-scissors.svg";
import Shape from "./Shape";

const shapes = [
  {
    color: "bg-gradient-to-b from-[#dc425c] to-[#db2d4d]",
    bottomShadow: "bg-[#9f1535]",
    position: "absolute bottom-0",
    icon: <Rock />,
  },
  {
    color: "bg-gradient-to-b from-[#5772f7] to-[#4462f4]",
    bottomShadow: "bg-[#2945c2]",
    position: "absolute left-0 top-0",
    icon: <Paper />,
  },
  {
    color: "bg-gradient-to-b from-[#eca726] to-[#ec9f11]",
    bottomShadow: "bg-[#c76c1b]",
    position: "absolute right-0 top-0",
    icon: <Scissors />,
  },
];

const ShapeSelect = () => {
  return (
    <div className="relative flex items-center justify-center w-[450px] h-[450px] mt-20">
      <BgTriangle />
      {shapes.map((shape, index) => (
        <div key={index} className={shape.position}>
          <Shape shapeInfo={shape} />
        </div>
      ))}
    </div>
  );
};

export default ShapeSelect;
