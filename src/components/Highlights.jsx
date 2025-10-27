import { Laptop, Camera, Server, Wrench, RefreshCw, Database, Shield, PhoneCall, Projector, Apple, Monitor, Printer, Star } from 'lucide-react';

const services = [
  { title: 'AMC Contracts', icon: Shield, desc: 'Comprehensive and Non-Comprehensive AMC for hassle-free IT uptime.' },
  { title: 'CCTV & Biometric', icon: Camera, desc: 'CP Plus, Hikvision, access control, and attendance systems.' },
  { title: 'Networking & Integration', icon: Server, desc: 'LAN/WAN setup, routers, switches, cabling and structured networks.' },
  { title: 'On-site Troubleshooting', icon: Wrench, desc: 'Quick diagnosis and resolution at your premises.' },
  { title: 'Preventive Maintenance', icon: RefreshCw, desc: 'Scheduled health checks to prevent downtime.' },
  { title: 'Data Backup & Recovery', icon: Database, desc: 'Secure backup and recovery for HDDs, SSDs, USB, mobile.' },
  { title: 'Microsoft & Antivirus', icon: Shield, desc: 'Genuine licensing, OS, Office, and endpoint protection.' },
  { title: 'EPABX / Intercom', icon: PhoneCall, desc: 'Installation and support for office communication systems.' },
  { title: 'Projectors & Smart Boards', icon: Projector, desc: 'Sales, installation and calibration for offices and schools.' },
  { title: 'Apple & Mac Support', icon: Apple, desc: 'Specialized support for Mac, iMac, MacBook devices.' },
  { title: 'Refurbished & Rentals', icon: Laptop, desc: 'Quality-checked laptops, desktops and printers on rent or sale.' },
];

const products = [
  { title: 'New Laptops', icon: Laptop, desc: 'Latest business and consumer models.' },
  { title: 'Refurbished Desktops', icon: Monitor, desc: 'Certified, budget-friendly systems.' },
  { title: 'Printers', icon: Printer, desc: 'Laser/Inkjet, MFP, network printers.' },
  { title: 'Projectors', icon: Projector, desc: 'High brightness projectors for office/education.' },
  { title: 'Short-term Rentals', icon: Laptop, desc: 'Laptops, desktops and printers for events and projects.' },
];

const testimonials = [
  {
    quote: 'Prompt service and transparent pricing. Our office network has never been more stable.',
    name: 'Rahul S.',
    company: 'Retail Chain, Andheri',
  },
  {
    quote: 'They handled our CCTV installation end-to-end. Clean work and quick turnaround.',
    name: 'Neha P.',
    company: 'Clinic, Virar',
  },
  {
    quote: 'We rely on their AMC. Downtime dropped drastically and response is fast.',
    name: 'Amit K.',
    company: 'Logistics, Boisar',
  },
  {
    quote: 'Took rentals for a training batch—excellent devices and support.',
    name: 'Pooja M.',
    company: 'EdTech, Kalyan',
  },
];

