
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
            <Link href={"/all-pets"}>All Pets</Link>
          </li>

          {user && (
            <>
              <li>
                <Link href={"/my-request"}>My Request</Link>
              </li>

              <li>
                <Link href={"/add-pets"}>Add Pets</Link>
              </li>

              <li>
                <Link href={"/my-listing"}>My Listing</Link>
              </li>
            </>
          )}
        </ul>

        {/* Right Side */}
        <div className="flex gap-4 items-center">

          {/* Theme Toggle  */}
          <button onClick={handleThemeToggle}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {!user && (
            <ul className="flex items-center text-sm gap-3">
              <li className="font-black text-md">
                <Link
                  href={"/signup"}
                  className="border px-3 py-1 rounded-lg"
                >
                  SignUp
                </Link>
              </li>

              <li className="font-black text-md">
                <Link
                  href={"/signin"}
                  className="bg-black text-white px-3 py-1 rounded-lg"
                >
                  SignIn
                </Link>
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
            className="block"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu
      <ul className="flex flex-col gap-4 text-md border-t pt-4 mt-4">

        <li>
          <Link href={"/"}>Home</Link>
        </li>

        <li>
          <Link href={"/all-pets"}>All Pets</Link>
        </li>

        {user && (
          <>
            <li>
              <Link href={"/my-request"}>My Request</Link>
            </li>

            <li>
              <Link href={"/add-pet"}>Add Pet</Link>
            </li>

            <li>
              <Link href={"/my-listing"}>My Listing</Link>
            </li>

            <Button
              onClick={handleSignOut}
              size="sm"
              variant="danger"
            >
              SignOut
            </Button>

          </>
        )}

        
      </ul> */}
      {menuOpen && (
        <ul className="flex flex-col gap-4 text-md border-t pt-4 mt-4">

          <li>
            <Link
              href={"/"}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href={"/all-pets"}
              onClick={() => setMenuOpen(false)}
            >
              All Pets
            </Link>
          </li>

          {user && (
            <>
              <li>
                <Link
                  href={"/my-request"}
                  onClick={() => setMenuOpen(false)}
                >
                  My Request
                </Link>
              </li>

              <li>
                <Link
                  href={"/add-pets"}
                  onClick={() => setMenuOpen(false)}
                >
                  Add Pet
                </Link>
              </li>

              <li>
                <Link
                  href={"/my-listing"}
                  onClick={() => setMenuOpen(false)}
                >
                  My Listing
                </Link>
              </li>

              <li>
                <Button
                  onClick={handleSignOut}
                  size="sm"
                  variant="danger"
                >
                  SignOut
                </Button>
              </li>
            </>
          )}
        </ul>
      )}

    </div>
  );
};

export default Navbar;