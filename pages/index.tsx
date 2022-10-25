import type { NextPage } from "next";
import Head from "next/head";
import Score from "../components/score/Score";
import ShapeSelect from "../components/shapeSelect/ShapeSelect";
import { useState } from "react";
import RuleModal from "../components/ruleModal/RuleModal";
import PlayResult from "../components/playResult/PlayResult";

const Home: NextPage = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [hasPlayed, setHasPlayed] = useState<boolean>(false);
  const [result, setResult] = useState<string>("");

  const makePlay = (selectedShape: string) => {
    const shapes = ["rock", "paper", "scissors"];
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];

    if (selectedShape === randomShape) {
      setHasPlayed(true);
      setResult("tie");
      return;
    }

    if (
      (selectedShape === "rock" && randomShape === "scissors") ||
      (selectedShape === "paper" && randomShape === "rock") ||
      (selectedShape === "scissors" && randomShape === "paper")
    ) {
      setResult("win");
      setScore(score + 1);
    } else {
      if (score > 0) {
        setResult("lose");
        setScore(score - 1);
      }
    }
    setHasPlayed(true);
  };

  return (
    <div>
      <Head>
        <title>Rock, Paper, Scissors</title>
        <meta name="description" content="The classic game we all love." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative flex flex-col items-center w-screen h-screen pt-14 bg-gradient-to-b from-jade to-darkBlue font-roboto">
        <Score score={score} />

        {hasPlayed ? (
          <PlayResult result={result} />
        ) : (
          <ShapeSelect makePlay={makePlay} />
        )}

        {isVisible && (
          <div className="absolute inset-0 z-50 flex items-center justify-center">
            <RuleModal setIsVisible={setIsVisible} />
          </div>
        )}

        {isVisible && <div className="absolute inset-0 z-40 bg-black/40" />}

        <button
          onClick={() => setIsVisible(true)}
          className="absolute bottom-8 right-8 px-10 font-medium py-2 text-white uppercase border-[1px] border-white/70 rounded-lg hover:bg-white hover:text-black"
        >
          rules
        </button>
      </main>
    </div>
  );
};

export default Home;
