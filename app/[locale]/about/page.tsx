import Image from "next/image";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const isRTL = locale === "fa";

  const content = {
    en: {
      badge: "About Us",
      title: "About ZFK Immigration",
      intro:
        "ZFK Immigration is a Canadian immigration consulting firm based in Montreal, Quebec, providing professional guidance to individuals and families who wish to study, work or settle in Canada.",
      paragraph1:
        "The firm is led by Zohre Farzaneh, a Regulated Canadian Immigration Consultant (RCIC) and RCIC-IRB, with over 10 years of professional experience in immigration consulting and case assessment.",
      paragraph2:
        "Our work is built on transparency, honesty, professionalism and realistic guidance. We help clients better understand their options, evaluate the strengths and risks of their case, and choose a suitable immigration pathway based on real circumstances.",
      valuesTitle: "Our Core Values",
      values: [
        {
          title: "Transparency",
          text: "Clients should clearly understand their options, limitations and possible pathways."
        },
        {
          title: "Honesty",
          text: "We believe in providing realistic information and avoiding false expectations."
        },
        {
          title: "Professionalism",
          text: "Every case deserves careful review, structured thinking and responsible advice."
        },
        {
          title: "Realistic Guidance",
          text: "Our recommendations are based on the actual profile and goals of each client."
        }
      ],
      profileTitle: "Professional Information",
      profileItems: [
        { label: "Consultant", value: "Zohre Farzaneh" },
        { label: "Location", value: "Montreal, Quebec" },
        { label: "Status", value: "RCIC / RCIC-IRB" },
        { label: "Experience", value: "10+ years" }
      ],
      ctaTitle: "Need professional guidance?",
      ctaText:
        "Contact ZFK Immigration for a professional consultation regarding your immigration pathway.",
      ctaButton: "Contact Us"
    },
    fa: {
      badge: "درباره ما",
      title: "درباره ZFK Immigration",
      intro:
        "ZFK Immigration یک شرکت مشاوره مهاجرتی کانادایی مستقر در مونترال، کبک است که به متقاضیان بین‌المللی برای تحصیل، کار و اقامت در کانادا مشاوره حرفه‌ای ارائه می‌دهد.",
      paragraph1:
        "این مجموعه تحت مدیریت زهره فرزانه، مشاور رسمی مهاجرت کانادا (RCIC) و RCIC-IRB، فعالیت می‌کند و بیش از ۱۰ سال تجربه حرفه‌ای در زمینه مشاوره مهاجرت و ارزیابی پرونده‌ها دارد.",
      paragraph2:
        "فعالیت ما بر پایه شفافیت، صداقت، حرفه‌ای بودن و ارائه راهکارهای واقع‌بینانه شکل گرفته است. ما به متقاضیان کمک می‌کنیم گزینه‌های خود را بهتر درک کنند، نقاط قوت و ریسک‌های پرونده را ارزیابی کنند و بر اساس شرایط واقعی، مسیر مناسب‌تری برای اقدام انتخاب نمایند.",
      valuesTitle: "ارزش‌های اصلی ما",
      values: [
        {
          title: "شفافیت",
          text: "متقاضی باید به‌طور روشن گزینه‌ها، محدودیت‌ها و مسیرهای ممکن را بشناسد."
        },
        {
          title: "صداقت",
          text: "ما به ارائه اطلاعات واقعی و پرهیز از ایجاد انتظار غیرواقعی باور داریم."
        },
        {
          title: "حرفه‌ای بودن",
          text: "هر پرونده نیازمند بررسی دقیق، نگاه ساختارمند و مشاوره مسئولانه است."
        },
        {
          title: "واقع‌بینی",
          text: "پیشنهادهای ما بر اساس شرایط واقعی و اهداف هر متقاضی ارائه می‌شود."
        }
      ],
      profileTitle: "اطلاعات حرفه‌ای",
      profileItems: [
        { label: "مشاور", value: "Zohre Farzaneh" },
        { label: "موقعیت", value: "Montreal, Quebec" },
        { label: "وضعیت", value: "RCIC / RCIC-IRB" },
        { label: "تجربه", value: "10+ years" }
      ],
      ctaTitle: "به مشاوره حرفه‌ای نیاز دارید؟",
      ctaText:
        "برای دریافت مشاوره حرفه‌ای درباره مسیر مهاجرتی خود با ZFK Immigration تماس بگیرید.",
      ctaButton: "تماس با ما"
    },
    fr: {
      badge: "À propos",
      title: "À propos de ZFK Immigration",
      intro:
        "ZFK Immigration est un cabinet canadien de conseil en immigration basé à Montréal, Québec, offrant un accompagnement professionnel aux personnes et aux familles qui souhaitent étudier, travailler ou s’établir au Canada.",
      paragraph1:
        "Le cabinet est dirigé par Zohre Farzaneh, consultante réglementée en immigration canadienne (RCIC) et RCIC-IRB, avec plus de 10 ans d’expérience professionnelle en conseil et en analyse de dossiers d’immigration.",
      paragraph2:
        "Notre travail repose sur la transparence, l’honnêteté, le professionnalisme et des conseils réalistes. Nous aidons nos clients à mieux comprendre leurs options, à évaluer les forces et les risques de leur dossier, et à choisir une voie d’immigration adaptée à leur situation réelle.",
      valuesTitle: "Nos valeurs fondamentales",
      values: [
        {
          title: "Transparence",
          text: "Les clients doivent comprendre clairement leurs options, limites et voies possibles."
        },
        {
          title: "Honnêteté",
          text: "Nous croyons en une information réaliste, sans créer de faux espoirs."
        },
        {
          title: "Professionnalisme",
          text: "Chaque dossier mérite une analyse rigoureuse et un accompagnement responsable."
        },
        {
          title: "Réalisme",
          text: "Nos recommandations sont fondées sur la situation réelle et les objectifs du client."
        }
      ],
      profileTitle: "Informations professionnelles",
      profileItems: [
        { label: "Consultante", value: "Zohre Farzaneh" },
        { label: "Lieu", value: "Montréal, Québec" },
        { label: "Statut", value: "RCIC / RCIC-IRB" },
        { label: "Expérience", value: "10+ ans" }
      ],
      ctaTitle: "Besoin d’un accompagnement professionnel ?",
      ctaText:
        "Contactez ZFK Immigration pour une consultation professionnelle sur votre parcours d’immigration.",
      ctaButton: "Nous contacter"
    }
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

      <section className="bg-slate-50 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
          <div className={isRTL ? "order-2 text-right" : "text-left"}>
            <h2 className="text-2xl font-bold text-slate-900">
              Zohre Farzaneh
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              {t.paragraph1}
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              {t.paragraph2}
            </p>

            <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-lg font-semibold text-slate-900">
                {t.profileTitle}
              </h3>

              <div className="mt-4 space-y-3 text-sm text-slate-700">
                {t.profileItems.map((item) => (
                  <p key={item.label}>
                    <span className="font-semibold text-slate-900">
                      {item.label}:
                    </span>{" "}
                    {item.value}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className={isRTL ? "order-1" : ""}>
            <div className="overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-slate-200">
              <Image
                src="/images/team/zohre-farzaneh.jpg"
                alt="Zohre Farzaneh"
                width={800}
                height={1000}
                quality={100}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className={isRTL ? "max-w-2xl text-right" : "max-w-2xl text-left"}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              {t.valuesTitle}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {t.values.map((value) => (
              <div
                key={value.title}
                className={`rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {value.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">{t.ctaTitle}</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            {t.ctaText}
          </p>
          <div className="mt-8">
            <a
              href={`/${locale}/contact`}
              className="inline-block rounded-md bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
            >
              {t.ctaButton}
            </a>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  );
}