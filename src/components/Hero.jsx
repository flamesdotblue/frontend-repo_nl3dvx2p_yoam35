import Spline from '@splinetool/react-spline';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90 dark:from-black/60 dark:via-black/40 dark:to-black/90" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="pointer-events-auto inline-flex rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-gray-700 ring-1 ring-gray-200 backdrop-blur dark:bg-black/40 dark:text-gray-200 dark:ring-white/10">
            Mumbai • Virar • Andheri • Boisar • Kalyan
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
            Complete IT Solutions for a Smarter Future
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Sales • Service • Rent – Reliable IT services in Mumbai & beyond. From AMC to CCTV, networking, repairs, and rentals, we keep your business running.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Get Free Quote <ChevronRight size={18} />
            </a>
            <a
              href="https://wa.me/917887558376"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-0.5 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-8 flex gap-6 text-sm text-gray-700 dark:text-gray-300">
            <span>10+ Years Experience</span>
            <span>1000+ Clients</span>
            <span>4 Branches</span>
          </div>
        </div>
      </div>
    </section>
  );
}
