import Image from "next/image";
import HeroProjects from "../components/HeroRadio";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import HeroCharlie from "../components/HeroCharlie";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left justify-between p-24">
   
    

     
     <Navbar />
     <div>
      <HeroCharlie />
    
     
  
    </div>
    
    </main>

  );
}
