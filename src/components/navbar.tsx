"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

const navItems: NavItem[] = [
  { label: "HOME", href: "/", hasDropdown: false },
  { label: "ABOUT", href: "/about", hasDropdown: true },
  { label: "COURSES", href: "/courses", hasDropdown: false },
  {
    label: "WHAT WE DO",
    href: "/services",
    hasDropdown: true,
    dropdownItems: [
      { label: "Corporate Training", href: "/corporate" },
      { label: "SAP ERP Integration", href: "/services/sap" },
      { label: "MS Power Platform", href: "/powerbi" },
      { label: "Case Study", href: "/case-study" },
    ]
  },
  { label: "BLOGS", href: "/blogs", hasDropdown: false },
  { label: "CONTACT", href: "/contact", hasDropdown: false },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Use both window.scrollY and document.documentElement.scrollTop for Lenis compatibility
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollY > 50);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      // Ensure navbar is visible immediately, then animate
      navRef.current.style.opacity = "1";

      gsap.fromTo(
        navRef.current,
        { y: -20 },
        {
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        }
      );
    }
  }, []);

  return (
    <nav
      ref={navRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"
      )}
      style={{ opacity: 1, visibility: "visible" }}
    >
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[85px]">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/images/home/logo.png"
              alt="Rows & Columns"
              width={150}
              height={40}
              className="h-8 lg:h-10"
              style={{ width: "auto" }}
              priority
            />
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasDropdown && item.dropdownItems && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className={cn(
                    "relative px-3 py-2.5 lg:px-4 lg:py-3 font-medium transition-all duration-300 flex items-center justify-center whitespace-nowrap rounded-full",
                    isActive(item.href)
                      ? "text-white"
                      : "text-white/90 hover:text-white"
                  )}
                  style={{
                    boxSizing: "border-box",
                    background: isActive(item.href) ? "#22c55e" : "#2B2B2B",
                    border: "1px solid rgba(255, 255, 255, 0.16)",
                    fontSize: "14px",
                  }}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <svg
                      className={cn(
                        "inline-block ml-1 w-3 h-3 transition-transform duration-200",
                        activeDropdown === item.label && "rotate-180"
                      )}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </a>
                {/* Dropdown Menu */}
                {item.hasDropdown && item.dropdownItems && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 min-w-[200px]">
                    <div className="bg-[#1a1a1a] border border-white/10 rounded-xl overflow-hidden shadow-xl">
                      {item.dropdownItems.map((dropdownItem) => (
                        <a
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          className={cn(
                            "block px-4 py-3 text-sm font-medium transition-colors",
                            pathname === dropdownItem.href
                              ? "text-white bg-[#22c55e]"
                              : "text-white/80 hover:text-white hover:bg-white/10"
                          )}
                        >
                          {dropdownItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="flex items-center gap-2 lg:gap-3 bg-white/10 hover:bg-white/15 border border-white/20 rounded-full px-4 py-2 lg:px-5 lg:py-2.5 transition-all">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-white text-sm font-medium">Book a 30 min call</div>
                <div className="flex items-center gap-1.5 text-xs text-white/60">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse"></span>
                  Available now
                </div>
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-white/10 mt-4">
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.label}>
                <a
                  href={item.href}
                  className="block px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
                {/* Mobile Dropdown Items */}
                {item.dropdownItems && item.dropdownItems.map((dropdownItem) => (
                  <a
                    key={dropdownItem.href}
                    href={dropdownItem.href}
                    className="block px-4 py-3 pl-8 text-sm font-medium text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  >
                    {dropdownItem.label}
                  </a>
                ))}
              </div>
            ))}
            <button className="w-full mt-4 flex items-center justify-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-3">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-white text-sm font-medium">Book a call</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
