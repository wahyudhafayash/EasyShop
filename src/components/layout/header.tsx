"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { User } from "@prisma/client";
import { logoutUser } from "@/actions/auth";
import { useRouter } from "next/navigation";
import HeaderSearchBar from "./HeaderSearchBar";

const AnnouncementsBar = () => {
  return (
    <div className="w-full bg-black py-2">
      <div className="container mx-auto flex items-center justify-center px-8">
        <span className="text-center text-sm font-medium tracking-wide text-white">
          GRATIS ONGKIR UNTUK PEMBELIAN DIATAS Rp. 250K
        </span>
      </div>
    </div>
  );
};

type HeaderProps = {
  user: Omit<User, "PasswordHash"> | null;
  categorySelector: React.ReactNode;
};

const Header = ({ user, categorySelector }: HeaderProps) => {
  const router = useRouter();

  const [isOpen, setisOpen] = useState<boolean>(true);
  const [prevScrollY, setprevScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrolledUp = currentScrollY < prevScrollY;

      if (scrolledUp) {
        setisOpen(true);
      } else if (currentScrollY > 100) {
        setisOpen(false);
      }

      setprevScrollY(currentScrollY);
    };

    setprevScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <header className="w-full sticky top-0 z-50">
      <div
        className={`w-full transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <AnnouncementsBar />

        <div
          className="
        w-full flex justify-between items-center py-3 sm:py-4 bg-white/60 shadow-sm border-b border-gray-100 backdrop-blur-sm
        "
        >
          <div className="flex justify-between items-center container mx-auto px-6">
            <div className="flex flex-1 justify-start items-center gap-4 sm:gap-6">
              <button className="text-gray-700 hover:text-gray-900 md:hidden">
                <RxHamburgerMenu size={25} />
              </button>

              <nav className="hidden md:flex gap-4 lg:gap-6 text-sm font-medium">
                {categorySelector}
                <Link href="#">Sale</Link>
              </nav>
            </div>

            <div className="flex flex-1 justify-end items-center gap-2 sm:gap-4">
              <HeaderSearchBar />

              {user ? (
                <div className="flex items-center gap-2 sm:gap-4">
                  <span className="text-sm text-gray-700 hidden md:block">
                    {user.email}
                  </span>
                  <Link
                    href="#"
                    className="text-xs sm:text-sm text-gray-700 hover:text-gray-900"
                    onClick={async (e) => {
                      e.preventDefault();
                      await logoutUser();
                      router.refresh();
                    }}
                  >
                    Sign Out
                  </Link>
                </div>
              ) : (
                <React.Fragment>
                  <Link
                    href="/auth/sign-in"
                    className="text-xs sm:text-sm text-gray-700 hover:text-gray-900"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/auth/sign-up"
                    className="text-xs sm:text-sm text-gray-700 hover:text-gray-900"
                  >
                    Sign Up
                  </Link>
                </React.Fragment>
              )}

              <button className="text-gray-700 hover:text-gray-900 relative cursor-pointer">
                <FiShoppingCart size={25} />

                <span className="absolute -top-1 -right-1 bg-black text-white text-[11px] sm:text-sx w-3.5 sm:h-4 rounded-full flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
