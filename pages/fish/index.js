import Head from "next/head";
import Link from "next/link";
import FishFacts from "@/library/messages.json";
import FishFactText from "@/components/FishFactText";

export default function Fish() {
  function truncateWords(words, length) {
    let arr = words.split(" ");
    if (arr.length <= length) {
      return arr.join(" ");
    }
    return arr.slice(0, length).join(" ") + "...";
  }

  return (
    <>
      <Head>
        <title>Wolf Dragon</title>
        <meta name="description" content="FlashWolfDragon's Personal Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col -translate-y-[6rem]">
        <h1 className="text-center text-3xl font-bold">Scoutr's Fish Facts</h1>
        <div className="overflow-x-auto sm:mx-10 lg:mx-20">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <table className="min-w-full">
              <thead className="bg-white border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Fact
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(FishFacts).map((date) => (
                  <tr className="bg-gray-100 border-b" key={date}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {date}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4">
                      <Link href={"http://localhost:3000/fish/" + date}>
                        {
                          <FishFactText>
                            {truncateWords(FishFacts[date][0], 25)}
                          </FishFactText>
                        }
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/*
      <Table
        aria-label="Example table with static content"
        css={{
          height: "auto",
          minWidth: "100%",
        }}
      >
      </Table> */}
    </>
  );
}
