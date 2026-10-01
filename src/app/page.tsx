import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { VisionMission } from "./components/sections/VisionMission";
import Pyramid from "./components/sections/Pyramid";
import { Manifesto } from "./components/sections/Manifesto";
import { Events } from "./components/sections/Events";
import { FlagshipEvents } from "./components/sections/FlagshipEvents";
import { FAQ } from "./components/sections/FAQ";
import { Contact } from "./components/sections/Contact";
import { CallToAction } from "./components/sections/CallToAction";
import { Whypurple } from "./components/sections/Whypurple";
import Hero2 from "./components/sections/Hero2";
// import {Hero} from "./components/sections/Hero";


export default function HomePage() {
  return (
    <div className=" w-full min-h-screen bg-black text-white">
      <Navbar />
      <main className="w-full">
        {/* <Hero /> */}
        <Hero2/>
        <VisionMission />
        <Whypurple />
        <Pyramid />
        <Manifesto />
        <FlagshipEvents />
        <Events />
        <FAQ />
        <Contact />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
