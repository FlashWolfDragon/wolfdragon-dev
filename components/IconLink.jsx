import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function IconLink({ name, icon, link }) {
  return (
    <Link
      href={link}
      className="flex justify-center items-center pl-8 pr-8 pb-8 min-w-[4rem] max-w-[7rem] md:min-w-[6rem] md:max-w-[10rem] flex-col outline outline-2 cursor-pointer bg-gradient-to-br from-slate-100 to-slate-300 rounded-xl overflow-hidden hover:bg-gradient-to-tr hover:from-slate-200 hover:to-slate-400 hover:animate-pulse opacity-80"
    >
      <span className="text-[#2c2d33] pb-5 pt-5 font-bold text-xl">{name}</span>
      <div className="flex justify-center items-center min-w-[4rem] max-w-[7rem] md:min-w-[6rem] md:max-w-[10rem] text-[#0a0a0b] ">
        <FontAwesomeIcon icon={icon} />
      </div>
    </Link>
  );
}
