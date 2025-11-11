import { ThemeToggle } from "@/Components/ThemeToggle";
import { BackgroundAnimations } from "@/Components/Background";
import { Navbar } from "@/Components/Navbar";

export const Home=() => {
    return (
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        <ThemeToggle />
        {/* Background Effect */}
        <BackgroundAnimations/>
        {/* Navbar  */}
        <Navbar />
        {/* Main Content */}
        {/* Footer */}
      </div>
    );
}