// import svgs from "./SVG";

import Email from "../assets/Email";
import GitHub from "../assets/GitHub";
import Instagram from "../assets/Instagram";
import LinkedIn from "../assets/LinkedIn";

export default function Socials() {
  return (
    <div className="flex gap-4">
      <a
        href="mailto:ashleyoftexas@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        <Email className="w-8 h-8 md:w-10 md:h-10 stroke-2 fill-none stroke-slate-600 hover:stroke-orange cursor-pointer" />
      </a>
      <a
        href="https://linkedin.com/in/ashley-j-zhang/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        <LinkedIn className="w-8 h-8 md:w-10 md:h-10 stroke-2 fill-none stroke-slate-600 hover:stroke-orange" />
      </a>
      <a
        href="https://github.com/ashlxyzhang/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        <GitHub className="w-8 h-8 md:w-10 md:h-10 stroke-2 fill-none stroke-slate-600 hover:stroke-orange" />
      </a>
      <a
        href="https://www.instagram.com/ashs_wrld/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        <Instagram className="w-8 h-8 md:w-10 md:h-10 fill-slate-600 hover:fill-orange" />
      </a>
    </div>
  );
}
