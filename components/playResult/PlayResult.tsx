import Shape from "../shapeSelect/Shape";

type Props = {
  result: string;
};

const PlayResult = ({ result }: Props) => {
  const formatResult = (result: string) => {
    return "hola";
  };
  return (
    <div>
      <Shape />
      <h1>{formatResult(result)}</h1>
      <Shape />
    </div>
  );
};

export default PlayResult;
