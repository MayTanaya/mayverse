const CV_FILE_URL = "/CV_Hasna_May_Tanaya.pdf";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Web Developer & Technology
            </h3>
            <p className="text-muted-foreground">
              Hello! I'm Hasna May Tanaya, a curious and passionate Informatics Engineering
              student.
            </p>
            <p>
              I am passionate about exploring new technologies and continuously
              learning innovative solutions. I have a strong interest in web
              development and enjoy collaborating with others to bring creative
              ideas to life. Working in teams motivates me to contribute
              effectively while growing my skills and knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,93,246,0.5)] hover:scale-105 active:scale-95"
              >
                Contact Me
              </a>

              <a
                href={CV_FILE_URL}
                download="CV_Hasna_May_Tanaya.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center p-4">
            <div className="w-full max-w-xs md:max-w-sm h-80 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg flex items-center justify-center text-gray-500">
              [ Tempat untuk foto Anda ]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
