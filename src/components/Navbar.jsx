import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Services", to: "services" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" },
];

const menuVariants = {
  hidden: {
    opacity: 0,
    y: -12,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.22,
      ease: "easeOut",
      staggerChildren: 0.045,
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.98,
    transition: { duration: 0.18, ease: "easeIn" },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-neutral-950/80 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link
          to="home"
          smooth
          duration={500}
          offset={-80}
          onClick={closeMenu}
          className="cursor-pointer text-lg font-black tracking-wide sm:text-xl"
        >
          AbdulRahman <span className="text-cyan-300">Himat</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              spy
              duration={500}
              offset={-80}
              activeClass="!bg-cyan-300/10 !text-cyan-300"
              className="cursor-pointer rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-wide text-gray-300 transition hover:bg-white/[0.05] hover:text-cyan-300 lg:text-sm"
            >
              {link.label}
            </Link>
          ))}

          <a
            href="/AbdulRahman-Himat-CV.pdf"
            download
            className="ml-3 inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-bold text-neutral-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
          >
            <Download size={16} />
            CV
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-cyan-300 transition active:scale-95 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close mobile menu overlay"
              onClick={closeMenu}
              className="fixed inset-0 top-16 -z-10 bg-black/45 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mx-4 mb-4 overflow-hidden rounded-lg border border-white/10 bg-neutral-950/95 shadow-2xl shadow-black/40 backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col p-2">
                {navLinks.map((link) => (
                  <motion.div key={link.to} variants={linkVariants}>
                    <Link
                      to={link.to}
                      smooth
                      spy
                      duration={500}
                      offset={-72}
                      onClick={closeMenu}
                      activeClass="!bg-cyan-300/10 !text-cyan-300"
                      className="block cursor-pointer rounded-lg px-4 py-3.5 text-sm font-bold uppercase tracking-wide text-gray-300 transition active:scale-[0.99] hover:bg-white/[0.05] hover:text-cyan-300"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.a
                  variants={linkVariants}
                  href="/AbdulRahman-Himat-CV.pdf"
                  download
                  onClick={closeMenu}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-4 py-3.5 text-sm font-bold text-neutral-950 transition active:scale-[0.99] hover:bg-cyan-300"
                >
                  <Download size={17} />
                  Download CV
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;