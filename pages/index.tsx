import type { NextPage } from "next";
import Head from "next/head";
import Score from "../components/score/Score";
import { useState } from "react";

const Home: NextPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <div>
      <Head>
        <title>Rock, Paper, Scissors</title>
        <meta name="description" content="The classic game we all love." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center w-screen h-screen pt-14 bg-gradient-to-b from-jade to-darkBlue font-roboto">
        <Score />
      </main>
    </div>
  );
};

export default Home;
