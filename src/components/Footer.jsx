import { FaGithub, FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0b0f1a] border-t border-gray-800 mt-16">

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* About */}
          <div>
            <h2 className="text-xl font-bold text-cyan-400">
              AbdulRahman Himat
            </h2>
            <p className="text-gray-400 mt-3 text-sm leading-6">
              Full Stack Developer & Information Systems graduate specialized in
              building modern web applications, desktop systems, and database solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-cyan-400">Home</a></li>
              <li><a href="#about" className="hover:text-cyan-400">About</a></li>
              <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
              <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
              <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Contact
            </h3>

            <div className="space-y-3 text-gray-400 text-sm">

              <p className="flex items-center gap-2">
                <FaEnvelope className="text-cyan-400" />
                Abdulrahmanhemat43@gmail.com
              </p>

              <p className="flex items-center gap-2">
                <FaPhone className="text-cyan-400" />
                0765533810
              </p>

              <div className="flex gap-4 mt-3 text-xl">
                <a href="#" className="hover:text-cyan-400"><FaGithub /></a>
                <a href="#" className="hover:text-cyan-400"><FaLinkedin /></a>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-800 pt-6">
          © {new Date().getFullYear()} AbdulRahman Himat. All rights reserved.
        </div>

      </div>

    </footer>
  );
};

export default Footer;