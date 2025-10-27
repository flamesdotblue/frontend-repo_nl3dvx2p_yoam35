import { useEffect, useState } from 'react';
import { Phone, MessageCircle, Sun, Moon } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(
    typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
        scrolled ? 'bg-white/80 dark:bg-black/60 backdrop-blur border-b border-black/5 dark:border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/logo.svg"
            alt="HD Initial Pvt. Ltd."
            className="h-8 w-8 object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-gray-900 dark:text-white">HD Initial Pvt. Ltd.</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">Everything in Technology – Sales | Service | Rent</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#services" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-cyan-400">Services</a>
          <a href="#products" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-cyan-400">Products</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-cyan-400">About</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-cyan-400">Contact</a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+917558344886"
            className="hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <Phone size={16} /> Call Now
          </a>

          <a
            href="https://wa.me/917887558376"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>

          <button
            aria-label="Toggle theme"
            onClick={() => setDarkMode((v) => !v)}
            className="ml-2 inline-flex items-center justify-center rounded-full p-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-cyan-400"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}
