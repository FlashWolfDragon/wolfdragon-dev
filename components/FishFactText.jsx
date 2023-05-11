import reactStringReplace from "react-string-replace";
import Image from "next/image";
import SpoilerImage from "./SpoilerImage";
import SpoilerText from "./SpoilerText";

export default function FishFactText(props) {
  let content = reactStringReplace(props.children, /\|\|/g, (match, i) => (
    <SpoilerText key={i}>{match}</SpoilerText>
  ));

  content = reactStringReplace(content, /\/public\/fishfacts/g, (match, i) =>
    match.toLowerCase().includes("spoiler") ? (
      <SpoilerImage key={i} src={`/fishfacts${match}`} />
    ) : (
      <Image
        key={i}
        className="w-[40rem] h-auto"
        width="0"
        height="0"
        sizes="100vw"
        src={`/fishfacts${match}`}
        alt=""
      />
    )
  );

  return <div className={props.className}>{content}</div>;
}
