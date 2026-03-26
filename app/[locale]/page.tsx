import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HeroSlider from "../../components/HeroSlider";
import StatsSection from "../../components/StatsSection";
import SocialProofSection from "../../components/SocialProofSection";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const isRTL = locale === "fa";

  return (
    <main
      dir={isRTL ? "rtl" : "ltr"}
      className="min-h-screen bg-white text-slate-900"
    >
      <Header locale={locale} />
      <HeroSlider locale={locale} />
      <StatsSection locale={locale} />

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className={isRTL ? "max-w-2xl text-right" : "max-w-2xl text-left"}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              {locale === "fa"
                ? "خدمات ما"
                : locale === "fr"
                ? "Nos services"
                : "Our Services"}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {locale === "fa"
                ? "خدمات مهاجرتی متناسب با نیاز واقعی متقاضیان"
                : locale === "fr"
                ? "Des services d’immigration adaptés aux besoins réels des candidats"
                : "Immigration services built around real client needs"}
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              {locale === "fa"
                ? "رویکرد ما شفاف، ساختارمند و واقع‌بینانه است."
                : locale === "fr"
                ? "Notre approche est transparente, structurée et réaliste."
                : "Our approach is transparent, structured and realistic."}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title:
                  locale === "fa"
                    ? "استادی پرمیت"
                    : locale === "fr"
                    ? "Permis d’études"
                    : "Study Permits",
                description:
                  locale === "fa"
                    ? "راهنمایی برای مسیرهای تحصیلی، استراتژی پرونده و آماده‌سازی اولیه."
                    : locale === "fr"
                    ? "Accompagnement pour les parcours d’études et la préparation initiale du dossier."
                    : "Guidance on study pathways, strategy and initial preparation.",
              },
              {
                title:
                  locale === "fa"
                    ? "ورک پرمیت"
                    : locale === "fr"
                    ? "Permis de travail"
                    : "Work Permits",
                description:
                  locale === "fa"
                    ? "بررسی مسیرهای کاری و انتخاب گزینه مناسب بر اساس شرایط پرونده."
                    : locale === "fr"
                    ? "Évaluation des voies de travail selon le profil du candidat."
                    : "Assessment of work permit pathways based on your profile.",
              },
              {
                title:
                  locale === "fa"
                    ? "اقامت دائم"
                    : locale === "fr"
                    ? "Résidence permanente"
                    : "Permanent Residence",
                description:
                  locale === "fa"
                    ? "تحلیل راهبردی برای مسیرهای اقامت دائم و بررسی گزینه‌های واقعی."
                    : locale === "fr"
                    ? "Analyse stratégique des voies vers la résidence permanente."
                    : "Strategic review of realistic permanent residence pathways.",
              },
              {
                title:
                  locale === "fa"
                    ? "شهروندی کانادا"
                    : locale === "fr"
                    ? "Citoyenneté canadienne"
                    : "Canadian Citizenship",
                description:
                  locale === "fa"
                    ? "همراهی در فرآیند اخذ شهروندی کانادا و آماده‌سازی برای آزمون شهروندی."
                    : locale === "fr"
                    ? "Accompagnement dans le processus d’obtention de la citoyenneté canadienne."
                    : "Support through the Canadian citizenship process and test preparation.",
              },
              {
                title:
                  locale === "fa"
                    ? "مهاجرت تجاری"
                    : locale === "fr"
                    ? "Immigration d’affaires"
                    : "Business Immigration",
                description:
                  locale === "fa"
                    ? "مشاوره برای کارآفرینان و سرمایه‌گذاران علاقه‌مند به مسیرهای تجاری."
                    : locale === "fr"
                    ? "Conseil pour entrepreneurs et investisseurs intéressés par les voies commerciales."
                    : "Advisory services for entrepreneurs and investors exploring business pathways.",
              },
              {
                title:
                  locale === "fa"
                    ? "پذیرش دانشگاه و کالج"
                    : locale === "fr"
                    ? "Admission universitaire"
                    : "College & University Admission",
                description:
                  locale === "fa"
                    ? "کمک به انتخاب برنامه تحصیلی مناسب و فرآیند پذیرش دانشگاهی."
                    : locale === "fr"
                    ? "Aide à la sélection de programmes académiques et processus d’admission."
                    : "Assistance in selecting academic programs and university admission process.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className={`rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className={isRTL ? "max-w-3xl text-right" : "max-w-3xl text-left"}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              {locale === "fa"
                ? "بررسی استان ها"
                : locale === "fr"
                ? "Apercu des provinces"
                : "Provinces Overview"}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {locale === "fa"
                ? "مسیرهای مهاجرتی استانی و کبک"
                : locale === "fr"
                ? "Parcours provinciaux et systeme du Quebec"
                : "Provincial Pathways and Quebec System"}
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              {locale === "fa"
                ? "مقایسه سریع استان ها، مسیرهای رسمی و لینک منابع دولتی برای تصمیم گیری دقیق تر."
                : locale === "fr"
                ? "Comparez rapidement les provinces, les parcours officiels et les sources gouvernementales."
                : "Quickly compare provinces, official pathways, and government sources to plan your strategy."}
            </p>
            <a
              href={`/${locale}/provinces`}
              className="mt-6 inline-block rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              {locale === "fa"
                ? "مشاهده استان ها"
                : locale === "fr"
                ? "Voir les provinces"
                : "View Provinces"}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className={isRTL ? "max-w-2xl text-right" : "max-w-2xl text-left"}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              {locale === "fa"
                ? "چرا ما"
                : locale === "fr"
                ? "Pourquoi nous"
                : "Why Choose Us"}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {locale === "fa"
                ? "شفاف، حرفه‌ای و واقع‌بین"
                : locale === "fr"
                ? "Transparent, professionnel et réaliste"
                : "Transparent, Professional and Realistic"}
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title:
                  locale === "fa"
                    ? "شفافیت"
                    : locale === "fr"
                    ? "Transparence"
                    : "Transparency",
                text:
                  locale === "fa"
                    ? "مسیرها، محدودیت‌ها و گزینه‌ها را روشن و دقیق توضیح می‌دهیم."
                    : locale === "fr"
                    ? "Nous expliquons clairement les voies, les limites et les options."
                    : "We clearly explain pathways, limitations and options.",
              },
              {
                title:
                  locale === "fa"
                    ? "صداقت"
                    : locale === "fr"
                    ? "Honnêteté"
                    : "Honesty",
                text:
                  locale === "fa"
                    ? "اطلاعات واقعی می‌دهیم و از ایجاد انتظار غیرواقعی پرهیز می‌کنیم."
                    : locale === "fr"
                    ? "Nous fournissons des informations réalistes sans créer de faux espoirs."
                    : "We provide realistic information and avoid creating false expectations.",
              },
              {
                title:
                  locale === "fa"
                    ? "حرفه‌ای بودن"
                    : locale === "fr"
                    ? "Professionnalisme"
                    : "Professionalism",
                text:
                  locale === "fa"
                    ? "هر پرونده نیازمند بررسی دقیق و مشاوره مسئولانه است."
                    : locale === "fr"
                    ? "Chaque dossier mérite une analyse rigoureuse et un accompagnement responsable."
                    : "Every case deserves careful review and responsible guidance.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`rounded-2xl bg-slate-50 p-6 shadow-sm ring-1 ring-slate-200 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className={isRTL ? "max-w-3xl text-right" : "max-w-3xl text-left"}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              {locale === "fa"
                ? "پذیرش تحصیلی"
                : locale === "fr"
                ? "Admission academique"
                : "Academic Admissions"}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {locale === "fa"
                ? "دانشگاه ها و کالج های کانادا"
                : locale === "fr"
                ? "Universites et colleges du Canada"
                : "Canadian Universities and Colleges"}
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              {locale === "fa"
                ? "موسسات منتخب را بررسی کنید و برای انتخاب مسیر مناسب، مشاوره تخصصی دریافت کنید."
                : locale === "fr"
                ? "Consultez des etablissements selectionnes et obtenez des conseils strategiques pour choisir le bon parcours."
                : "Explore selected institutions and get strategic guidance to choose the right study pathway."}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className={`rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 ${isRTL ? "text-right" : "text-left"}`}>
              <h3 className="text-2xl font-semibold text-slate-900">
                {locale === "fa"
                  ? "دانشگاه ها"
                  : locale === "fr"
                  ? "Universites"
                  : "Universities"}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                {locale === "fa"
                  ? "بررسی دانشگاه های منتخب با اطلاعات ساختاریافته، شهر، استان و برچسب منبع رتبه."
                  : locale === "fr"
                  ? "Consultez des universites selectionnees avec informations structurees, ville, province et etiquette de source de classement."
                  : "Review selected universities with structured details, city, province, and source-based ranking labels."}
              </p>
              <a
                href={`/${locale}/universities`}
                className="mt-5 inline-block rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                {locale === "fa"
                  ? "مشاهده دانشگاه ها"
                  : locale === "fr"
                  ? "Voir les universites"
                  : "View Universities"}
              </a>
            </article>

            <article className={`rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 ${isRTL ? "text-right" : "text-left"}`}>
              <h3 className="text-2xl font-semibold text-slate-900">
                {locale === "fa"
                  ? "کالج ها"
                  : locale === "fr"
                  ? "Colleges"
                  : "Colleges"}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                {locale === "fa"
                  ? "مسیرهای کاربردی و شغلی در کالج ها و موسسات منتخب کانادا را بررسی کنید."
                  : locale === "fr"
                  ? "Explorez les parcours pratiques et axes emploi dans des colleges et instituts canadiens selectionnes."
                  : "Explore practical, career-oriented pathways in selected Canadian colleges and institutes."}
              </p>
              <a
                href={`/${locale}/colleges`}
                className="mt-5 inline-block rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                {locale === "fa"
                  ? "مشاهده کالج ها"
                  : locale === "fr"
                  ? "Voir les colleges"
                  : "View Colleges"}
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            {locale === "fa"
              ? "برای بررسی حرفه‌ای پرونده خود آماده‌اید؟"
              : locale === "fr"
              ? "Prêt pour une évaluation professionnelle de votre dossier ?"
              : "Ready for a Professional Case Review?"}
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            {locale === "fa"
              ? "برای مشاوره یا ارزیابی اولیه، با ZFK Immigration در تماس باشید."
              : locale === "fr"
              ? "Contactez ZFK Immigration pour une consultation ou une évaluation initiale."
              : "Contact ZFK Immigration for a consultation or an initial assessment."}
          </p>
          <div className="mt-8">
            <a
              href={`/${locale}/contact`}
              className="inline-block rounded-xl bg-red-600 px-8 py-4 text-base font-semibold text-white transition hover:bg-red-700 text-center"
            >
              {locale === "fa"
                ? "تماس با ما"
                : locale === "fr"
                ? "Nous contacter"
                : "Contact Us"}
            </a>
          </div>
        </div>
      </section>

      <SocialProofSection locale={locale} />

      <Footer locale={locale} />
    </main>
  );
}