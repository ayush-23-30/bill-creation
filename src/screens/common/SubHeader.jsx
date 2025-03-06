import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Menu & Close icons
import Logo from "../../assets/Logo.png";

const navItems = [
  { name: "Home", link: "#" },
  { name: "Blog", link: "#" },
  { name: "About us", link: "#" },
  { name: "Contact", link: "#" },
];

export default function SubHeader(){
  const navigate = useNavigate();
  const [selected, setSelected] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-4 py-[6px] shadow-md rounded-b-xl bg-white relative">
      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <FiMenu
          className="text-2xl cursor-pointer"
          onClick={() => setIsMenuOpen(true)}
        />
      </div>

      {/* Logo */}
      <div className="flex items-center space-x-20">
        <div
          className="text-2xl font-bold cursor-pointer text-gray-900 hidden md:block"
          onClick={() => navigate("/dashboard")}
        >
          <img src={Logo} width={120} />
        </div>

        {/* Navigation Bar - Hidden on Mobile */}

        <div className="hidden md:flex px-1 py-1 rounded-full w-ful  items-center">
          <nav className="flex justify-around items-center space-x-4 md:space-x-6 lg:space-x-8 w-full">
            {navItems.map((item) => (
              <div
                key={item.name}
                className={`px-4 py-2 rounded-full transition-all text-sm cursor-pointer md:text-base lg:text-lg ${
                  selected === item.name
                    ? "bg-[#0070FA] rounded-full text-white shadow-lg py-2"
                    : "hover:bg-gray-100 rounded-full cursor-pointer text-gray-700"
                }`}
                onClick={() => setSelected(item.name)}
              >
                {item.name}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Get in Touch Buttons - Hidden on Mobile */}

      {/* Mobile Sidebar Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-blck bg-opacity-50 backdrop-blur-sm z-50"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-6 flex flex-col">
            {/* Close Button */}
            <div className="flex justify-between items-center">
              <img src={Logo} width={100} alt="Logo" />
              <FiX
                className="text-3xl cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              />
            </div>

            {/* Navigation Items */}
            <nav className="mt-6 flex flex-col space-y-4">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className={`px-4 py-2 rounded-full transition-all text-base cursor-pointer ${
                    selected === item.name
                      ? "bg-[#0070FA] text-white shadow-lg"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => {
                    setSelected(item.name);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
      <div className=" md:flex items-center space-x-4">

        <button className="w-40 h-12 bg-blue-600 text-md text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-700 cursor-pointer whitespace-nowrap  ">
          Get In Touch
        </button>
      </div>
    </header>
  );
}
