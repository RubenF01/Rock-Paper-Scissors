type Props = {
  shapeInfo: {
    color: string;
    bottomShadow: string;
    position: string;
    icon: any;
  };
};

const Shape = ({ shapeInfo }: Props) => {
  const { color, bottomShadow, icon } = shapeInfo;
  return (
    <div
      className={`relative ${bottomShadow} rounded-full h-[183px] w-44 cursor-pointer`}
    >
      <div
        className={`absolute flex items-center justify-center ${color} rounded-full w-44 h-44`}
      >
        <div className="bg-juliet rounded-full h-[75%] w-[75%] flex justify-center items-center relative">
          <div className="absolute bottom-0 left-0 right-0 rounded-full bg-snowbank top-2" />
        </div>

        <div className="absolute">{icon}</div>
      </div>
    </div>
  );
};

export default Shape;
