import Head from "next/head";
import Link from "next/link";
import FishFacts from "@/library/messages.json";
import FishFactText from "@/components/FishFactText";
import DataTable from "react-data-table-component";
import { useEffect, useLayoutEffect, useState } from "react";

const columns = [
  {
    name: "Date",
    selector: (row) => row.date,
    sortable: true,
    maxWidth: "7rem",
  },
  {
    name: "FishFact",
    selector: (row) => row.fishfact,
    sortable: false,
    wrap: true,
  },
];

let data = Object.keys(FishFacts).map((date) => {
  return {
    date: date,
    fishfact: (
      <Link href={`/fish/${date}`} as={`/fish/${date}`} className="mt-10">
        <FishFactText>{truncateWords(FishFacts[date][0], 50)}</FishFactText>
      </Link>
    ),
    button: true,
  };
}) || [{ date: "00-00-0000", fishfact: "Loading" }];

function truncateWords(words, length) {
  let arr = words.split(" ");
  if (arr.length <= length) {
    return arr.join(" ");
  }
  return arr.slice(0, length).join(" ") + "...";
}

export default function Fish() {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  if (!initialRenderComplete) {
    return (
      <>
        <Head>
          <title>Wolf Dragon</title>
          <meta
            name="description"
            content="FlashWolfDragon's Personal Website"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="flex flex-col -translate-y-[6rem] m-12"></div>
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>Wolf Dragon</title>
          <meta
            name="description"
            content="FlashWolfDragon's Personal Website"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="flex flex-col -translate-y-[6rem] m-0 md:ml-[6rem] md:mr-[6rem]">
          <h1 className="text-center text-3xl mb-3 font-bold">
            Scoutr's Fish Facts
          </h1>
          <DataTable
            columns={columns}
            data={data}
            pagination
            paginationComponentOptions={{ selectAllRowsItem: true }}
          />
        </div>
      </>
    );
  }
}
