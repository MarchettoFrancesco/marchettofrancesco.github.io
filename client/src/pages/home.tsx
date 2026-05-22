import {
  Mail,
  Linkedin,
  Github,
  GraduationCap,
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
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-5xl font-bold gradient-text leading-tight">
                    Francesco Marchetto
                  </h1>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                    <span className="glass-effect px-4 py-2 rounded-full text-sm font-medium">
                      AI Engineer
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Section - Description */}
              <div className="lg:col-span-3 space-y-8 opacity-0 animate-fade-in-right">
                <div className="glass-effect p-8 rounded-2xl backdrop-blur-lg hover:scale-[1.02] transition-all duration-300 max-w-2xl ml-auto">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
                      <h2 className="text-2xl font-bold">About me</h2>
                    </div>

                    <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 text-justify">
                      I am currently working as an{" "}
                      <span className="font-semibold text-blue-600 dark:text-blue-400">
                        Intern in Data & AI Engineering
                      </span>{" "}
                      at{" "}
                      <span className="font-semibold text-purple-600 dark:text-purple-400">
                        Nestlé Research
                      </span>{" "}
                      and will graduate in July with a{" "}
                      <span className="font-semibold">
                        Master’s degree in Artificial Intelligence & Cybersecurity
                      </span>
                      . My background includes{" "}
                      <span className="font-semibold">
                        research in AI for Health
                      </span>
                      . I first-authored a full paper on{" "}
                      <span className="font-semibold">
                        synthetic data augmentation for surgical image generation
                      </span>
                      , accepted at{" "}
                      <span className="font-semibold text-blue-600 dark:text-blue-400">
                        IEEE CBMS 2026
                      </span>
                      , which I will present in Cyprus.
                    </p>

                    <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 text-justify">
                      Outside of work and research, I am passionate about{" "}
                      <span className="font-semibold text-purple-600 dark:text-purple-400">
                        music, fashion, and outdoor activities.
                      </span>{" "}
                    </p>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-blue-500" />
                        Education
                      </h3>
                      <div className="space-y-2 text-sm">
                        <p className="font-medium">
                          MSc in Artificial Intelligence & Cybersecurity
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

                    <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Microscope className="w-5 h-5 text-green-500" />
                        Research
                      </h3>

                      <div className="grid gap-4">
                        {/* Latest Paper */}
                        <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg">
                          <h4 className="font-medium text-blue-800 dark:text-blue-300">
                            Hybrid Semantic Augmentation for Cataract Surgery
                            Image Synthesis with GANs and Diffusion-based Models
                          </h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">
                            Novel algorithm in Semantic mask–based augmentation
                            using GANs and diffusion models to improve surgical
                            image generation in data-scarce settings.
                            <span className="italic">
                              {" "}
                              (Accepted IEEE CBMS 2026)
                            </span>
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
        <section className="pt-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="glass-effect p-8 rounded-2xl backdrop-blur-lg hover:scale-[1.02] transition-all duration-300 space-y-6 opacity-0 animate-fade-in-up text-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-green-400 to-blue-500 rounded-full"></div>
                <h2 className="text-xl font-bold">Cambridge Experience</h2>
              </div>
              <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                In June 2025, I had the incredible opportunity to take part in a
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  {" "}
                  study trip to Cambridge
                </span>
                , organized with the support of Università degli Studi di Udine
                and guided by Professor Pietro Liò. Alongside other selected
                students, we explored cutting-edge AI research across the
                University of Cambridge, Imperial College London, and The
                University of Edinburgh.
              </p>
              <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                We had direct access to research in areas like
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  {" "}
                  neurosymbolic AI, category theory, federated learning, and
                  medical AI
                </span>
                . We also met professionals from startups and tech giants like
                DeepMind, Tenyks, Nokia Bell Labs, and MediaTek.
              </p>
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
                  href="https://github.com/MarchettoFrancesco"
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
                  📍 Lausanne, Switzerland • 🎓 Data & AI Engineering Intern at Nestlé Research
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
