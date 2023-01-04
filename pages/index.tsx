import type { NextPage } from "next";
import Head from "next/head";
import Score from "../components/score/Score";
import ShapeSelect from "../components/shapeSelect/ShapeSelect";
import { useState } from "react";
import RuleModal from "../components/ruleModal/RuleModal";
import PlayResult from "../components/playResult/PlayResult";
import Rock from "../public/icons/icon-rock.svg";
import Paper from "../public/icons/icon-paper.svg";
import Scissors from "../public/icons/icon-scissors.svg";
import type { CurrentPlay } from "../types";
import { AnimatePresence } from "framer-motion";
import openai from "../utils/openai";
import { formatResponse } from "../utils";

const shapes = [
  {
    color: "bg-gradient-to-b from-[#dd405d] to-[#dc2e4e]",
    bottomShadow: "bg-[#9f1535]",
    position: "absolute bottom-24 xl:bottom-0",
    icon: <Rock />,
    name: "rock",
  },
  {
    color: "bg-gradient-to-b from-[#5671f5] to-[#4865f4]",
    bottomShadow: "bg-[#2945c2]",
    position: "absolute xl:left-0 left-4 top-16 xl:top-0",
    icon: <Paper />,
    name: "paper",
  },
  {
    color: "bg-gradient-to-b from-[#eca922] to-[#ec9e0e]",
    bottomShadow: "bg-[#c76c1b]",
    position: "absolute xl:right-0 right-4 top-16 xl:top-0",
    icon: <Scissors />,
    name: "scissors",
  },
];

const Home: NextPage = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [hasPlayed, setHasPlayed] = useState<boolean>(false);
  const [result, setResult] = useState<string>("");
  const [currentPlay, setCurrentPlay] = useState<CurrentPlay>({
    player: "",
    computer: "",
  });

  const makePlay = async (selectedShape: string) => {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `create just one imaginary result for player 2 in rock, paper, and scissors if player 1 chooses ${selectedShape} in the following format: Player 2: player 2's result.`,
      max_tokens: 7,
      temperature: 0,
    });

    const computerShape = formatResponse(
      response.data.choices[0].text as string
    );

    setCurrentPlay({ player: selectedShape, computer: computerShape });

    if (selectedShape === computerShape) {
      setHasPlayed(true);
      setResult("tie");
      return;
    }

    if (
      (selectedShape === "rock" && computerShape === "scissors") ||
      (selectedShape === "paper" && computerShape === "rock") ||
      (selectedShape === "scissors" && computerShape === "paper")
    ) {
      setResult("win");
      setScore(score + 1);
    } else {
      if (score > 0) {
        setResult("lose");
        setScore(score - 1);
      } else {
        setResult("lose");
      }
    }
    setHasPlayed(true);
  };

  const resetGame = () => {
    setHasPlayed(false);
    setCurrentPlay({ player: "", computer: "" });
  };

  return (
    <div>
      <Head>
        <title>Rock, Paper, Scissors VS ChatGPT</title>
        <meta name="description" content="The classic game we all love." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative flex flex-col items-center w-screen h-screen pt-14 bg-gradient-to-b from-jade to-darkBlue font-roboto">
        <Score score={score} />

        <AnimatePresence>
          {hasPlayed ? (
            <PlayResult
              result={result}
              currentPlay={currentPlay}
              shapes={shapes}
              hasPlayed={hasPlayed}
              resetGame={resetGame}
            />
          ) : (
            <ShapeSelect makePlay={makePlay} shapes={shapes} />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isVisible && (
            <div className="absolute inset-0 z-50 flex items-center justify-center">
              <RuleModal setIsVisible={setIsVisible} />
            </div>
          )}
        </AnimatePresence>

        {isVisible && <div className="absolute inset-0 z-40 bg-black/40" />}

        <button
          onClick={() => setIsVisible(true)}
          className="absolute xl:bottom-8 xl:right-8 bottom-16 px-10 font-medium py-2 text-white uppercase border-[1px] border-white/70 rounded-lg hover:bg-white hover:text-black"
        >
          rules
        </button>
      </main>
    </div>
  );
};

export default Home;
