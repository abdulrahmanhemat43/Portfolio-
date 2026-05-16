import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-xl border-b border-gray-800">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold text-xl">
          AbdulRahman
        </h1>

        <div className="hidden md:flex gap-6 text-gray-300">

          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-cyan-400"
            >
              {item.toUpperCase()}
            </Link>
          ))}

        </div>

      </div>
    </nav>
  );
};

export default Navbar;