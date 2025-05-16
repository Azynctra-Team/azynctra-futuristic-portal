import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-transparent py-4">
      <div className="px-4">
        <a href="#home" className="flex items-center">
          <img
            src="/images/azynctra-logo.png"
            alt="Azynctra"
            className="h-10"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
