import { ThemeToggle } from "@/Components/ThemeToggle";
import { BackgroundAnimations } from "@/Components/Background";
import { Navbar } from "@/Components/Navbar";
import { MainSection } from "@/Components/MainSection";
import { AboutSection } from "@/Components/About";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effect */}
      <BackgroundAnimations />
      {/* Navbar  */}
      <Navbar />
      {/* Main Content */}
      <main>
        <MainSection />
        <AboutSection />
      </main>
      {/* Footer */}
    </div>
  );
};
