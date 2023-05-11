import Head from "next/head";
import Link from "next/link";
import FishFacts from "@/library/messages.json";
import FishFactText from "@/components/FishFactText";
import DataTable from "react-data-table-component";
import { useEffect, useLayoutEffect, useState } from "react";
import IconLink from "@/components/IconLink";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

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
          <div className="flex text-center text-3xl mb-3 font-bold">
            <Link href={"https://twitter.com/scoutr33"}>
              Scoutr&#39;s Fish Facts
            </Link>
          </div>
          <DataTable
            columns={columns}
            data={data}
            pagination
            paginationComponentOptions={{ selectAllRowsItem: true }}
          />
          <div className="flex mt-5 ml-5 flex-col md:flex-row">
            <IconLink
              link="https://twitter.com/scoutr33"
              name="Scoutr's Twitter"
              icon={faTwitter}
              className={"w-1 h-1"}
            />
            <p className="p-3 max-w-[40rem]">
              ABOUT: <br />
              This page is a collection of daily fish facts made by Scoutr33
              from 2021 to 2022 that was originally hosted on a discord server.
              This page serves as an archive of all the fish facts that have
              been made on that server. There are some content warnings
              throughout the fish facts, and the content has been blurred out.
              This content can be revealed on click. This page has been made
              with permission from Scoutr.
            </p>
          </div>
        </div>
      </>
    );
  }
}
