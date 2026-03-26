type Props = {
  locale: string;
};

const INSTAGRAM_URL = "https://www.instagram.com/zfk.immigration/";
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/search/?api=1&query=ZFK+Immigration+Montreal";
const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/";

type LocalizedText = {
  title: string;
  instagramTitle: string;
  instagramText: string;
  instagramCta: string;
  instagramFallback: string;
  googleTitle: string;
  googleText: string;
  googleCta: string;
  googleFallback: string;
  ratingSummary: string;
  youtubeTitle: string;
  youtubeText: string;
  youtubeCta: string;
  youtubeFallback: string;
};

type ReviewCard = {
  name: string;
  text: string;
};

type ManualCard = {
  title: string;
  text: string;
};

export default function SocialProofSection({ locale }: Props) {
  const isRTL = locale === "fa";

  const t: LocalizedText = {
    en: {
      title: "Find Us Online",
      instagramTitle: "Instagram",
      instagramText:
        "Follow our official profile for updates, case insights and educational immigration content.",
      instagramCta: "Follow @zfk.immigration",
      instagramFallback:
        "Feed is shown in curated fallback mode to keep performance and stability high.",
      googleTitle: "Google Reviews",
      googleText:
        "Review highlights are curated fallback cards. Use the button below to view the latest public reviews on Google.",
      googleCta: "View Google Reviews",
      googleFallback:
        "Live Google review API is not configured yet. Showing curated featured reviews.",
      ratingSummary: "Rating summary placeholder: 4.9/5",
      youtubeTitle: "YouTube",
      youtubeText:
        "Featured videos are shown in manual mode until official channel/video IDs are finalized.",
      youtubeCta: "Visit YouTube",
      youtubeFallback:
        "Manual featured-video mode is active. Replace links with official channel/video URLs when ready.",
    },
    fa: {
      title: "شبکه های اجتماعی ما",
      instagramTitle: "اینستاگرام",
      instagramText:
        "برای دریافت به روزرسانی ها، نکات پرونده و محتوای آموزشی مهاجرت، صفحه رسمی ما را دنبال کنید.",
      instagramCta: "دنبال کردن @zfk.immigration",
      instagramFallback:
        "فید در حالت جایگزین منتخب نمایش داده می شود تا سرعت و پایداری حفظ شود.",
      googleTitle: "نظرات گوگل",
      googleText:
        "این بخش با کارت های منتخب جایگزین نمایش داده می شود. برای مشاهده جدیدترین نظرها از دکمه زیر استفاده کنید.",
      googleCta: "مشاهده نظرات گوگل",
      googleFallback:
        "API رسمی نظرات گوگل هنوز پیکربندی نشده است. نمایش در حالت منتخب انجام می شود.",
      ratingSummary: "خلاصه امتیاز (نمونه): 4.9 از 5",
      youtubeTitle: "یوتیوب",
      youtubeText:
        "ویدیوهای منتخب در حالت دستی نمایش داده می شوند تا شناسه های رسمی کانال و ویدیو نهایی شوند.",
      youtubeCta: "مشاهده یوتیوب",
      youtubeFallback:
        "حالت ویدیوی دستی فعال است. پس از نهایی شدن، لینک رسمی کانال و ویدیوها جایگزین شوند.",
    },
    fr: {
      title: "Retrouvez-nous en ligne",
      instagramTitle: "Instagram",
      instagramText:
        "Suivez notre profil officiel pour les mises a jour, les analyses de dossiers et le contenu educatif.",
      instagramCta: "Suivre @zfk.immigration",
      instagramFallback:
        "Le flux est affiche en mode de secours selectionne pour conserver performance et stabilite.",
      googleTitle: "Avis Google",
      googleText:
        "Les avis affiches ici sont des cartes selectionnees. Utilisez le bouton pour consulter les avis publics les plus recents.",
      googleCta: "Voir les avis Google",
      googleFallback:
        "L'API officielle Google Reviews n'est pas encore configuree. Affichage en mode selectionne.",
      ratingSummary: "Resume de note indicatif: 4.9/5",
      youtubeTitle: "YouTube",
      youtubeText:
        "Les videos mises en avant sont affichees en mode manuel jusqu'a validation des IDs officiels de chaine/video.",
      youtubeCta: "Visiter YouTube",
      youtubeFallback:
        "Mode video manuel actif. Remplacez par les URLs officielles de chaine/videos quand elles sont pretes.",
    },
  }[locale as "en" | "fa" | "fr"];

  const instagramCards: ManualCard[] = [
    {
      title:
        locale === "fa"
          ? "نکات مهاجرت"
          : locale === "fr"
          ? "Conseils immigration"
          : "Immigration Tips",
      text:
        locale === "fa"
          ? "راهنمای کوتاه برای تصمیم گیری بهتر در مسیر مهاجرت."
          : locale === "fr"
          ? "Conseils courts pour mieux orienter votre parcours."
          : "Short guidance to make better immigration decisions.",
    },
    {
      title:
        locale === "fa"
          ? "به روزرسانی برنامه ها"
          : locale === "fr"
          ? "Mises a jour des programmes"
          : "Program Updates",
      text:
        locale === "fa"
          ? "تغییرات مهم برنامه های مهاجرتی به زبان ساده."
          : locale === "fr"
          ? "Changements importants presentes de facon claire."
          : "Important pathway updates in plain language.",
    },
    {
      title:
        locale === "fa"
          ? "آموزش مدارک"
          : locale === "fr"
          ? "Preparation des documents"
          : "Document Prep",
      text:
        locale === "fa"
          ? "نکات عملی برای آماده سازی مدارک پرونده."
          : locale === "fr"
          ? "Bonnes pratiques pour preparer un dossier solide."
          : "Practical tips for preparing a stronger file.",
    },
  ];

  const googleReviews: ReviewCard[] = [
    {
      name: locale === "fa" ? "مراجع" : locale === "fr" ? "Client" : "Client",
      text:
        locale === "fa"
          ? "توضیحات بسیار شفاف بود و مسیر مناسب پرونده من مشخص شد."
          : locale === "fr"
          ? "Accompagnement clair et professionnel, avec une strategie adaptee."
          : "Clear and professional guidance with a realistic strategy.",
    },
    {
      name:
        locale === "fa" ? "متقاضی" : locale === "fr" ? "Candidat" : "Applicant",
      text:
        locale === "fa"
          ? "پاسخ گویی دقیق و منظم بود و همه مراحل برای من قابل درک شد."
          : locale === "fr"
          ? "Reponses precises, suivi regulier et excellente clarte du processus."
          : "Precise answers, consistent follow-up, and excellent process clarity.",
    },
    {
      name:
        locale === "fa"
          ? "خانواده"
          : locale === "fr"
          ? "Famille"
          : "Family Client",
      text:
        locale === "fa"
          ? "رویکرد حرفه ای و مسئولانه باعث شد با اطمینان تصمیم بگیریم."
          : locale === "fr"
          ? "Approche responsable qui nous a permis de decider en confiance."
          : "Responsible advice that helped us make confident decisions.",
    },
  ];

  const youtubeCards: ManualCard[] = [
    {
      title:
        locale === "fa"
          ? "ویدیوی معرفی خدمات"
          : locale === "fr"
          ? "Video de presentation"
          : "Service Overview Video",
      text:
        locale === "fa"
          ? "نسخه دستی: لینک ویدیوی رسمی پس از تایید اضافه می شود."
          : locale === "fr"
          ? "Mode manuel: le lien video officiel sera ajoute apres validation."
          : "Manual mode: official video link can be added when finalized.",
    },
    {
      title:
        locale === "fa"
          ? "سوالات پرتکرار"
          : locale === "fr"
          ? "Questions frequentes"
          : "Frequently Asked Questions",
      text:
        locale === "fa"
          ? "پاسخ به سوالات متداول در قالب ویدیوهای کوتاه."
          : locale === "fr"
          ? "Reponses aux questions frequentes en format video court."
          : "Short-form answers to common immigration questions.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={isRTL ? "max-w-3xl text-right" : "max-w-3xl text-left"}>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{t.title}</h2>
        </div>

        <div className="mt-8 grid gap-8">
          <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200 sm:p-8">
            <div className={isRTL ? "text-right" : "text-left"}>
              <h3 className="text-2xl font-semibold text-slate-900">{t.instagramTitle}</h3>
              <p className="mt-3 text-slate-600">{t.instagramText}</p>
              <p className="mt-2 text-sm text-slate-500">{t.instagramFallback}</p>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                {t.instagramCta}
              </a>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {instagramCards.map((card) => (
                <div key={card.title} className="rounded-xl bg-white p-4 ring-1 ring-slate-200">
                  <h4 className="font-semibold text-slate-900">{card.title}</h4>
                  <p className="mt-2 text-sm text-slate-600">{card.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200 sm:p-8">
            <div className={isRTL ? "text-right" : "text-left"}>
              <h3 className="text-2xl font-semibold text-slate-900">{t.googleTitle}</h3>
              <p className="mt-3 text-slate-600">{t.googleText}</p>
              <p className="mt-2 text-sm font-medium text-slate-700">{t.ratingSummary}</p>
              <p className="mt-1 text-sm text-slate-500">{t.googleFallback}</p>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                {t.googleCta}
              </a>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {googleReviews.map((review, index) => (
                <div key={`${review.name}-${index}`} className="rounded-xl bg-white p-4 ring-1 ring-slate-200">
                  <p className="text-sm text-amber-500">★★★★★</p>
                  <p className="mt-2 text-sm text-slate-600">{review.text}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                    {review.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200 sm:p-8">
            <div className={isRTL ? "text-right" : "text-left"}>
              <h3 className="text-2xl font-semibold text-slate-900">{t.youtubeTitle}</h3>
              <p className="mt-3 text-slate-600">{t.youtubeText}</p>
              <p className="mt-2 text-sm text-slate-500">{t.youtubeFallback}</p>
              <a
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                {t.youtubeCta}
              </a>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {youtubeCards.map((video) => (
                <div key={video.title} className="rounded-xl bg-white p-4 ring-1 ring-slate-200">
                  <div className="aspect-video rounded-lg bg-slate-100" />
                  <h4 className="mt-3 font-semibold text-slate-900">{video.title}</h4>
                  <p className="mt-2 text-sm text-slate-600">{video.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
