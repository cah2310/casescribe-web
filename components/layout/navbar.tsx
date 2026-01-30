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
import {
  Menu,
  ChevronDown,
  FileText,
  Brain,
  Headphones,
  Scale,
  Shield,
  Briefcase,
  BookOpen,
  Gavel,
  Wrench,
  Newspaper,
  Users,
  Lock,
  Phone,
  ArrowRight,
} from "lucide-react";

const products = [
  {
    title: "Document Intelligence",
    description: "OCR, classify, and extract from 150+ document types",
    href: "/products/document-intelligence",
    icon: FileText,
  },
  {
    title: "Case Strategy",
    description: "AI-powered scenario planning and filing recommendations",
    href: "/products/case-strategy",
    icon: Brain,
  },
  {
    title: "Ambient CRM",
    description: "Coming soon — intelligent case management",
    href: "/products/ambient-crm",
    icon: Headphones,
  },
];

const solutions = [
  {
    title: "VA Disability",
    description: "C-file processing, BVA decisions, condition detection",
    href: "/solutions/va-disability",
    icon: Scale,
  },
  {
    title: "Social Security",
    description: "SSA workflow and medical records analysis",
    href: "/solutions/social-security",
    icon: Shield,
  },
  {
    title: "Workers' Compensation",
    description: "WC-specific document handling and analysis",
    href: "/solutions/workers-comp",
    icon: Briefcase,
  },
];

const resources = [
  {
    title: "Blog",
    description: "Product updates, legal tech insights, and tutorials",
    href: "/blog",
    icon: BookOpen,
  },
  {
    title: "BVA Decisions",
    description: "Search and explore Board of Veterans' Appeals decisions",
    href: "/resources/bva-decisions",
    icon: Gavel,
  },
  {
    title: "3.156(c) Analyzer",
    description: "AI-powered service record analysis tool",
    href: "/resources/tools/3156c-analyzer",
    icon: Wrench,
  },
  {
    title: "Changelog",
    description: "Latest product updates and releases",
    href: "/changelog",
    icon: Newspaper,
  },
];

const company = [
  {
    title: "About",
    description: "Our story, team, and mission",
    href: "/about",
    icon: Users,
  },
  {
    title: "Security",
    description: "SOC 2 Type II, data handling, and compliance",
    href: "/security",
    icon: Lock,
  },
  {
    title: "Contact",
    description: "Get in touch with our team",
    href: "/contact",
    icon: Phone,
  },
];

type DropdownItem = {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

function DesktopDropdown({
  label,
  items,
  open,
  onToggle,
  featured,
  dark,
}: {
  label: string;
  items: DropdownItem[];
  open: boolean;
  onToggle: () => void;
  featured?: { title: string; description: string; href: string };
  dark?: boolean;
}) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className={`flex items-center gap-1 text-sm font-medium transition-colors ${
          dark
            ? "text-white/90 hover:text-white"
            : "text-slate-700 hover:text-slate-900"
        }`}
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={onToggle} />
          <div className="absolute left-1/2 top-full z-50 mt-3 w-[420px] -translate-x-1/2 overflow-hidden rounded-2xl border bg-white shadow-xl">
            <div className="p-2">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onToggle}
                  className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-slate-50"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#EEF2FF]">
                    <item.icon className="h-4 w-4 text-[#2C5DFF]" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-900">
                      {item.title}
                    </div>
                    <div className="text-xs text-slate-500">
                      {item.description}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {featured && (
              <div className="border-t bg-slate-50 p-3">
                <Link
                  href={featured.href}
                  onClick={onToggle}
                  className="group flex items-center justify-between rounded-lg p-2 transition-colors hover:bg-white"
                >
                  <div>
                    <p className="text-xs font-semibold text-[#2C5DFF]">
                      Featured
                    </p>
                    <p className="text-sm font-medium text-slate-900">
                      {featured.title}
                    </p>
                    <p className="text-xs text-slate-500">
                      {featured.description}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

function MobileNavSection({
  label,
  items,
  onClose,
}: {
  label: string;
  items: DropdownItem[];
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between py-2 text-base font-medium text-slate-900"
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
        />
      </button>
      {expanded && (
        <div className="ml-2 space-y-1 pb-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-50"
            >
              <item.icon className="h-4 w-4 text-[#2C5DFF]" />
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
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

  const handleToggle = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  // Transparent on home hero, solid when scrolled or on other pages
  const isDarkNav = isHome && !scrolled;

  const navBg = isDarkNav
    ? "bg-transparent border-transparent"
    : "bg-white/80 backdrop-blur-xl border-slate-200/60 shadow-sm";

  const textColor = isDarkNav ? "text-white/90" : "text-slate-700";

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
          <DesktopDropdown
            label="Products"
            items={products}
            open={openDropdown === "products"}
            onToggle={() => handleToggle("products")}
            dark={isDarkNav}
            featured={{
              title: "See CaseScribe in Action",
              description: "Book a live demo with our team",
              href: "/demo",
            }}
          />
          <DesktopDropdown
            label="Solutions"
            items={solutions}
            open={openDropdown === "solutions"}
            onToggle={() => handleToggle("solutions")}
            dark={isDarkNav}
          />
          <DesktopDropdown
            label="Resources"
            items={resources}
            open={openDropdown === "resources"}
            onToggle={() => handleToggle("resources")}
            dark={isDarkNav}
            featured={{
              title: "BVA Decision Search",
              description: "Search thousands of Board decisions",
              href: "/resources/bva-decisions",
            }}
          />
          <Link
            href="/pricing"
            className={`text-sm font-medium transition-colors ${
              pathname === "/pricing"
                ? "text-[#2C5DFF]"
                : isDarkNav
                  ? "text-white/90 hover:text-white"
                  : "text-slate-700 hover:text-slate-900"
            }`}
          >
            Pricing
          </Link>
          <DesktopDropdown
            label="About"
            items={company}
            open={openDropdown === "about"}
            onToggle={() => handleToggle("about")}
            dark={isDarkNav}
          />
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
              <MobileNavSection
                label="Products"
                items={products}
                onClose={() => setMobileOpen(false)}
              />
              <MobileNavSection
                label="Solutions"
                items={solutions}
                onClose={() => setMobileOpen(false)}
              />
              <MobileNavSection
                label="Resources"
                items={resources}
                onClose={() => setMobileOpen(false)}
              />
              <Link
                href="/pricing"
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-base font-medium text-slate-900"
              >
                Pricing
              </Link>
              <MobileNavSection
                label="About"
                items={company}
                onClose={() => setMobileOpen(false)}
              />
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
