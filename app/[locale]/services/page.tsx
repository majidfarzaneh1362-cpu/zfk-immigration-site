import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  const isRTL = locale === "fa";

  const services = [
    {
      title: locale === "fa" ? "استادی پرمیت" : locale === "fr" ? "Permis d’études" : "Study Permits",
      description:
        locale === "fa"
          ? "راهنمایی برای انتخاب مسیر تحصیلی، بررسی اولیه وضعیت، و آماده‌سازی برای اقدام."
          : locale === "fr"
          ? "Accompagnement pour les parcours d’études et la préparation initiale du dossier."
          : "Guidance on study pathways, profile assessment, and preparation for a study permit application.",
    },
    {
      title: locale === "fa" ? "ورک پرمیت" : locale === "fr" ? "Permis de travail" : "Work Permits",
      description:
        locale === "fa"
          ? "بررسی مسیرهای کاری، ورک پرمیت باز و بسته، و تحلیل اولیه شرایط پرونده."
          : locale === "fr"
          ? "Évaluation des voies de travail selon le profil du candidat."
          : "Support for open and employer-specific work permits, with practical case-oriented review.",
    },
    {
      title: locale === "fa" ? "اقامت دائم" : locale === "fr" ? "Résidence permanente" : "Permanent Residence",
      description:
        locale === "fa"
          ? "ارزیابی گزینه‌های بلندمدت مهاجرت و بررسی واقع‌بینانه مسیرهای مناسب."
          : locale === "fr"
          ? "Analyse stratégique des voies vers la résidence permanente."
          : "Strategic evaluation of long-term immigration pathways and realistic PR options.",
    },
    {
      title: locale === "fa" ? "مهاجرت تجاری" : locale === "fr" ? "Immigration d’affaires" : "Business Immigration",
      description:
        locale === "fa"
          ? "مشاوره برای کارآفرینان، سرمایه‌گذاران و متقاضیان علاقه‌مند به مسیرهای تجاری."
          : locale === "fr"
          ? "Services de conseil pour entrepreneurs, investisseurs et candidats intéressés par les voies commerciales."
          : "Advisory services for entrepreneurs, investors, and applicants exploring business pathways.",
    },
    {
      title: locale === "fa" ? "اسپانسرشیپ خانوادگی" : locale === "fr" ? "Parrainage familial" : "Family Sponsorship",
      description:
        locale === "fa"
          ? "همراهی ساختارمند در پرونده‌های پیوستن خانواده و برنامه‌ریزی اسپانسرشیپ."
          : locale === "fr"
          ? "Accompagnement structuré pour les demandes de regroupement familial et la planification du parrainage."
          : "Structured assistance for family sponsorship and reunification-related applications.",
    },
    {
      title: locale === "fa" ? "بررسی پرونده و مشاوره" : locale === "fr" ? "Consultation et révision de dossier" : "Consultation & Case Review",
      description:
        locale === "fa"
          ? "تحلیل اولیه ریسک‌ها، نقاط قوت و گام‌های بعدی پیش از هر اقدام رسمی."
          : locale === "fr"
          ? "Révision professionnelle de votre profil, risques, forces et prochaines étapes avant toute action formelle."
          : "Professional review of your profile, risks, strengths and next steps before any formal action.",
    },
    {
      title: locale === "fa" ? "ورود به مدارس (پایه ۱ تا ۱۲)" : locale === "fr" ? "Admission scolaire (1re à 12e année)" : "School Admission (Grade 1-12)",
      description:
        locale === "fa"
          ? "راهنمایی برای پذیرش در مدارس کانادایی، ارزیابی شرایط خانوادگی و آماده‌سازی مدارک."
          : locale === "fr"
          ? "Accompagnement pour les admissions scolaires canadiennes, évaluation familiale et préparation des documents."
          : "Guidance for Canadian school admissions, family assessment and document preparation.",
    },
    {
      title: locale === "fa" ? "پذیرش دانشگاه و کالج" : locale === "fr" ? "Admission universitaire et collégiale" : "College & University Admission",
      description:
        locale === "fa"
          ? "کمک به انتخاب برنامه تحصیلی مناسب، آماده‌سازی برای آزمون‌ها و فرآیند پذیرش دانشگاهی."
          : locale === "fr"
          ? "Aide à la sélection de programmes académiques appropriés, préparation aux examens et processus d’admission universitaire."
          : "Assistance in selecting suitable academic programs, test preparation and university admission process.",
    },
    {
      title: locale === "fa" ? "شهروندی کانادا" : locale === "fr" ? "Citoyenneté canadienne" : "Canadian Citizenship",
      description:
        locale === "fa"
          ? "همراهی در فرآیند اخذ شهروندی کانادا، ارزیابی شرایط و آماده‌سازی برای آزمون شهروندی."
          : locale === "fr"
          ? "Accompagnement dans le processus d’obtention de la citoyenneté canadienne, évaluation d’admissibilité et préparation à l’examen de citoyenneté."
          : "Support through the Canadian citizenship process, eligibility assessment and citizenship test preparation.",
    },
    {
      title: locale === "fa" ? "پناهندگی و افراد تحت حمایت" : locale === "fr" ? "Réfugiés et personnes protégées" : "Refugee & Protected Person",
      description:
        locale === "fa"
          ? "مشاوره تخصصی برای متقاضیان پناهندگی و افراد تحت حمایت، همراهی در فرآیند قانونی."
          : locale === "fr"
          ? "Conseils spécialisés pour les demandeurs d’asile et les personnes protégées, accompagnement dans le processus juridique."
          : "Specialized advice for refugee applicants and protected persons, legal process accompaniment.",
    },
  ];

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
              {locale === "fa" ? "خدمات ما" : "Our Services"}
            </p>
            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
              {locale === "fa"
                ? "خدمات مهاجرتی ZFK Immigration"
                : "Immigration Services by ZFK Immigration"}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              {locale === "fa"
                ? "ما خدمات جامع مشاوره مهاجرت را ارائه می‌دهیم، از پذیرش تحصیلی گرفته تا شهروندی کانادا. رویکرد ما حرفه‌ای، شفاف و واقع‌بینانه است."
                : locale === "fr"
                ? "Nous offrons des services complets de consultation en immigration, des admissions éducatives à la citoyenneté canadienne. Notre approche est professionnelle, transparente et réaliste."
                : "We offer comprehensive immigration consulting services, from educational admissions to Canadian citizenship. Our approach is professional, transparent and realistic."}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                <h2 className="text-xl font-semibold text-slate-900">
                  {service.title}
                </h2>
                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>
                <a
                  href={`/${locale}/contact`}
                  className="mt-5 inline-block rounded-lg bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
                >
                  {locale === "fa" ? "درخواست مشاوره" : "Request Consultation"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  );
}