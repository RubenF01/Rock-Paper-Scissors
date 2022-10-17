const Score = () => {
  return (
    <div className="flex justify-between items-center border-2 w-[700px] border-white/50 rounded-2xl pr-5 pl-7">
      <div className="py-5 text-3xl font-bold leading-none text-white uppercase">
        <h1>rock</h1>
        <h1>paper</h1>
        <h1>scissors</h1>
      </div>

      <div className="bg-white h-[75%] w-36 flex items-center flex-col justify-center font-bold rounded-lg">
        <p className="uppercase text-bellFlower">score</p>
        <h1 className="text-5xl text-freefall">12</h1>
      </div>
    </div>
  );
};

export default Score;
