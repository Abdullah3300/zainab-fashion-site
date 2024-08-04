import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 517) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <header
      // className={` w-full z-10 transition-all duration-300 ${
      //   isScrolled ? "bg-[#333333] bg-opacity-90" : "bg-[#F2F2F2] bg-opacity-10"
      // } backdrop-filter backdrop-blur-lg shadow-md`}
      className={` w-full z-10 transition-all duration-300"
       backdrop-filter backdrop-blur-lg shadow-md border-b border-white`}
    >
      <nav
        aria-label="Global"
        className="flex items-center justify-between px-4 md:px-8 py-4"
      >
        {/* Logo */}
        <div className="flex">
          <img
            alt=""
            src="/logo.png"
            className="h-10"
            style={{ filter: "brightness(0) invert(1)" }} // convert image to white
          />
        </div>
        {/* =============== Hamburger Icon ================== */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <GiHamburgerMenu className="text-xl" />
          </button>
        </div>
        {/* =============== Desktop Icon ================== */}
        <PopoverGroup className="hidden md:flex space-x-14">
          <a
            href="#home"
            className="text-sm cursor-pointer font-semibold leading-6 text-white tracking-widest	"
          >
            HOME
          </a>
          <a
            href="#about"
            className="text-sm cursor-pointer font-semibold leading-6 text-white tracking-widest	"
          >
            ABOUT
          </a>
          <a
            href="#gallery"
            className="text-sm cursor-pointer font-semibold leading-6 text-white tracking-widest	"
          >
            GALLERY
          </a>
        </PopoverGroup>
        {/* Empty div */}
        <div className="hidden md:flex"></div>
      </nav>
      {/* =============== Mobile Menu ================== */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="md:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#290606] px-4 py-5">
          <div className="flex items-center justify-between">
            <div>
              <img
                alt=""
                src="/logo.png"
                className="h-9"
                style={{ filter: "brightness(0) invert(1)" }} // convert image to white
              />
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <RxCross2 className="text-2xl text-white" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#home"
                  className="-mx-3 block rounded-lg px-3 py-2 text-center text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-black"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  HOME
                </a>
                <a
                  href="#about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-center text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-black"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ABOUT
                </a>
                <a
                  href="#gallery"
                  className="-mx-3 block rounded-lg px-3 py-2 text-center text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-black"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  GALLERY
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
export default Header;
