import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import EducationCardsSection from "../../../components/EducationCardsSection";
import { colleges } from "../../../data/education";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function CollegesPage({ params }: Props) {
  const { locale } = await params;
  const isRTL = locale === "fa";

  const t = {
    en: {
      badge: "Education Pathways",
      title: "Canadian Colleges",
      intro:
        "Review selected colleges and institutes for practical, career-focused study pathways in Canada.",
      marketingParagraphs: [
        "Colleges in Canada offer practical, career-focused programs that can provide faster access to the job market and valuable pathways toward immigration.",
        "At ZFK Immigration, we help you choose the right college and program based on your background, budget, and long-term goals.",
        "We support you through the full process, including admission, documentation, and aligning your study path with future immigration opportunities.",
        "Making the right choice at this stage can significantly impact your chances of building a successful future in Canada.",
      ],
      sourceNote:
        "Institution profiles are curated for guidance. Program availability should be verified from official college or institute sources before applying.",
      cta: "Book College Admission Consultation",
      officialCta: "Official Website",
    },
    fa: {
      badge: "مسیرهای آموزشی",
      title: "کالج ها و موسسات کانادا",
      intro:
        "کالج ها و موسسات منتخب را برای مسیرهای تحصیلی کاربردی و شغلی در کانادا بررسی کنید.",
      marketingParagraphs: [
        "کالج های کانادا با ارائه برنامه های کاربردی و مهارت محور، مسیر سریع تری برای ورود به بازار کار و مهاجرت فراهم می کنند.",
        "در ZFK Immigration، به شما کمک می کنیم بهترین کالج و رشته را متناسب با شرایط و اهداف خود انتخاب کنید.",
        "از پذیرش تا برنامه ریزی مسیر اقامت، در تمامی مراحل در کنار شما خواهیم بود.",
        "انتخاب درست در این مرحله می تواند آینده شغلی و مهاجرتی شما را متحول کند.",
      ],
      sourceNote:
        "پروفایل موسسات به صورت منتخب ارائه شده است. قبل از اقدام، وضعیت برنامه ها از منبع رسمی همان موسسه بررسی شود.",
      cta: "رزرو مشاوره پذیرش کالج",
      officialCta: "وب سایت رسمی",
    },
    fr: {
      badge: "Parcours educatifs",
      title: "Colleges canadiens",
      intro:
        "Consultez des colleges et instituts selectionnes pour des parcours d'etudes pratiques et axes sur l'emploi.",
      marketingParagraphs: [
        "Les colleges au Canada offrent des programmes pratiques et axes sur le marche du travail, ce qui peut faciliter l'acces a l'emploi et ouvrir des perspectives d'immigration interessantes.",
        "Chez ZFK Immigration, nous vous aidons a choisir le bon etablissement et le bon programme selon votre profil, votre budget et vos objectifs a long terme.",
        "Nous vous accompagnons dans l'ensemble du processus, de l'admission a la preparation du dossier, en tenant compte de vos perspectives futures d'immigration.",
        "Faire le bon choix a cette etape peut avoir un impact important sur votre avenir au Canada.",
      ],
      sourceNote:
        "Les profils sont presentes a titre indicatif. Verifiez toujours la disponibilite des programmes sur les sources officielles des colleges/instituts.",
      cta: "Reserver une consultation college",
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
        cardKind="college"
        ctaLabel={t.cta}
        officialCtaLabel={t.officialCta}
        institutions={colleges}
      />
      <Footer locale={locale} />
    </main>
  );
}
