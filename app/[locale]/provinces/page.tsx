import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { provinces } from "../../../data/provinces";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ProvincesOverviewPage({ params }: Props) {
  const { locale } = await params;
  const isRTL = locale === "fa";

  const t = {
    en: {
      badge: "Provincial Pathways",
      title: "Canada Provinces Immigration Overview",
      intro:
        "Explore selected provinces and territories with official-source-backed pathway summaries to identify your best-fit strategy.",
      marketingParagraphs: [
        "Each province in Canada has its own immigration programs, opportunities, and requirements, and choosing the right one can significantly affect your chances of success.",
        "At ZFK Immigration, we analyze your profile and guide you toward the most suitable provincial pathways based on your goals, experience, and eligibility.",
        "From initial assessment to application strategy, we help you navigate provincial immigration with clarity and confidence.",
        "Understanding the right province and program before applying is one of the most important steps in your immigration journey.",
      ],
      pnpProvince: "PNP Province",
      quebecSystem: "Quebec-Specific System",
      nonPnp: "Non-PNP Territory",
      location: "Location in Canada",
      cta: "View Pathways",
      consult: "Need a tailored province strategy?",
      consultCta: "Book Consultation",
    },
    fa: {
      badge: "مسیرهای استانی",
      title: "نمای کلی مسیرهای مهاجرتی استان های کانادا",
      intro:
        "استان ها و قلمروهای منتخب را با خلاصه مسیرهای مبتنی بر منابع رسمی بررسی کنید تا بهترین استراتژی را انتخاب کنید.",
      marketingParagraphs: [
        "هر استان در کانادا برنامه ها و مسیرهای مهاجرتی متفاوتی دارد و انتخاب درست آن می تواند نقش تعیین کننده ای در موفقیت شما داشته باشد.",
        "در ZFK Immigration، با بررسی دقیق شرایط شما، مناسب ترین مسیرهای استانی را پیشنهاد می دهیم.",
        "از ارزیابی اولیه تا تدوین استراتژی و اقدام، شما را در تمام مراحل همراهی می کنیم.",
        "شناخت صحیح استان و برنامه مهاجرتی قبل از اقدام، یکی از مهم ترین عوامل موفقیت است.",
      ],
      pnpProvince: "استان دارای PNP",
      quebecSystem: "سیستم اختصاصی کبک",
      nonPnp: "قلمرو بدون PNP",
      location: "موقعیت در کانادا",
      cta: "مشاهده مسیرها",
      consult: "برای انتخاب استان مناسب نیاز به راهبرد شخصی دارید؟",
      consultCta: "رزرو مشاوره",
    },
    fr: {
      badge: "Parcours provinciaux",
      title: "Apercu immigration des provinces du Canada",
      intro:
        "Consultez des provinces et territoires selectionnes avec des resumes bases sur des sources officielles pour choisir la bonne strategie.",
      marketingParagraphs: [
        "Chaque province au Canada possede ses propres programmes, opportunites et criteres d'immigration, et le bon choix peut avoir un impact majeur sur vos chances de reussite.",
        "Chez ZFK Immigration, nous analysons votre profil afin de vous orienter vers les parcours provinciaux les plus adaptes a vos objectifs, a votre experience et a votre admissibilite.",
        "De l'evaluation initiale a la strategie de dossier, nous vous accompagnons avec clarte et methode.",
        "Choisir la bonne province et le bon programme avant de deposer une demande est une etape essentielle de votre projet d'immigration.",
      ],
      pnpProvince: "Province PNP",
      quebecSystem: "Systeme propre au Quebec",
      nonPnp: "Territoire non-PNP",
      location: "Emplacement au Canada",
      cta: "Voir les parcours",
      consult: "Besoin d'une strategie provinciale adaptee?",
      consultCta: "Reserver une consultation",
    },
  }[locale as "en" | "fa" | "fr"];

  const modelLabel = (model: "pnp" | "quebec" | "non-pnp") => {
    if (model === "quebec") return t.quebecSystem;
    if (model === "non-pnp") return t.nonPnp;
    return t.pnpProvince;
  };

  return (
    <main dir={isRTL ? "rtl" : "ltr"} className="min-h-screen bg-white text-slate-900">
      <Header locale={locale} />

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className={isRTL ? "max-w-3xl text-right" : "max-w-3xl text-left"}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              {t.badge}
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {t.title}
            </h1>
            <p className="mt-4 text-lg text-slate-600">{t.intro}</p>
            <div className="mt-6 rounded-2xl bg-white px-5 py-5 shadow-sm ring-1 ring-slate-200 sm:px-6">
              <div className="space-y-4 text-base leading-8 text-slate-700">
                {t.marketingParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {provinces.map((province) => (
              <article
                key={province.slug}
                className={`rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                <div className="-mx-2 -mt-2 mb-4 rounded-xl bg-gradient-to-r from-slate-50 to-white px-2 py-2">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-base ring-1 ring-slate-200">
                        🗺️
                      </span>
                      <h2 className="text-xl font-semibold text-slate-900">{province.name}</h2>
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                      {modelLabel(province.pathwayModel)}
                    </span>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    {province.locationVisualLabel[locale as "en" | "fa" | "fr"]}
                  </span>
                </div>

                <p className="mt-4 text-slate-600 leading-7">
                  {province.shortIntro[locale as "en" | "fa" | "fr"]}
                </p>

                <div className="mt-4 rounded-lg bg-slate-50 p-3 ring-1 ring-slate-200">
                  <p className="text-xs uppercase tracking-[0.12em] text-slate-500">{t.location}</p>
                  <p className="mt-1 text-sm font-medium text-slate-700">
                    {province.locationInCanada[locale as "en" | "fa" | "fr"]}
                  </p>
                </div>

                <a
                  href={`/${locale}/provinces/${province.slug}`}
                  className="mt-5 inline-block rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  {t.cta}
                </a>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-slate-900 px-6 py-8 text-white">
            <h3 className={`text-2xl font-semibold ${isRTL ? "text-right" : "text-left"}`}>
              {t.consult}
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
