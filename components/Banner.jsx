import Image from "next/image";
import BannerGround from "@/images/Ground-Banner-WolfDragon.gif";
import BannerBackground from "@/images/Background-Banner-Wolfdragon.png";
import StarsBackground from "@/images/Stars-Banner-WolfDragon.gif";

export default function Banner() {
  return (
    <div className="relative">
      <Image
        src={BannerBackground}
        alt="Banner"
        className="absolute w-[2990px] max-w-[2990px]"
      />
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
    </div>
  );
}