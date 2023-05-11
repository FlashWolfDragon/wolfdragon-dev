import Image from "next/image";
import { useState } from "react";

export default function SpoilerImage({ src }) {
  const [revealed, setRevealed] = useState(false);

  function handleClick() {
    setRevealed(!revealed);
  }

  return revealed ? (
    <Image
      onClick={handleClick}
      className="w-[40rem] h-auto brightness-100 cursor-pointer"
      width="0"
      height="0"
      sizes="100vw"
      src={src}
      alt=""
    />
  ) : (
    <Image
      onClick={handleClick}
      className="w-[40rem] h-auto brightness-0 cursor-pointer"
      width="0"
      height="0"
      sizes="100vw"
      src={src}
      alt=""
    />
  );
}
