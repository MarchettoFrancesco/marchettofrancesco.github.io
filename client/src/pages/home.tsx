import {
  Mail,
  Linkedin,
  Github,
  GraduationCap,
  Trophy,
  Microscope,
  BrainCircuit,
} from "lucide-react";
import { AnimatedBackground } from "@/components/animated-background";
import SplashCursor from "@/components/SplashCursor";
import { ThemeToggle } from "@/components/theme-toggle";
import seedImage from "./IMG-20230824-WA0016.jpg";

export default function Home() {
  return (
    <div className="min-h-screen relative bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-x-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Splash Cursor */}
      <SplashCursor />

      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Main Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
              {/* Left Section - Profile */}
              <div className="lg:col-span-2 text-center lg:text-left space-y-8 opacity-0 animate-fade-in-left">
                <div className="relative inline-block">
                  {/* Professional profile picture */}
                  <div className="w-64 h-64 mx-auto lg:mx-0 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-500/20 animate-float">
                    <img
                      src={seedImage}
                      alt="Seed"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 glass-effect rounded-full p-3 animate-glow">
                    <BrainCircuit className="w-6 h-6 text-blue-500" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-5xl font-bold gradient-text leading-tight">
                    Francesco Marchetto
                  </h1>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                    <span className="glass-effect px-4 py-2 rounded-full text-sm font-medium">
                      AI Engineer
                    </span>

                    <span className="glass-effect px-4 py-2 rounded-full text-sm font-medium">
                      Innovator
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Section - Description */}
              <div className="lg:col-span-3 space-y-8 opacity-0 animate-fade-in-right">
                <div className="glass-effect p-8 rounded-2xl backdrop-blur-lg hover:scale-[1.02] transition-all duration-300">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
                      <h2 className="text-2xl font-bold">About me</h2>
                    </div>

                    <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                      Passionate AI Engineer specializing in{" "}
                      <span className="font-semibold text-blue-600 dark:text-blue-400">
                        Machine Learning
                      </span>{" "}
                      and{" "}
                      <span className="font-semibold text-purple-600 dark:text-purple-400">
                        Computer Vision
                      </span>{" "}
                      Currently pursuing my Master's in AI & Cybersecurity while
                      I also spent some months researching in digital pathology
                      and medical AI. I am also part of Enactus Udine, where
                      other than Computer Vision i am also involved in Business
                      Analysis. In 2025 we won Italy National Champion, with our
                      innovative project{" "}
                      <a
                        href="https://www.linkedin.com/company/agrichange-italia/posts/?feedView=all"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        Agrichange
                      </a>
                      . Now we will partecipate in the Enactus World Cup in
                      Thailand.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <GraduationCap className="w-5 h-5 text-blue-500" />
                          Education
                        </h3>
                        <div className="space-y-2 text-sm">
                          <p className="font-medium">
                            MS in AI & Cybersecurity
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            Università degli Studi di Udine & University of
                            Klagenfurt
                          </p>
                          <p className="text-gray-500 dark:text-gray-500">
                            Oct 2024 - Jul 2026
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                          <Trophy className="w-5 h-5 text-yellow-500" />
                          Achievement
                        </h3>
                        <div className="space-y-2 text-sm">
                          <p className="font-medium text-yellow-600 dark:text-yellow-400">
                            2025 Enactus Italy National Champion
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            1st place presenting "Agrichange" project
                          </p>
                          <p className="text-gray-500 dark:text-gray-500">
                            Sustainable agriculture innovation
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Microscope className="w-5 h-5 text-green-500" />
                        Current and past Research
                      </h3>
                      <div className="grid gap-4">
                        <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg">
                          <h4 className="font-medium text-blue-800 dark:text-blue-300">
                            Computer Vision
                          </h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">
                            Developing AI and computer vision systems to detect
                            seed germination and monitor growth over time with
                            precision.
                          </p>
                        </div>
                        <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg">
                          <h4 className="font-medium text-purple-800 dark:text-purple-300">
                            Medical NLP
                          </h4>
                          <p className="text-sm text-purple-600 dark:text-purple-400 mt-1">
                            Fine-tuning transformer models for medical text
                            classification and analysis
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer - Get in Touch */}
        <footer className="relative z-10 py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="glass-effect p-8 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-6 gradient-text">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Interested in AI research collaboration, innovative projects, or
                just want to connect? I'd love to hear from you!
              </p>

              <div className="flex justify-center items-center gap-6 flex-wrap">
                <a
                  href="mailto:francescomarchetto.work@gmail.com"
                  className="glass-effect p-4 rounded-full hover:scale-110 hover:animate-glow transition-all duration-300 group"
                  aria-label="Email Francesco"
                >
                  <Mail className="w-6 h-6 text-blue-500 group-hover:text-blue-400" />
                </a>

                <a
                  href="https://linkedin.com/in/francesco-marchetto"
                  className="glass-effect p-4 rounded-full hover:scale-110 hover:animate-glow transition-all duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-6 h-6 text-blue-600 group-hover:text-blue-500" />
                </a>

                <a
                  href="https://github.com/francescomarchetto"
                  className="glass-effect p-4 rounded-full hover:scale-110 hover:animate-glow transition-all duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-gray-600 dark:group-hover:text-gray-200" />
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  📍 Villorba, TV, Italy • 🎓 AI & Cybersecurity Student • 🏆
                  Enactus National Champion 2025
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
