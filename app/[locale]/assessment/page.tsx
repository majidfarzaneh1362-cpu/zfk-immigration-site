import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ExpressEntryCalculator from "../../../components/ExpressEntryCalculator";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function AssessmentPage({ params }: Props) {
  const { locale } = await params;
  const isRTL = locale === "fa";

  const content = {
    en: {
      badge: "Smart Assessment",
      title: "Express Entry Score Calculator",
      intro:
        "Use this tool to get an estimated Express Entry / CRS-style score based on your profile. It is for preliminary guidance only and is not an official Government of Canada calculator.",
    },
    fa: {
      badge: "ارزیابی هوشمند",
      title: "محاسبه‌گر امتیاز اکسپرس اینتری",
      intro:
        "با این ابزار، یک امتیاز تقریبی به سبک CRS / Express Entry بر اساس پروفایل خود دریافت کنید. این ابزار فقط برای راهنمایی اولیه است و محاسبه‌گر رسمی دولت کانادا نیست.",
    },
    fr: {
      badge: "Évaluation intelligente",
      title: "Calculateur de score Entrée express",
      intro:
        "Utilisez cet outil pour obtenir un score estimatif de type CRS / Entrée express selon votre profil. Il sert uniquement d’orientation préliminaire et n’est pas un calculateur officiel du gouvernement du Canada.",
    },
  };

  const t = content[locale as keyof typeof content] || content.en;

  return (
    <main
      dir={isRTL ? "rtl" : "ltr"}
      className="min-h-screen bg-white text-slate-900"
    >
      <Header locale={locale} />

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className={isRTL ? "max-w-3xl text-right" : "max-w-3xl text-left"}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              {t.badge}
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
              {t.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              {t.intro}
            </p>
          </div>
        </div>
      </section>

      <ExpressEntryCalculator locale={locale} />

      <Footer locale={locale} />
    </main>
  );
}