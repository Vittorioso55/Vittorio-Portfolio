import Image from "next/image";
import HeroProjects from "../components/HeroRadio";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import Cards from "../components/Cards";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left justify-between p-24">
    
     {/* <Starscanvas /> */}

     
     <Navbar />
     <div>
    
     <HeroProjects />
     <br />
    
  
    </div>
    
    </main>

  );
}