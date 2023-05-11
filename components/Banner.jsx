import Image from "next/image";
import BannerGround from "@/images/Ground-Banner-WolfDragon.gif";
import BannerBackground from "@/images/Background-Banner-Wolfdragon.png";
import StarsBackground from "@/images/Stars-Banner-WolfDragon.gif";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="relative">
      <Image
        src={BannerBackground}
        alt="Banner"
        className="absolute w-[2990px] max-w-[2990px]"
      />
      <Link
        href="/"
        as="/"
        className="absolute w-[200px] h-[200px] translate-x-[75px] translate-y-[130px] z-10"
      ></Link>
      <Image
        src={BannerGround}
        alt="Banner"
        className="absolute w-[2990px] max-w-[2990px]"
      />
      <Image
        src={StarsBackground}
        alt="Banner"
        className="absolute w-[2990px] max-w-[2990px]"
      />
      <div className="pt-[27rem] md:pt-[30rem]"></div>
    </div>
  );
}
