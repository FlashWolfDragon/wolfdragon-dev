import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import FishFacts from "@/library/messages.json";
import FishFactText from "@/components/FishFactText";
import { useEffect, useLayoutEffect } from "react";
import Banner from "@/components/Banner";

export default function FishFact() {
  const router = useRouter();
  let fishfact = FishFacts[router.query.date] || ["Loading or not found"];

  const keys = Object.keys(FishFacts);
  const currentIndex = keys.indexOf(router.query.date);
  const nextKey = keys[currentIndex + 1];
  const previousKey = keys[currentIndex - 1];

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Head>
        <title>Wolf Dragon</title>
        <meta name="description" content="FlashWolfDragon's Personal Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner character={"scoutr"} />

      <div className="flex flex-col text-left ml-[1rem] mr-[1rem] sm:ml-[6rem] sm:mr-[6rem] md:ml-[12rem] md:mr-[12rem] -translate-y-16 gap-5">
        <div className="flex text-center text-3xl font-bold">
          <Link href={"https://twitter.com/scoutr33"}>
            Scoutr&#39;s Fish Facts
          </Link>
        </div>
        <h1 className="font-bold text-2xl">{router.query.date}</h1>
        <div className="flex">
          <Link
            as="/fish"
            href="/fish"
            className="border-2 border-[#1f2021] w-24 bg-[#2c2d33] text-center mr-3"
            scroll={true}
          >
            List
          </Link>
          {previousKey ? (
            <Link
              as={`/fish/${previousKey}`}
              href={`/fish/${previousKey}`}
              className="border-2 border-[#1f2021] w-24 bg-[#2c2d33] text-center mr-3 justify-right"
            >
              Previous
            </Link>
          ) : (
            <span className="border-2 border-[#1f2021] w-24 bg-[#161616] text-center mr-3 justify-right">
              At Latest
            </span>
          )}

          {nextKey ? (
            <Link
              as={`/fish/${nextKey}`}
              href={`/fish/${nextKey}`}
              className="border-2 border-[#1f2021] w-24 bg-[#2c2d33] text-center mr-3"
            >
              Next
            </Link>
          ) : (
            <span className="border-2 border-[#1f2021] w-24 bg-[#161616] text-center mr-3 justify-right">
              At First
            </span>
          )}
        </div>
        {fishfact.map((fact) => (
          <FishFactText
            className="flex flex-col justify-center w-full"
            key={fact}
          >
            {fact}
          </FishFactText>
        ))}
      </div>
    </>
  );
}
