import Head from "next/head";

export const getStaticPaths = async () => {
    const res = await fetch();

    const paths = '';

    return {
        paths,
        fallback: false
    }
}

export default function FishFact() {
  return (
    <>
      <Head>
        <title>Wolf Dragon</title>
        <meta name="description" content="FlashWolfDragon's Personal Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center flex-row flex-wrap ml-8 mr-8 md:ml-32 md:mr-32 -translate-y-16 gap-5">
        <h1>1</h1>
      </div>
    </>
  );
}