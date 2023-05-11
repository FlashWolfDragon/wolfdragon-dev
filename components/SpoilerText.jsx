import Image from "next/image";
import { useState } from "react";

export default function SpoilerText(props) {
  const [revealed, setRevealed] = useState(false);

  function handleClick() {
    setRevealed(!revealed);
  }

  return revealed ? (
    <span
      onClick={handleClick}
      className="border-solid border-2 border-black cursor-pointer"
    >
      {props.children}
    </span>
  ) : (
    <span onClick={handleClick} className="bg-black text-black cursor-pointer">
      {props.children}
    </span>
  );
}
