import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header
      className={` w-full z-10 transition-all backdrop-filter backdrop-blur-sm duration-300"
        shadow-2xl`}
    >
      <nav
        aria-label="Global"
        className="flex items-center justify-between px-4 md:px-8 py-4"
      >
        {/* Logo */}
        <div className="flex">
          <img alt="" src="/logo2.png" className="h-10" />
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
        <PopoverGroup className="hidden md:flex space-x-10">
          <a
            href="#home"
            className="text-xs cursor-pointer font-semibold leading-6 text-white tracking-widest	"
          >
            HOME
          </a>
          <a
            href="#about"
            className="text-xs cursor-pointer font-semibold leading-6 text-white tracking-widest	"
          >
            ABOUT
          </a>
          <a
            href="#gallery"
            className="text-xs cursor-pointer font-semibold leading-6 text-white tracking-widest	"
          >
            GALLERY
          </a>
          <div>
            <PopoverGroup className="hidden md:flex">
              <Popover className="relative">
                <PopoverButton
                  onClick={() => setDesktopMenuOpen(true)}
                  className="text-xs flex items-center gap-1 cursor-pointer font-semibold leading-6 text-white tracking-widest	"
                >
                  PROJECTS
                  <IoIosArrowDown className="text-lg" />
                </PopoverButton>

                {desktopMenuOpen && (
                  <PopoverPanel
                    transition
                    className="absolute -left-8 top-full z-10 mt-3 w-[200px] overflow-hidden rounded-lg bg-white transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <div className="p-4 space-y-2">
                      <a
                        onClick={() => setDesktopMenuOpen(false)}
                        href="#boards"
                        className="group relative flex items-center gap-x-6 rounded-lg p-1 px-2 cursor-pointer text-xs leading-6 hover:bg-red-200"
                      >
                        <p>BOARDS</p>
                      </a>
                      <a
                        href="#illustrations"
                        onClick={() => setDesktopMenuOpen(false)}
                        className="group relative flex items-center gap-x-6 rounded-lg p-1 px-2 cursor-pointer text-xs leading-6 hover:bg-red-200"
                      >
                        <p>ILLUSTRATIONS</p>
                      </a>
                      <a
                        href="#drapings"
                        onClick={() => setDesktopMenuOpen(false)}
                        className="group relative flex items-center gap-x-6 rounded-lg p-1 px-2 cursor-pointer text-xs leading-6 hover:bg-red-200"
                      >
                        <p>DRAPINGS</p>
                      </a>
                    </div>
                  </PopoverPanel>
                )}
              </Popover>
            </PopoverGroup>
          </div>
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
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#230D01] px-4 py-5">
          <div className="flex items-center justify-between">
            <div>
              <img alt="" src="/logo2.png" className="h-10" />
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
                <div className="-mx-3 block rounded-lg px-3 py-2 text-center text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-black">
                  <Disclosure as="div">
                    <DisclosureButton className="group flex w-full gap-1 items-center justify-center rounded-lg text-base font-semibold leading-7 hover:bg-gray-50">
                      PROJECTS
                      <IoIosArrowDown className="text-md mt-1" />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      <a
                        href="#boards"
                        onClick={() => setMobileMenuOpen(false)}
                        className="group relative flex justify-center items-center gap-x-6 rounded-lg p-1 px-2 cursor-pointer text-xs leading-6 hover:bg-red-200"
                      >
                        <p>BOARDS</p>
                      </a>
                      <a
                        href="#illustrations"
                        onClick={() => setMobileMenuOpen(false)}
                        className="group relative flex justify-center items-center gap-x-6 rounded-lg p-1 px-2 cursor-pointer text-xs leading-6 hover:bg-red-200"
                      >
                        <p>ILLUSTRATIONS</p>
                      </a>
                      <div
                        onClick={() => setMobileMenuOpen(false)}
                        className="group relative flex justify-center items-center gap-x-6 rounded-lg p-1 px-2 cursor-pointer text-xs leading-6 hover:bg-red-200"
                      >
                        <p>DRAPINGS</p>
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
export default Header;
