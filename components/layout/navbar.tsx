"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { label: "Products", href: "/products" },
  { label: "Resources", href: "/resources" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Transparent on home hero, solid when scrolled or on other pages
  const isDarkNav = isHome && !scrolled;

  const navBg = isDarkNav
    ? "bg-transparent border-transparent"
    : "bg-white/95 backdrop-blur-xl border-slate-200/60 shadow-sm";

  const logoTextColor = isDarkNav ? "text-white" : "text-slate-900";

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${navBg}`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <svg width="28" height="37" viewBox="0 0 76 101" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
            <g clipPath="url(#cs-nav-clip)">
              <path fillRule="evenodd" clipRule="evenodd" d="M70.2019 42.5405C63.4862 31.8203 51.5683 24.6916 37.9854 24.6916L37.9854 49.384C48.9511 49.384 58.6401 54.8501 64.4763 63.2063C58.6401 71.5624 48.9511 77.0286 37.9854 77.0286L37.9854 100.667C51.6066 100.667 63.5535 93.4984 70.2586 82.7276C70.2586 82.728 70.2586 82.7283 70.2586 82.7286C73.8812 76.9095 75.9738 70.0391 75.9738 62.68C75.9738 55.2825 73.8593 48.3788 70.2019 42.5405ZM70.2019 42.5405C70.2507 43.2668 70.2755 43.9997 70.2755 44.7384C70.2755 51.6061 68.1315 57.973 64.4763 63.2063C68.1315 68.4396 70.2755 74.8065 70.2755 81.6742C70.2755 82.0267 70.2698 82.3779 70.2586 82.7276C73.8812 76.9086 75.9738 70.0382 75.9738 62.679C75.9738 55.2815 73.8593 48.3778 70.2018 42.5394C70.2018 42.5398 70.2018 42.5401 70.2019 42.5405Z" fill="#15C6F6"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M70.2587 82.7276C70.2699 82.3779 70.2756 82.0266 70.2756 81.6741C70.2756 74.8065 68.1316 68.4396 64.4764 63.2063C68.1316 57.9729 70.2756 51.6061 70.2756 44.7384C70.2756 43.9997 70.2508 43.2668 70.202 42.5404C73.8594 48.3788 75.9738 55.2825 75.9738 62.6799C75.9738 62.9099 75.9718 63.1394 75.9677 63.3684C75.8414 70.4671 73.7679 77.0906 70.2587 82.7276Z" fill="#00A4D0"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M5.78374 58.127C12.4994 68.8471 24.4173 75.9759 38.0002 75.9759L38.0002 51.2834C27.0345 51.2834 17.3455 45.8173 11.5093 37.4611C17.3455 29.105 27.0345 23.6389 38.0002 23.6389L38.0003 -1.52588e-05C24.379 -1.64496e-05 12.4321 7.16902 5.72698 17.9398C5.72699 17.9395 5.72699 17.9391 5.72701 17.9388C2.10442 23.7579 0.0118486 30.6283 0.011848 37.9875C0.0118473 45.3849 2.12628 52.2886 5.78374 58.127ZM5.78374 58.127C5.73491 57.4006 5.71011 56.6677 5.71011 55.929C5.71011 49.0613 7.85409 42.6945 11.5093 37.4611C7.8541 32.2278 5.71011 25.8609 5.71011 18.9933C5.71011 18.6408 5.71576 18.2896 5.72698 17.9398C2.10441 23.7589 0.0118486 30.6292 0.011848 37.9884C0.0118473 45.3859 2.1263 52.2896 5.78381 58.128C5.78378 58.1277 5.78376 58.1273 5.78374 58.127Z" fill={isDarkNav ? "white" : "#1B2036"}/>
              <path fillRule="evenodd" clipRule="evenodd" d="M5.71516 17.9408C5.70395 18.2906 5.6983 18.6418 5.6983 18.9943C5.6983 25.862 7.84228 32.2289 11.4974 37.4622C7.84228 42.6955 5.69829 49.0624 5.69829 55.9301C5.69829 56.6688 5.72309 57.4017 5.77192 58.128C2.11446 52.2896 3.35389e-05 45.386 3.41856e-05 37.9885C3.42107e-05 37.7011 0.00322714 37.4143 0.00957959 37.1284C0.16601 30.0946 2.23425 23.5324 5.71516 17.9408Z" fill={isDarkNav ? "#EFEFEF" : "#d1d5db"}/>
            </g>
            <defs>
              <clipPath id="cs-nav-clip">
                <rect width="75.9738" height="100.668" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <span className={`text-lg font-bold transition-colors ${logoTextColor}`}>
            CaseScribe
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[#2C5DFF]"
                    : isDarkNav
                      ? "text-white/90 hover:text-white"
                      : "text-slate-700 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button
            variant="ghost"
            className={
              isHome && !scrolled
                ? "text-slate-300 hover:text-white hover:bg-white/10"
                : ""
            }
            asChild
          >
            <Link href="/login">Log in</Link>
          </Button>
          <Button
            className={
              isHome && !scrolled
                ? "shadow-lg shadow-[#2C5DFF]/25"
                : ""
            }
            asChild
          >
            <Link href="/demo">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={
                isHome && !scrolled ? "text-white hover:bg-white/10" : ""
              }
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 overflow-y-auto">
            <SheetTitle className="text-lg font-bold text-slate-900">
              Menu
            </SheetTitle>
            <div className="mt-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-base font-medium text-slate-900 hover:text-[#2C5DFF]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-8 space-y-3">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/login">Log in</Link>
              </Button>
              <Button className="w-full" asChild>
                <Link href="/demo">Get Started</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
