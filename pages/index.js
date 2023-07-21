import Head from "next/head";
import IconLink from "@/components/IconLink";
import Banner from "@/components/Banner";
import {
  faDragon,
  faFish,
  faNewspaper,
  faPalette,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faTelegram,
  faGithub,
  faMastodon,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wolf Dragon</title>
        <meta name="description" content="FlashWolfDragon's Personal Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />

      <div className="flex justify-center flex-row flex-wrap ml-8 mr-8 md:ml-32 md:mr-32 -translate-y-16 gap-5">
        <IconLink
          link="https://twitter.com/FlashWolfDragon"
          name="Twitter"
          icon={faTwitter}
        />
        <IconLink
          link="https://meow.social/@Flash"
          name="Mastodon"
          rel="me"
          icon={faMastodon}
        />
        <IconLink
          link="https://t.me/FlashWolfDragon"
          name="Telegram"
          icon={faTelegram}
        />
        <IconLink
          link="https://github.com/FlashWolfDragon"
          name="Github"
          icon={faGithub}
        />
        <IconLink
          link="https://blog.wolfdragon.dev/"
          name="Blog"
          icon={faNewspaper}
        />
        <IconLink
          link="https://trello.com/b/JVaMnD4y/flashs-commissions"
          name="Art"
          icon={faPalette}
        />
        <IconLink link="/fish" name="Scoutr's Fish Facts" icon={faFish} />
        <IconLink
          link="https://yip.wolfdragon.dev/"
          name="Yip"
          icon={faDragon}
        />
        <IconLink
          link="https://t.me/addstickers/FlashWolfDragon"
          name="Dragon Stickers"
          icon={faPaperPlane}
        />
        <IconLink
          link="https://t.me/addstickers/FlashKobold"
          name="Kobold Stickers"
          icon={faPaperPlane}
        />
      </div>
    </>
  );
}
