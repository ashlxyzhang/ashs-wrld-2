import Link from "next/link";
import Globe from "../assets/SVG/Globe";

export default function Header() {
  return (
    <nav className="flex justify-between w-full md:w-[768px] py-8 mb-4">
      <div className="flex gap-3 items-center">
        <p className="hidden md:block lg:block">Ash&rsquo;s World</p>
        <Link href="/">
          <Globe className="w-6 h-6 fill-none stroke-2 stroke-orange hover:stroke-dark-orange" />
        </Link>
      </div>
      <div className="flex gap-4 sm:gap-8">
        <Link className="hover:text-orange" href="/projects">
          Projects
        </Link>
        <a
          href="/ashley_zhang_resume.pdf"
          className="hover:text-orange"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
        <button className="hover:text-orange">Blender</button>
      </div>
    </nav>
  );
}
