import Header from "./components/Header";
import Footer from "./components/Footer";
import Socials from "./components/Socials";

export default function Home() {
  return (
    <main className="flex w-full justify-center fade-in">
      <div className="flex flex-col w-[768px] mx-6 md:px-0 min-h-dvh">
        <Header />
        <main className="flex flex-col items-center w-full h-full gap-16">
          <section className="flex flex-col justify-between gap-8">
            <h1 className="times italic text-7xl sm:text-8xl text-white drop-shadow-[0_1.2px_1.2px_rgba(100,0,0,0.8)]">
              <strong>Ashley Zhang</strong>
            </h1>
            <p className="text-l sm:text-xl w-full sm:w-3/4 helv font-light">
              Hi! I&rsquo;m Ashley. I&rsquo;m currently pursuing a B.S. in
              Computer Science with a minor in Statistics through the Texas A&M
              Engineering Honors program. <br /> <br />
              I'm experienced in full-stack web development, cloud computing,
              scripting, and web scraping. Prev @ Netflix, Scale AI.
            </p>
            <Socials />
          </section>
        </main>
        <Footer />
      </div>
    </main>
  );
}
