import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Socials from "../components/Socials";

export default function HCI() {
  return (
    <main className="w-full flex justify-center fade-in">
      <div className="flex flex-col max-w-screen-xl mx-6 min-h-dvh">
        <div className="flex w-full justify-center">
          <Header />
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-4 md:mx-4">
          <div className="flex flex-col gap-4 md:w-8/12">
            <div className="flex gap-8">
              <div className="w-4/12">
                <Image
                  src={"/me.jpg"}
                  width={600}
                  height={600}
                  alt="picture of me standing in front of the Golden Gate Bridge"
                  className="rounded-xl"
                ></Image>
                <p className="text-xs text-gray-400 pt-2">
                  Me standing in front of the Golden Gate Bridge in San
                  Francisco.
                </p>
              </div>
              <div className="flex flex-col gap-4 w-8/12">
                <p>
                  Hi! My name is Ashley Zhang. I'm a 3rd year junior studying
                  computer science at Texas A&M University. I have too much time
                  on the plane right now, so I will make this.
                </p>
                <p>
                  At A&M, I'm mostly involved in ACPC and ENGR TAO. I am a big
                  fan of poker, bouldering, biking, word games, and medieval
                  literature! Besides these, I'm also partial towards idiomatic
                  design. My interest in human-centric design started when I
                  watched the iconic 2013 film <i>Jobs</i> (where Steve Jobs is
                  portrayed by the lovely Ashton Kutcher). It briefly mentioned
                  how Jobs was obsessive over Apple design, and I think that
                  even today Apple has some of the sleekest designs on the
                  market. I was particularly charmed by skeuomorphism, or
                  designing digital elements that mimic their real-world
                  counterparts.
                </p>
              </div>
            </div>
            <p>
              From there, I sought to read <i>Don't Make Me Think</i> by Steve
              Krug, somewhat of a holy grail of HCI and web usability.
              Unfortunately, I was never able to finish the book (and actually
              incurred a $94 library fee for returning it 6 months late), but it
              marks another milestone in my exploration of HCI. Given that{" "}
              <i>Don't Make Me Think</i> was originally published in 2000,
              naturally I felt that some of the concepts were outdated.
              Nevertheless, the overarching ideals have stood the test of time
              and have inspired me to design beautifully with the user in mind.
              Increasing competition between similar digital products within one
              niche has made it so that users differentiate by their experience
              using the product.
            </p>
            <p>
              Bad examples of digital interactions are everywhere. In CSCE 412
              Cloud Computing, we worked mainly with Amazon Web Services.
              Although I admit that AWS provides vital products for individual
              contributors, startups, and many more companies, the website
              interface itself is far from perfect. For novice users (I would
              put myself in this category), the learnability aspect is just very
              lacking in my opinion. It was also hard for me to diagnose some
              hidden costs, which may be a dark pattern.
            </p>
            <p>Ok, that's enough about HCI. This is my dog, Cici.</p>
            <Image
              src={"/cici.JPG"}
              width={200}
              height={200}
              alt="my dog, Cici"
              className="rounded-xl"
            ></Image>
          </div>
          <div className="flex flex-col md:w-4/12 md:mx-6 gap-4">
            <p className="font-bold times italic text-6xl md:text-7xl text-white drop-shadow-[0_1.2px_1.2px_rgba(100,0,0,0.8)]">
              HCI Bio
            </p>
            <Socials />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
