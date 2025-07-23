import { Sun, Moon } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="glass-effect p-3 rounded-full hover:scale-110 transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 text-yellow-500 block dark:hidden transition-transform duration-300 group-hover:rotate-12" />
      <Moon className="h-5 w-5 text-blue-400 hidden dark:block transition-transform duration-300 group-hover:rotate-12" />
    </button>
  );
}
