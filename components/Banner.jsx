import Image from "next/image";
import BannerBackgroundWolfDragon from "@/images/Background-Banner-Wolfdragon.png";
import BannerGroundWolfDragon from "@/images/Ground-Banner-WolfDragon.gif";
import StarsBackgroundWolfDragon from "@/images/Stars-Banner-WolfDragon.gif";
import BannerBackgroundScoutr from "@/images/Background-Banner-Scoutr.png";
import BannerGroundScoutr from "@/images/Ground-Banner-Scoutr.gif";
import StarsBackgroundScoutr from "@/images/Stars-Banner-Scoutr.gif";

import Link from "next/link";

export default function Banner({ character }) {
  let background = BannerBackgroundWolfDragon;
  let ground = BannerGroundWolfDragon;
  let stars = StarsBackgroundWolfDragon;

  if (character) {
    switch (character.toLowerCase()) {
      case "scoutr":
        background = BannerBackgroundScoutr;
        ground = BannerGroundScoutr;
        stars = StarsBackgroundScoutr;
        break;
      default:
        background = BannerBackgroundWolfDragon;
        ground = BannerGroundWolfDragon;
        stars = StarsBackgroundWolfDragon;
        break;
    }
  }

  return (
    <div className="relative">
      <Image
        src={background}
        alt="Banner"
        className="absolute w-[2990px] max-w-[2990px]"
      />
      <Link
        href="/"
        as="/"
        className="absolute w-[200px] h-[200px] translate-x-[75px] translate-y-[130px] z-10"
      ></Link>
      <Image
        src={ground}
        alt="Banner"
        className="absolute w-[2990px] max-w-[2990px]"
      />
      <Image
        src={stars}
        alt="Banner"
        className="absolute w-[2990px] max-w-[2990px]"
      />
      <div className="pt-[27rem] md:pt-[30rem]"></div>
    </div>
  );
}
