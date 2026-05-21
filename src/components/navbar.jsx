
"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);


  const handleSignOut = async () => {
    await authClient.signOut();
  };

  // Theme Toggle
  const handleThemeToggle = () => {
    setDarkMode(!darkMode);

    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center py-3 max-w-7xl mx-auto w-full">

        {/* Logo */}
        <div className="flex gap-2 items-center">
          <h3 className="font-black text-2xl">Pet Shop</h3>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-5 text-md">
          <li>
            <Link href={"/"}>Home</Link>
          </li>

          <li>
            <Link href={"/all-pet"}>All Pet</Link>
          </li>

        </ul>

        {/* Right Side */}
        <div className="flex gap-4 items-center">

          {/* Theme Toggle  */}
          <button onClick={handleThemeToggle}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {!user && (
            <ul className="hidden md:flex items-center text-sm gap-5">
              <li className="font-black text-md">
                <Link href={"/signup"}>SignUp</Link>
              </li>
              <li className="font-black text-md">
                <Link href={"/signin"}>SignIn</Link>
              </li>
            </ul>
          )}

          {user && (
            <div className="hidden md:flex gap-3 items-center">
              <Avatar size="sm">
                <Avatar.Image
                  alt="John Doe"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>
                  {user?.name.charAt(0)}
                </Avatar.Fallback>
              </Avatar>

              <Button
                onClick={handleSignOut}
                size="sm"
                variant="danger"
              >
                SignOut
              </Button>
            </div>
          )}

          {/* Hamburger Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden py-4">
          <ul className="flex flex-col gap-4 text-md">

            <li>
              <Link href={"/"}>Home</Link>
            </li>

            <li>
              <Link href={"/all-pet"}>All Pet</Link>
            </li>

            <li>
              <Link href={"/my-request"}>My Request</Link>
            </li>

            <li>
              <Link href={"/add-pet"}>Add Pet</Link>
            </li>

            <li>
              <Link href={"/my-listing"}>My Listing</Link>
            </li>

            {!user && (
              <>
                <li>
                  <Link href={"/signup"}>SignUp</Link>
                </li>

                <li>
                  <Link href={"/signin"}>SignIn</Link>
                </li>
              </>
            )}

            {user && (
              <li>
                <Button
                  onClick={handleSignOut}
                  size="sm"
                  variant="danger"
                >
                  SignOut
                </Button>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;