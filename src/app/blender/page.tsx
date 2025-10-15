import Footer from "../components/Footer";
import Header from "../components/Header";
import Socials from "../components/Socials";

export default function Blender() {
  return (
    <main className="w-full flex justify-center fade-in">
      <div className="flex flex-col max-w-screen-xl mx-6 min-h-dvh">
        <div className="flex w-full justify-center">
          <Header />
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-4 md:mx-4">
          <div className="flex flex-col md:w-4/12 md:mx-6 gap-4">
            <p className="font-bold times italic text-6xl md:text-7xl text-white drop-shadow-[0_1.2px_1.2px_rgba(100,0,0,0.8)]">
              Blender Portfolio
            </p>
            <Socials />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
