import { useState } from 'react';
    import { FaMoon, FaSun } from 'react-icons/fa';

    export default function ThemeToggle() {
      const [isDark, setIsDark] = useState(true);

      const toggleTheme = () => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle('light');
      };

      return (
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDark ? <FaSun /> : <FaMoon />}
        </button>
      );
    }
