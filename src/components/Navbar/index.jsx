import { Link } from "react-router-dom";
import LogoMovie from "../../assets/logo.png";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState(false);

  return (
    <header className="h-20 flex items-center sticky top-0 left-0 right-0 z-50 bg-slate-800/20 backdrop-blur-xl">
      <div className="container flex justify-between items-center">
        <Link to={`/`}>
          <img
            src={LogoMovie}
            alt="Logo"
            className="w-12 h-12 object-cover rounded-xl"
          />
        </Link>
        <nav>
          <ul className="flex gap-10 items-center">
            <li>
              <Link to={`/about`} className="text-slate-200">
                Movies
              </Link>
            </li>
            <li>
              <Link to={`/tv-shows`} className="text-slate-200">
                TV Shows
              </Link>
            </li>
            <li className="flex">
              {search ? (
                <div className="flex items-center relative">
                  <input
                    type="text"
                    className="p-2 bg-slate-800 border border-slate-500 rounded-sm text-slate-200 focus:outline-none w-60"
                    placeholder="Search Movies..."
                  />
                  <button className="absolute right-1 p-2 bg-slate-800 text-slate-200">
                    <FiSearch size={24} />
                  </button>
                </div>
              ) : null}
              <button
                className={`text-slate-200 ${search ? "hidden" : ""}`}
                onClick={() => setSearch(true)}
              >
                <FiSearch size={24} />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
