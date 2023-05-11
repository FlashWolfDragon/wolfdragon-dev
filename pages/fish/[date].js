import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import FishFacts from "@/library/messages.json";
import FishFactText from "@/components/FishFactText";

export default function FishFact() {
  const router = useRouter();
  let fishfact = FishFacts[router.query.date] || ["Loading or not found"];

  return (
    <>
      <Head>
        <title>Wolf Dragon</title>
        <meta name="description" content="FlashWolfDragon's Personal Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col text-left ml-[6rem] mr-[6rem] md:ml-[12rem] md:mr-[12rem] -translate-y-16 gap-5">
        <Link
          href="http://localhost:3000/fish"
          className="border-2 border-[#1f2021] w-24 bg-[#2c2d33] text-center"
        >
          Back
        </Link>
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
