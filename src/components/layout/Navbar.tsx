
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6",
        isScrolled
          ? "bg-sync-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-container flex items-center justify-between">
        <a href="/" className="flex items-center">
          <span className="text-xl font-bold text-sync-blue tracking-tight">
            Scale<span className="text-sync-lightBlue">Sync</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("services")}
            className="text-sm font-medium hover:text-sync-lightBlue transition-colors duration-200 subtle-focus-ring"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium hover:text-sync-lightBlue transition-colors duration-200 subtle-focus-ring"
          >
            Contact
          </button>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-sync-blue hover:bg-sync-blue/90 text-white rounded-lg transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-md"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 subtle-focus-ring"
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col items-end justify-center gap-1.5">
            <span
              className={cn(
                "h-0.5 bg-sync-blue transition-all duration-300",
                isMenuOpen ? "w-6 -rotate-45 translate-y-1" : "w-6"
              )}
            />
            <span
              className={cn(
                "h-0.5 bg-sync-blue transition-all duration-300",
                isMenuOpen ? "opacity-0" : "w-4"
              )}
            />
            <span
              className={cn(
                "h-0.5 bg-sync-blue transition-all duration-300",
                isMenuOpen ? "w-6 rotate-45 -translate-y-1" : "w-5"
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-sync-white/95 backdrop-blur-md shadow-md transition-all duration-300 overflow-hidden",
          isMenuOpen ? "max-h-60 py-4" : "max-h-0"
        )}
      >
        <div className="flex flex-col space-y-4 px-6">
          <button
            onClick={() => scrollToSection("services")}
            className="py-2 text-sm font-medium hover:text-sync-lightBlue transition-colors duration-200 subtle-focus-ring"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="py-2 text-sm font-medium hover:text-sync-lightBlue transition-colors duration-200 subtle-focus-ring"
          >
            Contact
          </button>
          <Button
            onClick={() => scrollToSection("contact")}
            className="w-full bg-sync-blue hover:bg-sync-blue/90 text-white rounded-lg transition-colors duration-200"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
