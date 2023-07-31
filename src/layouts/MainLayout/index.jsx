import { Footer, Navbar } from "../../components";
import PropTypes from "prop-types";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-800 flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
