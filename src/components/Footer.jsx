export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
        <div>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">HD Initial Pvt. Ltd.</h4>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Everything in Technology – Sales | Service | Rent</p>
          <div className="mt-4 text-sm text-gray-700 dark:text-gray-300">
            <div><a href="tel:+917558344886" className="hover:text-blue-600 dark:hover:text-cyan-400">+91-7558344886</a></div>
            <div><a href="https://wa.me/917887558376" target="_blank" rel="noreferrer" className="hover:text-green-600">+91-7887558376</a></div>
            <div><a href="mailto:hdinitialpvtltd@gmail.com" className="hover:text-blue-600 dark:hover:text-cyan-400">hdinitialpvtltd@gmail.com</a></div>
            <div><a href="https://initialwebtech.com" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-cyan-400">initialwebtech.com</a></div>
          </div>
        </div>
        <div>
          <h5 className="text-sm font-semibold text-gray-900 dark:text-white">Quick Links</h5>
          <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <li><a href="#home" className="hover:text-blue-600 dark:hover:text-cyan-400">Home</a></li>
            <li><a href="#services" className="hover:text-blue-600 dark:hover:text-cyan-400">Services</a></li>
            <li><a href="#products" className="hover:text-blue-600 dark:hover:text-cyan-400">Products</a></li>
            <li><a href="#about" className="hover:text-blue-600 dark:hover:text-cyan-400">About Us</a></li>
            <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-cyan-400">Contact</a></li>
            <li><a href="#blog" className="hover:text-blue-600 dark:hover:text-cyan-400">Blog</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-semibold text-gray-900 dark:text-white">Follow</h5>
          <div className="mt-3 flex gap-3 text-sm text-gray-600 dark:text-gray-300">
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-600 dark:hover:text-cyan-400">LinkedIn</a>
            <a href="#" aria-label="Instagram" className="hover:text-blue-600 dark:hover:text-cyan-400">Instagram</a>
            <a href="#" aria-label="Facebook" className="hover:text-blue-600 dark:hover:text-cyan-400">Facebook</a>
          </div>
        </div>
      </div>
      <div className="border-t border-black/5 py-6 text-center text-xs text-gray-500 dark:border-white/10 dark:text-gray-400">
        © {new Date().getFullYear()} HD Initial Pvt. Ltd. – All Rights Reserved
      </div>
    </footer>
  );
}
