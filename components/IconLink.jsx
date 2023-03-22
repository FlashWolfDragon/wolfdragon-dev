import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IconLink({ name, icon, link }) {
  return (
    <a
      href={link}
      className="flex justify-center items-center pl-8 pr-8 pb-8 flex-col drop-shadow-2xl outline outline-2 cursor-pointer bg-gradient-to-br from-slate-100 to-slate-300 rounded-xl overflow-hidden hover:bg-gradient-to-tr hover:from-slate-200 hover:to-slate-400 hover:animate-pulse opacity-80"
    >
      <span className="text-[#2c2d33] pb-5 pt-5 font-bold text-md md:text-xl">
        {name}
      </span>
      <div className="flex justify-center items-center h-16 w-16 md:h-56 md:w-56 text-[#0a0a0b] ">
        <FontAwesomeIcon icon={icon} />
      </div>
    </a>
  );
}
