import {
  // Github,
  // Linkedin,
  Mail,
  Phone,
  ArrowUpRight,
  MapPin,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-neutral-950 px-5 py-12 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,rgba(34,211,238,0.08),transparent_35%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <a href="#home" className="text-2xl font-black text-white">
              AbdulRahman{" "}
              <span className="text-cyan-300">Himat</span>
            </a>

            <p className="mt-4 max-w-md text-sm leading-7 text-gray-400">
              Full Stack Developer and Information Systems graduate specialized
              in building modern web applications, desktop systems, database
              solutions, and practical business software.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="GitHub profile"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-gray-300 transition hover:-translate-y-1 hover:border-cyan-300/50 hover:text-cyan-300"
              >
                {/* <Github size={20} /> */}
              </a>

              <a
                href="#"
                aria-label="LinkedIn profile"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-gray-300 transition hover:-translate-y-1 hover:border-cyan-300/50 hover:text-cyan-300"
              >
                {/* <Linkedin size={20} /> */}
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase text-cyan-200">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-cyan-300"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase text-cyan-200">
              Contact
            </h3>

            <div className="mt-5 space-y-4 text-sm text-gray-400">
              <a
                href="mailto:Abdulrahmanhemat43@gmail.com"
                className="flex items-center gap-3 transition hover:text-cyan-300"
              >
                <Mail size={18} className="shrink-0 text-cyan-300" />
                <span className="break-all">Abdulrahmanhemat43@gmail.com</span>
              </a>

              <a
                href="tel:0765533810"
                className="flex items-center gap-3 transition hover:text-cyan-300"
              >
                <Phone size={18} className="shrink-0 text-cyan-300" />
                0765533810
              </a>

              <p className="flex items-center gap-3">
                <MapPin size={18} className="shrink-0 text-cyan-300" />
                Afghanistan
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} AbdulRahman Himat. All rights
            reserved.
          </p>

          <a href="#home" className="transition hover:text-cyan-300">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;