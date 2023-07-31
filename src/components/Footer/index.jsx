import { FiFacebook, FiGithub, FiGlobe, FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="pt-16 pb-4 text-slate-300">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div>
            <p>
              &copy; {new Date().getFullYear()} Movie Catalog. Made with ❤️ by
              Muhammad Kuswari. All Right Reserved.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="w-8 h-8 flex justify-center items-center border rounded-full">
              <FiInstagram size={18} />
            </div>
            <div className="w-8 h-8 flex justify-center items-center border rounded-full">
              <FiFacebook size={18} />
            </div>
            <div className="w-8 h-8 flex justify-center items-center border rounded-full">
              <FiGlobe size={18} />
            </div>
            <div className="w-8 h-8 flex justify-center items-center border rounded-full">
              <FiGithub size={18} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
