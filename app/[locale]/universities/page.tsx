import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import EducationCardsSection from "../../../components/EducationCardsSection";
import { universities } from "../../../data/education";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function UniversitiesPage({ params }: Props) {
  const { locale } = await params;
  const isRTL = locale === "fa";

  const t = {
    en: {
      badge: "Education Pathways",
      title: "Canadian Universities",
      intro:
        "Explore selected universities to start a strong study-to-immigration strategy aligned with your goals.",
      marketingParagraphs: [
        "Choosing the right university in Canada is more than just selecting a program. It can directly shape your immigration pathway, future work opportunities, and long-term settlement.",
        "At ZFK Immigration, we guide you through the full process, from identifying the right university and program to preparing your application, visa strategy, and next immigration steps.",
        "Our approach is tailored to your profile so your admission plan also supports stronger long-term immigration options.",
        "If you plan to study in Canada, building a clear and strategic plan from the beginning can make a meaningful difference.",
      ],
      sourceNote:
        "Ranking labels are source-based references (e.g., QS/THE editions) and are not universal or permanent rankings.",
      cta: "Request Admission Consultation",
      officialCta: "Official Website",
    },
    fa: {
      badge: "مسیرهای آموزشی",
      title: "دانشگاه های کانادا",
      intro:
        "دانشگاه های منتخب را بررسی کنید تا مسیر تحصیلی تا مهاجرت خود را با یک استراتژی دقیق شروع کنید.",
      marketingParagraphs: [
        "انتخاب دانشگاه در کانادا فقط انتخاب یک رشته تحصیلی نیست، بلکه تأثیر مستقیمی بر مسیر مهاجرت، فرصت های کاری و آینده شما دارد.",
        "در ZFK Immigration، ما از مرحله انتخاب دانشگاه و رشته مناسب تا آماده سازی پرونده پذیرش و برنامه ریزی برای ویزا و مسیر مهاجرت، در کنار شما هستیم.",
        "خدمات ما بر اساس شرایط و هدف شما طراحی می شود تا شانس موفقیت شما در پذیرش و اقامت افزایش یابد.",
        "داشتن یک استراتژی دقیق از ابتدا، می تواند مسیر شما را سریع تر و مطمئن تر کند.",
      ],
      sourceNote:
        "برچسب رتبه ها مبتنی بر منبع (مانند نسخه های QS یا THE) است و یک رتبه بندی قطعی و دائمی محسوب نمی شود.",
      cta: "درخواست مشاوره پذیرش",
      officialCta: "وب سایت رسمی",
    },
    fr: {
      badge: "Parcours educatifs",
      title: "Universites canadiennes",
      intro:
        "Decouvrez des universites selectionnees pour construire une strategie etudes-immigration adaptee a votre profil.",
      marketingParagraphs: [
        "Choisir une universite au Canada ne se limite pas a un programme d'etudes. Cela influence directement votre parcours d'immigration et vos opportunites professionnelles futures.",
        "Chez ZFK Immigration, nous vous accompagnons dans toutes les etapes, du choix de l'universite jusqu'a la strategie de visa et d'immigration.",
        "Notre approche est personnalisee afin d'optimiser vos chances d'admission et votre projet a long terme.",
        "Une strategie bien definie des le depart peut faire toute la difference.",
      ],
      sourceNote:
        "Les etiquettes de classement sont des references basees sur des sources (ex. editions QS/THE) et ne constituent pas un classement universel permanent.",
      cta: "Demander une consultation admission",
      officialCta: "Site officiel",
    },
  }[locale as "en" | "fa" | "fr"];

  return (
    <main dir={isRTL ? "rtl" : "ltr"} className="min-h-screen bg-white text-slate-900">
      <Header locale={locale} />
      <EducationCardsSection
        locale={locale}
        badge={t.badge}
        title={t.title}
        intro={t.intro}
        marketingParagraphs={t.marketingParagraphs}
        sourceNote={t.sourceNote}
        cardKind="university"
        ctaLabel={t.cta}
        officialCtaLabel={t.officialCta}
        institutions={universities}
      />
      <Footer locale={locale} />
    </main>
  );
}
