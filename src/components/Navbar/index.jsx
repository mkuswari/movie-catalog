import LogoMovie from "../../assets/logo.png";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <header className="h-20 flex items-center sticky top-0 left-0 right-0 z-50 bg-slate-800/20 backdrop-blur-xl">
      <div className="container flex justify-between items-center">
        <div>
          <img
            src={LogoMovie}
            alt="Logo"
            className="w-12 h-12 object-cover rounded-xl"
          />
        </div>
        <nav>
          <ul className="flex gap-10">
            <li>
              <a href="" className="text-slate-200">
                Movies
              </a>
            </li>
            <li>
              <a href="" className="text-slate-200">
                TV Shows
              </a>
            </li>
            <li>
              <a href="" className="text-slate-200">
                <FiSearch size={24} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
