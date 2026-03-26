"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type HeaderProps = {
  locale: string;
};

export default function Header({ locale }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass =
    "text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-red-600";

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200 bg-white/95 shadow-md backdrop-blur-md"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href={`/${locale}`} className="flex items-center gap-3">
          <div className="rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-slate-200">
            <Image
              src="/images/brand/logo-zfk.png"
              alt="ZFK Immigration"
              width={64}
              height={64}
              className="h-14 w-auto object-contain"
              priority
            />
          </div>

          <div className={locale === "fa" ? "text-right" : "text-left"}>
            <div className="text-lg font-bold text-slate-900">
              ZFK Immigration
            </div>

            <p className="text-xs text-slate-500">
              {locale === "fa"
                ? "مشاوره رسمی مهاجرت کانادا"
                : locale === "fr"
                ? "Conseil réglementé en immigration canadienne"
                : "Licensed Canadian Immigration Consultancy"}
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          <a href={`/${locale}`} className={navLinkClass}>
            {locale === "fa" ? "خانه" : locale === "fr" ? "Accueil" : "Home"}
          </a>

          <a href={`/${locale}/about`} className={navLinkClass}>
            {locale === "fa"
              ? "درباره ما"
              : locale === "fr"
              ? "À propos"
              : "About"}
          </a>

          <a href={`/${locale}/services`} className={navLinkClass}>
            {locale === "fa"
              ? "خدمات"
              : locale === "fr"
              ? "Services"
              : "Services"}
          </a>

          <a href={`/${locale}/assessment`} className={navLinkClass}>
            {locale === "fa"
              ? "ارزیابی رایگان آنلاین"
              : locale === "fr"
              ? "Évaluation gratuite en ligne"
              : "Free Online Assessment"}
          </a>

          <a href={`/${locale}/contact`} className={navLinkClass}>
            {locale === "fa"
              ? "تماس"
              : locale === "fr"
              ? "Contact"
              : "Contact"}
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100"
          aria-label="Toggle mobile menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
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

        <div className="flex flex-col items-end gap-1">
          <span className="text-[11px] font-medium text-slate-500">
            {locale === "fa"
              ? "زبان سایت"
              : locale === "fr"
              ? "Langue du site"
              : "Site language"}
          </span>

          <div className="flex items-center gap-2">
            <Link
              href="/en"
              className={`rounded-md border px-3 py-2 text-xs font-semibold transition ${
                locale === "en"
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-300 text-slate-700 hover:bg-slate-50"
              }`}
            >
              English
            </Link>

            <Link
              href="/fa"
              className={`rounded-md border px-3 py-2 text-xs font-semibold transition ${
                locale === "fa"
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-300 text-slate-700 hover:bg-slate-50"
              }`}
            >
              فارسی
            </Link>

            <Link
              href="/fr"
              className={`rounded-md border px-3 py-2 text-xs font-semibold transition ${
                locale === "fr"
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-300 text-slate-700 hover:bg-slate-50"
              }`}
            >
              Français
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-200 shadow-lg">
            <nav className="px-6 py-4 space-y-1">
              <a
                href={`/${locale}`}
                className="block py-3 px-2 text-base font-medium text-slate-700 hover:text-red-600 hover:bg-slate-50 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {locale === "fa" ? "خانه" : locale === "fr" ? "Accueil" : "Home"}
              </a>

              <a
                href={`/${locale}/about`}
                className="block py-3 px-2 text-base font-medium text-slate-700 hover:text-red-600 hover:bg-slate-50 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {locale === "fa"
                  ? "درباره ما"
                  : locale === "fr"
                  ? "À propos"
                  : "About"}
              </a>

              <a
                href={`/${locale}/services`}
                className="block py-3 px-2 text-base font-medium text-slate-700 hover:text-red-600 hover:bg-slate-50 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {locale === "fa"
                  ? "خدمات"
                  : locale === "fr"
                  ? "Services"
                  : "Services"}
              </a>

              <a
                href={`/${locale}/assessment`}
                className="block py-3 px-2 text-base font-medium text-slate-700 hover:text-red-600 hover:bg-slate-50 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {locale === "fa"
                  ? "ارزیابی رایگان آنلاین"
                  : locale === "fr"
                  ? "Évaluation gratuite en ligne"
                  : "Free Online Assessment"}
              </a>

              <a
                href={`/${locale}/contact`}
                className="block py-3 px-2 text-base font-medium text-slate-700 hover:text-red-600 hover:bg-slate-50 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {locale === "fa"
                  ? "تماس"
                  : locale === "fr"
                  ? "Contact"
                  : "Contact"}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}