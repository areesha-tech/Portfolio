import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="relative z-[100] flex items-center justify-between bg-base px-6 py-5 md:px-10">

      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-semibold tracking-wide text-white"
      >
        PORTFOLIO<span className="text-primary">.</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden items-center gap-8 font-medium md:flex">
        <Link
          to="/"
          className="text-sec transition hover:text-primary"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="text-sec transition hover:text-primary"
        >
          About
        </Link>

        <Link
          to='/projects'
          className="text-sec transition hover:text-primary"
        >
          Projects
        </Link>

        <Link
          to='/services'
          className="text-sec transition hover:text-primary"
        >
          Services
        </Link>

        <Link
          to='/contact'
          className="rounded-full bg-primary px-5 py-2.5 text-black font-medium transition hover:scale-105"
        >
          Contact
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={menu}
        aria-label="Toggle menu"
        className="
          flex h-11 w-11
          items-center justify-center
          rounded-full
          border border-white/10
          bg-sec/10
          text-white
          backdrop-blur-md
          transition
          hover:bg-white/20
          md:hidden
        "
      >
        {isOpen ? (
          <X size={23} strokeWidth={2} />
        ) : (
          <Menu size={23} strokeWidth={2} />
        )}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={menu}
              className="fixed inset-0 top-[81px] bg-black/50 backdrop-blur-sm md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
            
              className="
                fixed
                right-3
                top-[90px]
                z-50
                w-[calc(100%-24px)]
                max-w-[380px]
                overflow-hidden
                rounded-3xl
                border
                border-white/20
                bg-[#effbf3]/95
                p-4
                shadow-2xl
                backdrop-blur-xl
                md:hidden
              "
            >
              {/* Menu Header */}
              <div className="mb-3 flex items-center justify-between px-3 py-2">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[3px] text-gray-500">
                    Navigation
                  </p>
                  <h2 className="text-xl font-bold text-gray-900">
                    Explore
                  </h2>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                  <ArrowUpRight
                    size={18}
                    className="text-primary"
                  />
                </div>
              </div>

              {/* Links */}
              <ul className="space-y-2">

                <li>
                  <Link
                    to="/"
                    onClick={menu}
                    className="
                      group flex items-center justify-between
                      rounded-2xl
                      px-4 py-4
                      text-gray-800
                      transition-all
                      duration-200
                      hover:bg-primary
                      hover:text-white
                    "
                  >
                    <span className="font-semibold">Home</span>
                    <span className="text-gray-400 transition group-hover:translate-x-1 group-hover:text-white">
                      →
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/about"
                    onClick={menu}
                    className="
                      group flex items-center justify-between
                      rounded-2xl
                      px-4 py-4
                      text-gray-800
                      transition-all
                      duration-200
                      hover:bg-primary
                      hover:text-white
                    "
                  >
                    <span className="font-semibold">About</span>
                    <span className="text-gray-400 transition group-hover:translate-x-1 group-hover:text-white">
                      →
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    to='/projects'
                    onClick={menu}
                    className="
                      group flex items-center justify-between
                      rounded-2xl
                      px-4 py-4
                      text-gray-800
                      transition-all
                      duration-200
                      hover:bg-primary
                      hover:text-white
                    "
                  >
                    <span className="font-semibold">Projects</span>
                    <span className="text-gray-400 transition group-hover:translate-x-1 group-hover:text-white">
                      →
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    to='/services'
                    onClick={menu}
                    className="
                      group flex items-center justify-between
                      rounded-2xl
                      px-4 py-4
                      text-gray-800
                      transition-all
                      duration-200
                      hover:bg-primary
                      hover:text-white
                    "
                  >
                    <span className="font-semibold">Services</span>
                    <span className="text-gray-400 transition group-hover:translate-x-1 group-hover:text-white">
                      →
                    </span>
                  </Link>
                </li>

                <li className="pt-2">
                  <Link
                     to='/contact'
                    onClick={menu}
                    className="
                      flex items-center justify-center
                      rounded-2xl
                      bg-gray-900
                      px-4 py-4
                      font-semibold
                      text-white
                      transition
                      hover:bg-primary
                    "
                  >
                    Let's Talk
                  </Link>
                </li>

              </ul>

              {/* Bottom Text */}
              <div className="mt-4 border-t border-gray-200 px-3 pt-4">
                <p className="text-center text-xs text-gray-500">
                  Let's build something amazing together.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
