import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

export const MainSection = () => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const handleThemeChange = () => {
      setAnimationKey((prev) => prev + 1);
    };
    window.addEventListener("theme-change", handleThemeChange);
    return () => window.removeEventListener("theme-change", handleThemeChange);
  }, []);

  return (
    <section
      id="main"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6" key={animationKey}>
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              MAY{" "}
            </span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-2">
              {" "}
              Developer{" "}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            {" "}
            A curious mind who loves coding, experimenting with new tech, and
            making digital experiences enjoyable.{" "}
          </p>
        </div>
        <div className="pt-8 opacity-0 animate-fade-in-delay-3">
          <a
            href="#projects"
            className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,93,246,0.5)] hover:scale-105 active:scale-95"
          >
            {" "}
            View My Projects
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span> Scroll </span>
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};
