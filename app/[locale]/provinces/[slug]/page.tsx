import { notFound } from "next/navigation";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import { getProvinceBySlug, provinces } from "../../../../data/provinces";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return provinces.map((province) => ({ slug: province.slug }));
}

export default async function ProvinceDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const isRTL = locale === "fa";

  const province = getProvinceBySlug(slug);

  if (!province) {
    notFound();
  }

  const t = {
    en: {
      back: "Back to provinces",
      badge: "Province Detail",
      location: "Location in Canada",
      mapPlacement: "Province Location Visual",
      pathways: "Official Pathways",
      source: "Official Source",
      ended: "Ended / No Longer Open",
      active: "Active",
      pnpProvince: "PNP Province",
      quebecSystem: "Quebec-Specific System",
      nonPnp: "Non-PNP Territory",
      consultTitle: "Need a province-specific immigration plan?",
      consultCta: "Book Consultation",
    },
    fa: {
      back: "بازگشت به استان ها",
      badge: "جزئیات استان",
      location: "موقعیت در کانادا",
      mapPlacement: "نمای موقعیت استان",
      pathways: "مسیرهای رسمی",
      source: "منبع رسمی",
      ended: "پایان یافته / غیرفعال",
      active: "فعال",
      pnpProvince: "استان دارای PNP",
      quebecSystem: "سیستم اختصاصی کبک",
      nonPnp: "قلمرو بدون PNP",
      consultTitle: "برای این استان به برنامه مهاجرتی اختصاصی نیاز دارید؟",
      consultCta: "رزرو مشاوره",
    },
    fr: {
      back: "Retour aux provinces",
      badge: "Detail province",
      location: "Emplacement au Canada",
      mapPlacement: "Repere visuel de localisation",
      pathways: "Parcours officiels",
      source: "Source officielle",
      ended: "Termine / non ouvert",
      active: "Actif",
      pnpProvince: "Province PNP",
      quebecSystem: "Systeme propre au Quebec",
      nonPnp: "Territoire non-PNP",
      consultTitle: "Besoin d'un plan d'immigration specifique a cette province?",
      consultCta: "Reserver une consultation",
    },
  }[locale as "en" | "fa" | "fr"];

  const modelLabel =
    province.pathwayModel === "quebec"
      ? t.quebecSystem
      : province.pathwayModel === "non-pnp"
      ? t.nonPnp
      : t.pnpProvince;

  return (
    <main dir={isRTL ? "rtl" : "ltr"} className="min-h-screen bg-white text-slate-900">
      <Header locale={locale} />

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <a href={`/${locale}/provinces`} className="text-sm font-semibold text-slate-600 hover:text-slate-900">
            {t.back}
          </a>

          <div className={`mt-6 ${isRTL ? "text-right" : "text-left"}`}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">{t.badge}</p>
            <div className="mt-3 inline-flex items-center gap-3 rounded-xl bg-white px-3 py-2 ring-1 ring-slate-200">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-base ring-1 ring-slate-200">
                🧭
              </span>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {province.name}
              </h1>
            </div>
            <p className="mt-4 text-lg text-slate-600 leading-8">
              {province.shortIntro[locale as "en" | "fa" | "fr"]}
            </p>
            <p className="mt-3 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
              {modelLabel}
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h2 className={`text-xl font-semibold text-slate-900 ${isRTL ? "text-right" : "text-left"}`}>
                {t.location}
              </h2>
              <p className={`mt-3 text-slate-600 ${isRTL ? "text-right" : "text-left"}`}>
                {province.locationInCanada[locale as "en" | "fa" | "fr"]}
              </p>

              <h3 className={`mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500 ${isRTL ? "text-right" : "text-left"}`}>
                {t.mapPlacement}
              </h3>
              <div className="mt-3 rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <div className="grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5].map((slot) => (
                    <div
                      key={slot}
                      className={`h-8 rounded-md ${
                        slot === province.regionSlot ? "bg-red-600" : "bg-slate-200"
                      }`}
                    />
                  ))}
                </div>
                <p className={`mt-3 text-sm font-medium text-slate-700 ${isRTL ? "text-right" : "text-left"}`}>
                  {province.locationVisualLabel[locale as "en" | "fa" | "fr"]}
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h2 className={`text-xl font-semibold text-slate-900 ${isRTL ? "text-right" : "text-left"}`}>
                {t.pathways}
              </h2>
              <div className="mt-5 space-y-4">
                {province.pathways.map((pathway) => (
                  <article key={pathway.title} className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-base font-semibold text-slate-900">🧾 {pathway.title}</h3>
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                          pathway.status === "ended"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-emerald-100 text-emerald-700"
                        }`}
                      >
                        {pathway.status === "ended" ? t.ended : t.active}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {pathway.summary[locale as "en" | "fa" | "fr"]}
                    </p>
                    <a
                      href={pathway.officialSourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-sm font-semibold text-red-700 hover:text-red-800"
                    >
                      {t.source}: {pathway.officialSourceLabel}
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-slate-900 px-6 py-8 text-white">
            <h3 className={`text-2xl font-semibold ${isRTL ? "text-right" : "text-left"}`}>
              {t.consultTitle}
            </h3>
            <div className={`mt-5 ${isRTL ? "text-right" : "text-left"}`}>
              <a
                href={`/${locale}/contact`}
                className="inline-block rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                {t.consultCta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  );
}
