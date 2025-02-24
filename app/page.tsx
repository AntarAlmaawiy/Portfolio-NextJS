import Hero from "@/components/Hero";
import {FloatingNav} from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import {navItems} from "@/data";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import {WorldMapDemo} from "@/components/ui/WorldMapDemo";

export default function Home() {
  return (
      <main className="relative bg-black-100 flex justify-center items-center flex-col
         max-auto sm:px-10 px-5 overflow-clip">
        <div className="max-w-7xl w-full">
        <h1>
            <FloatingNav navItems={navItems} />
            <Hero />
            <Grid />
            <RecentProjects />
            <Clients />
            <Experience />
            <Approach />
            <WorldMapDemo/>
            <Footer />
        </h1>
        </div>
      </main>
  );
}
