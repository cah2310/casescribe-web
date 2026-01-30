import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Products: [
    { label: "Document Intelligence", href: "/products/document-intelligence" },
    { label: "Case Strategy", href: "/products/case-strategy" },
    { label: "Ambient CRM", href: "/products/ambient-crm" },
    { label: "Pricing", href: "/pricing" },
  ],
  Solutions: [
    { label: "VA Disability", href: "/solutions/va-disability" },
    { label: "Social Security", href: "/solutions/social-security" },
    { label: "Workers' Compensation", href: "/solutions/workers-comp" },
  ],
  Resources: [
    { label: "Blog", href: "/blog" },
    { label: "BVA Decisions", href: "/resources/bva-decisions" },
    { label: "3.156(c) Analyzer", href: "/resources/tools/3156c-analyzer" },
    { label: "Changelog", href: "/changelog" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Security", href: "/security" },
    { label: "Status", href: "https://status.casescribe.ai", external: true },
    { label: "Trust Center", href: "https://app.vanta.com/c/casescribe.ai/trust-center/view", external: true },
    { label: "Contact", href: "/contact" },
    { label: "Book a Demo", href: "/demo" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-[#1B2036]">
      {/* Chevron wave pattern at top */}
      <div className="absolute inset-x-0 top-0 h-32 opacity-30 overflow-hidden">
        <Image
          src="/pattern-white.svg"
          alt=""
          width={862}
          height={523}
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <svg width="28" height="37" viewBox="0 0 76 101" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
                <g clipPath="url(#cs-footer-clip)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M70.2019 42.5405C63.4862 31.8203 51.5683 24.6916 37.9854 24.6916L37.9854 49.384C48.9511 49.384 58.6401 54.8501 64.4763 63.2063C58.6401 71.5624 48.9511 77.0286 37.9854 77.0286L37.9854 100.667C51.6066 100.667 63.5535 93.4984 70.2586 82.7276C70.2586 82.728 70.2586 82.7283 70.2586 82.7286C73.8812 76.9095 75.9738 70.0391 75.9738 62.68C75.9738 55.2825 73.8593 48.3788 70.2019 42.5405ZM70.2019 42.5405C70.2507 43.2668 70.2755 43.9997 70.2755 44.7384C70.2755 51.6061 68.1315 57.973 64.4763 63.2063C68.1315 68.4396 70.2755 74.8065 70.2755 81.6742C70.2755 82.0267 70.2698 82.3779 70.2586 82.7276C73.8812 76.9086 75.9738 70.0382 75.9738 62.679C75.9738 55.2815 73.8593 48.3778 70.2018 42.5394C70.2018 42.5398 70.2018 42.5401 70.2019 42.5405Z" fill="#15C6F6"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M70.2587 82.7276C70.2699 82.3779 70.2756 82.0266 70.2756 81.6741C70.2756 74.8065 68.1316 68.4396 64.4764 63.2063C68.1316 57.9729 70.2756 51.6061 70.2756 44.7384C70.2756 43.9997 70.2508 43.2668 70.202 42.5404C73.8594 48.3788 75.9738 55.2825 75.9738 62.6799C75.9738 62.9099 75.9718 63.1394 75.9677 63.3684C75.8414 70.4671 73.7679 77.0906 70.2587 82.7276Z" fill="#00A4D0"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.78374 58.127C12.4994 68.8471 24.4173 75.9759 38.0002 75.9759L38.0002 51.2834C27.0345 51.2834 17.3455 45.8173 11.5093 37.4611C17.3455 29.105 27.0345 23.6389 38.0002 23.6389L38.0003 -1.52588e-05C24.379 -1.64496e-05 12.4321 7.16902 5.72698 17.9398C5.72699 17.9395 5.72699 17.9391 5.72701 17.9388C2.10442 23.7579 0.0118486 30.6283 0.011848 37.9875C0.0118473 45.3849 2.12628 52.2886 5.78374 58.127ZM5.78374 58.127C5.73491 57.4006 5.71011 56.6677 5.71011 55.929C5.71011 49.0613 7.85409 42.6945 11.5093 37.4611C7.8541 32.2278 5.71011 25.8609 5.71011 18.9933C5.71011 18.6408 5.71576 18.2896 5.72698 17.9398C2.10441 23.7589 0.0118486 30.6292 0.011848 37.9884C0.0118473 45.3859 2.1263 52.2896 5.78381 58.128C5.78378 58.1277 5.78376 58.1273 5.78374 58.127Z" fill="white"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.71516 17.9408C5.70395 18.2906 5.6983 18.6418 5.6983 18.9943C5.6983 25.862 7.84228 32.2289 11.4974 37.4622C7.84228 42.6955 5.69829 49.0624 5.69829 55.9301C5.69829 56.6688 5.72309 57.4017 5.77192 58.128C2.11446 52.2896 3.35389e-05 45.386 3.41856e-05 37.9885C3.42107e-05 37.7011 0.00322714 37.4143 0.00957959 37.1284C0.16601 30.0946 2.23425 23.5324 5.71516 17.9408Z" fill="#EFEFEF"/>
                </g>
                <defs>
                  <clipPath id="cs-footer-clip">
                    <rect width="75.9738" height="100.668" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              <span className="text-lg font-bold text-white">
                CaseScribe
              </span>
            </Link>
            <p className="mt-3 text-sm text-slate-400 max-w-xs">
              AI that finds opportunities, not just facts. Built by disability
              law experts with 30+ years of experience.
            </p>
          </div>

          {/* Link Groups */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-slate-300">
                {category}
              </h3>
              <ul className="mt-3 space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-slate-400 hover:text-[#5CD4F4] transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-slate-400 hover:text-[#5CD4F4] transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-700/50 pt-8 sm:flex-row">
          <div className="flex items-center gap-3">
            <a
              href="https://app.vanta.com/c/casescribe.ai/trust-center/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/soc2-badge.png"
                alt="SOC 2 Type II Certified"
                width={24}
                height={24}
                className="h-6 w-auto opacity-60 hover:opacity-100 transition-opacity"
              />
            </a>
            <p className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} CaseScribe AI. All rights
              reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-slate-500 hover:text-[#5CD4F4] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-slate-500 hover:text-[#5CD4F4] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
