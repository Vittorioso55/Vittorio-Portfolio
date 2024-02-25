import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";


// import Cards from "./components/Cards";

export default function Home() {
  return (
   <section className="w-full">

  
    <main className="flex min-h-screen flex-col items-left justify-between p-24">
   
    <div>

    <HeroSection />
    </div>

    
     <Navbar />

    
  
     <ProjectsSection />
 
     <AboutSection />
  
   
    </main>

    </section>

  );
}
