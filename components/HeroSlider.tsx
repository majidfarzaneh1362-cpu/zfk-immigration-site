"use client";

import { useEffect, useState } from "react";

type HeroSliderProps = {
  locale: string;
};

export default function HeroSlider({ locale }: HeroSliderProps) {
  const slides = [
    {
      image: "/images/hero/hero-slide-1.jpg",
      title:
        locale === "fa"
          ? "مشاوره شفاف برای مهاجرت به کانادا"
          : locale === "fr"
          ? "Des conseils clairs pour immigrer au Canada"
          : "Clear Guidance for Your Canadian Immigration Journey",
      subtitle:
        locale === "fa"
          ? "تحصیلی، کاری و اقامت دائم با رویکردی حرفه‌ای و واقع‌بینانه."
          : locale === "fr"
          ? "Études, travail et résidence permanente avec une approche professionnelle et réaliste."
          : "Study, work and permanent residence pathways with a professional and realistic approach.",
      primary:
        locale === "fa"
          ? "رزرو مشاوره"
          : locale === "fr"
          ? "Réserver une consultation"
          : "Book a Consultation",
      secondary:
        locale === "fa"
          ? "خدمات ما"
          : locale === "fr"
          ? "Nos services"
          : "Our Services",
      primaryHref: `/${locale}/contact`,
      secondaryHref: `/${locale}/services`,
    },
    {
      image: "/images/hero/hero-slide-2.jpg",
      title:
        locale === "fa"
          ? "ارزیابی حرفه‌ای پروفایل مهاجرتی"
          : locale === "fr"
          ? "Évaluation professionnelle de votre profil"
          : "Professional Immigration Profile Assessment",
      subtitle:
        locale === "fa"
          ? "ارزیابی اولیه برای یافتن مسیر مناسب‌تر بر اساس شرایط واقعی شما."
          : locale === "fr"
          ? "Une première évaluation pour identifier le parcours le plus adapté à votre situation."
          : "An initial assessment to identify the most suitable pathway based on your real profile.",
      primary:
        locale === "fa"
          ? "شروع ارزیابی"
          : locale === "fr"
          ? "Commencer l’évaluation"
          : "Start Assessment",
      secondary:
        locale === "fa"
          ? "تماس با ما"
          : locale === "fr"
          ? "Nous contacter"
          : "Contact Us",
      primaryHref: `/${locale}/assessment`,
      secondaryHref: `/${locale}/contact`,
    },
    {
      image: "/images/hero/hero-slide-3.jpg",
      title:
        locale === "fa"
          ? "همراهی حرفه‌ای در هر مرحله"
          : locale === "fr"
          ? "Un accompagnement professionnel à chaque étape"
          : "Professional Support Every Step of the Way",
      subtitle:
        locale === "fa"
          ? "از مشاوره اولیه تا انتخاب استراتژی مناسب پرونده."
          : locale === "fr"
          ? "De la première consultation au choix d’une stratégie adaptée à votre dossier."
          : "From the first consultation to selecting the right strategy for your case.",
      primary:
        locale === "fa"
          ? "پیام در واتس‌اپ"
          : locale === "fr"
          ? "Message sur WhatsApp"
          : "Message on WhatsApp",
      secondary:
        locale === "fa"
          ? "درباره ما"
          : locale === "fr"
          ? "À propos"
          : "About Us",
      primaryHref: `/${locale}/contact`,
      secondaryHref: `/${locale}/about`,
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url('${slides[current].image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <div className="max-w-2xl text-left text-white" dir="ltr">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-300">
            ZFK IMMIGRATION
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {slides[current].title}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
            {slides[current].subtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={slides[current].primaryHref}
              className="rounded-xl bg-red-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-red-700 text-center"
            >
              {slides[current].primary}
            </a>

            <a
              href={slides[current].secondaryHref}
              className="rounded-xl border border-white/30 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10 text-center"
            >
              {slides[current].secondary}
            </a>
          </div>

          <div className="mt-8 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2.5 rounded-full transition-all ${
                  current === index ? "w-8 bg-white" : "w-2.5 bg-white/50"
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}