import GitHub from "../assets/SVG/GitHub";
import Globe from "../assets/SVG/Globe";

interface Props {
  name: string;
  date: string;
  desc: string;
  win?: string;
  img: string;
  stack: React.ReactNode[];
  links: {
    github: string;
    web: string;
  };
  number: number;
}

const Project = ({
  name,
  date,
  desc,
  win,
  img,
  stack,
  links,
  number,
}: Props) => {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex lg:w-2/5 items-center">
        <img src={img} alt="" className="shadow-md" />
      </div>
      <div className="flex flex-col justify-around lg:w-3/5">
        <div className="flex mb-4">
          <div className="mr-4">
            <div className="flex font-bold mb-4 gap-2">
              <p className="text-pink-300">
                {number.toString().padStart(2, "0")}
              </p>
              <p>{name.toLocaleUpperCase()}</p>
            </div>
            <p>{desc}</p>
            {win && <br />}
            <p>{win}</p>
          </div>
          <div className="text-gray-400">{date}</div>
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="flex gap-6 text-2xl text-slate-600">
            {stack.map((element, index) => (
              <span key={index} className="flex items-center">
                {element}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <a href={links.github} target="_blank" rel="noopener noreferrer">
              <GitHub className="w-6 h-6 fill-none stroke-2 stroke-pink-300 hover:stroke-pink-400" />
            </a>
            <a href={links.web} target="_blank" rel="noopener noreferrer">
              <Globe className="w-6 h-6 fill-none stroke-2 stroke-pink-300 hover:stroke-pink-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