export default function Highlights() {
  return (
    <div className="relative z-10 -mt-16 bg-gradient-to-b from-white to-white dark:from-black dark:to-black">
      {/* Trust badges / stats */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24">
        <div className="grid grid-cols-1 gap-4 rounded-2xl border border-black/5 bg-white/60 p-6 backdrop-blur dark:border-white/10 dark:bg-white/5 sm:grid-cols-3">
          <Stat label="Years Experience" value="10+" />
          <Stat label="Clients Served" value="1000+" />
          <Stat label="Branches" value="4" />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <header className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Services</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">End-to-end IT support: install, secure, maintain and scale.</p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, desc, icon: Icon }) => (
            <a key={title} href="#contact" className="group rounded-2xl border border-black/5 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg backdrop-blur dark:border-white/10 dark:bg-white/5">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-blue-600/10 p-3 text-blue-600 dark:bg-cyan-500/10 dark:text-cyan-400">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{desc}</p>
                </div>
              </div>
              <div className="mt-4 text-sm font-medium text-blue-600 opacity-0 transition group-hover:opacity-100 dark:text-cyan-400">Request a Quote →</div>
            </a>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <header className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Products</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">New, refurbished and rental devices for every need.</p>
        </header>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map(({ title, desc, icon: Icon }) => (
            <a key={title} href="#contact" className="rounded-2xl border border-black/5 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg backdrop-blur dark:border-white/10 dark:bg-white/5">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-orange-500/10 p-3 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{desc}</p>
                </div>
              </div>
              <div className="mt-4 text-sm font-medium text-orange-600 opacity-0 transition group-hover:opacity-100 dark:text-orange-400">Request a Quote →</div>
            </a>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <USP title="Fast Support" desc="Same/next-day visits across Mumbai with real-time tracking." />
          <USP title="Genuine Parts" desc="Trusted brands—HP, Dell, Lenovo, Hikvision and more." />
          <USP title="Transparent Pricing" desc="Clear estimates and no hidden charges." />
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <header className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What Clients Say</h2>
        </header>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-2xl border border-black/5 bg-white/70 p-6 backdrop-blur dark:border-white/10 dark:bg-white/5">
              <div className="mb-3 flex items-center gap-1 text-yellow-500">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">“{t.quote}”</p>
              <div className="mt-4 text-sm font-semibold text-gray-900 dark:text-white">{t.name}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{t.company}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Get a Free Quote</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Tell us what you need—sales, service, rentals or AMC. We’ll respond quickly.</p>
            <form
              className="mt-6 space-y-4"
              action="mailto:hdinitialpvtltd@gmail.com"
              method="post"
              encType="text/plain"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input required name="Name" placeholder="Name" className="w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400/30 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder-gray-400" />
                <input required type="email" name="Email" placeholder="Email" className="w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400/30 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder-gray-400" />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input required name="Phone" placeholder="Phone" className="w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400/30 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder-gray-400" />
                <select name="Service Needed" className="w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400/30 dark:border-white/10 dark:bg-white/5 dark:text-white">
                  {services.map(({ title }) => (
                    <option key={title} value={title}>{title}</option>
                  ))}
                </select>
              </div>
              <textarea name="Message" rows="4" placeholder="Message" className="w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400/30 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder-gray-400" />
              <button type="submit" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
                Request Quote
              </button>
            </form>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
              <a href="tel:+917558344886" className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-2 text-blue-700 ring-1 ring-blue-200 dark:bg-white/5 dark:text-cyan-300 dark:ring-white/10">
                <PhoneCall size={16} /> +91-7558344886
              </a>
              <a href="https://wa.me/917887558376" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-2 text-green-700 ring-1 ring-green-200 dark:bg-white/5 dark:text-green-300 dark:ring-white/10">
                <PhoneCall size={16} /> +91-7887558376
              </a>
              <a href="mailto:hdinitialpvtltd@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-gray-50 px-3 py-2 text-gray-700 ring-1 ring-gray-200 dark:bg-white/5 dark:text-gray-300 dark:ring-white/10">
                hdinitialpvtltd@gmail.com
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <iframe
              title="Virar East Office"
              className="h-72 w-full rounded-2xl border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Virar%20East%2C%20Mumbai&output=embed"
            />

            <div className="rounded-2xl border border-black/5 p-6 dark:border-white/10">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our Branches</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>
                  <span className="font-medium">Virar East (Main):</span> <a className="text-blue-600 dark:text-cyan-400" href="tel:+917558344886">+91-7558344886</a>
                </li>
                <li>
                  <span className="font-medium">Andheri West:</span> <a className="text-blue-600 dark:text-cyan-400" href="tel:+917558344886">+91-7558344886</a>
                </li>
                <li>
                  <span className="font-medium">Boisar West:</span> <a className="text-blue-600 dark:text-cyan-400" href="tel:+917558344886">+91-7558344886</a>
                </li>
                <li>
                  <span className="font-medium">Kalyan East:</span> <a className="text-blue-600 dark:text-cyan-400" href="tel:+917558344886">+91-7558344886</a>
                </li>
              </ul>
              <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">Partners: HP • Dell • Lenovo • Hikvision</p>
            </div>
          </div>
        </div>

        {/* CTA banner */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white shadow-lg">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-xl font-semibold">Need urgent IT help?</h3>
              <p className="text-sm opacity-90">Call +91-7558344886 or WhatsApp +91-7887558376</p>
            </div>
            <div className="flex gap-3">
              <a href="tel:+917558344886" className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold hover:bg-white/25">Call Now</a>
              <a href="https://wa.me/917887558376" target="_blank" rel="noreferrer" className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold hover:bg-white/25">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="flex items-center justify-center gap-3 rounded-xl bg-white/70 p-4 ring-1 ring-black/5 backdrop-blur dark:bg-white/5 dark:ring-white/10">
      <div className="text-3xl font-extrabold text-gray-900 dark:text-white">{value}</div>
      <div className="text-sm text-gray-600 dark:text-gray-300">{label}</div>
    </div>
  );
}

function USP({ title, desc }) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white/70 p-6 backdrop-blur dark:border-white/10 dark:bg-white/5">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{desc}</p>
    </div>
  );
}
