import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Highlights from './components/Highlights.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased dark:bg-black dark:text-white">
      <Header />
      <main>
        <Hero />
        <Highlights />

        {/* About */}
        <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">About HD Initial Pvt. Ltd.</h2>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                We partner with organizations to design, implement and maintain reliable office networks. With over a decade of hands‑on experience and 1000+ clients served, our team delivers dependable IT across Mumbai and beyond—covering sales, service and rentals under one roof.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-black/5 p-5 text-center dark:border-white/10">
                  <div className="text-2xl font-extrabold">10+ yrs</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Industry Experience</div>
                </div>
                <div className="rounded-2xl border border-black/5 p-5 text-center dark:border-white/10">
                  <div className="text-2xl font-extrabold">1000+</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Clients</div>
                </div>
                <div className="rounded-2xl border border-black/5 p-5 text-center dark:border-white/10">
                  <div className="text-2xl font-extrabold">4</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Branches</div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div>
                  <h3 className="text-lg font-semibold">Mission</h3>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Keep workplaces productive with fast, reliable IT support and genuine solutions.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Vision</h3>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Be Mumbai’s most trusted partner for managed IT, repairs and rentals.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Values</h3>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Integrity, speed, transparency and long‑term relationships.</p>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-2xl border border-black/5 p-6 dark:border-white/10">
                <h3 className="text-lg font-semibold">Growth Timeline</h3>
                <ol className="mt-4 space-y-4 text-sm text-gray-700 dark:text-gray-300">
                  <li><span className="font-medium">2013–2015:</span> Founded, core repair and networking services</li>
                  <li><span className="font-medium">2016–2018:</span> Expanded to CCTV, biometrics and AMC offerings</li>
                  <li><span className="font-medium">2019–2021:</span> Rentals and refurbished devices; 1000+ clients milestone</li>
                  <li><span className="font-medium">2022–Now:</span> Multi-branch support across Virar, Andheri, Boisar, Kalyan</li>
                </ol>
                <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">Partners: HP • Dell • Lenovo • Hikvision</p>
              </div>
            </div>
          </div>
        </section>

        {/* Blog */}
        <section id="blog" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
          <h2 className="text-3xl font-bold">Blog & Resources</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">Guides and tips to help you choose, secure and maintain your IT.</p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ArticleCard title="Laptop Buying Guide: New vs Refurbished vs Rental" slug="#contact" excerpt="Compare costs, warranties and the best use‑cases for each option." />
            <ArticleCard title="Top 5 CCTV Installation Mistakes to Avoid" slug="#contact" excerpt="Cable management, placement and power—all the pitfalls to skip." />
            <ArticleCard title="Why Your Business Needs an AMC" slug="#contact" excerpt="Predictable costs, proactive maintenance and faster response." />
            <ArticleCard title="Data Backup Checklist for Small Businesses" slug="#contact" excerpt="Simple, reliable steps to protect your critical files." />
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/917887558376"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white shadow-lg shadow-green-600/30 transition hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        {/* simple WA glyph */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.52 3.48A11.94 11.94 0 0 0 12.006 0C5.375 0 .004 5.371.004 11.999c0 2.115.553 4.178 1.604 6.004L0 24l6.131-1.59a12 12 0 0 0 5.875 1.506h.005c6.63 0 11.999-5.37 11.999-11.999a11.94 11.94 0 0 0-3.49-8.436ZM12.011 22.002a9.96 9.96 0 0 1-5.074-1.393l-.364-.216-3.64.946.973-3.548-.237-.364a9.96 9.96 0 0 1-1.535-5.428c0-5.505 4.476-9.98 9.985-9.98 2.668 0 5.178 1.04 7.06 2.924a9.93 9.93 0 0 1 2.925 7.056c-.004 5.508-4.48 9.983-9.993 9.983Zm5.47-7.468c-.299-.149-1.767-.871-2.041-.971-.273-.099-.472-.148-.671.15-.198.298-.768.971-.94 1.169-.173.199-.347.224-.646.075-.298-.149-1.262-.465-2.405-1.484-.889-.792-1.49-1.77-1.664-2.068-.173-.298-.018-.46.13-.609.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.199.05-.373-.025-.522-.075-.149-.671-1.619-.92-2.218-.243-.586-.49-.507-.671-.516l-.571-.01c-.199 0-.522.075-.795.373s-1.048 1.025-1.048 2.499 1.073 2.897 1.223 3.096c.149.198 2.116 3.23 5.126 4.527.717.31 1.276.495 1.712.634.719.229 1.373.196 1.89.119.576-.086 1.767-.721 2.017-1.417.25-.696.25-1.293.175-1.417-.074-.124-.273-.198-.572-.348Z" />
        </svg>
      </a>
    </div>
  );
}

function ArticleCard({ title, excerpt, slug }) {
  return (
    <a href={slug} className="group rounded-2xl border border-black/5 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg backdrop-blur dark:border-white/10 dark:bg-white/5">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{excerpt}</p>
      <div className="mt-4 text-sm font-medium text-blue-600 opacity-0 transition group-hover:opacity-100 dark:text-cyan-400">Read more →</div>
    </a>
  );
}

export default App;
