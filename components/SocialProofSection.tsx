import CustomerSatisfactionVideos from "./CustomerSatisfactionVideos";

type Props = {
  locale: string;
};

const INSTAGRAM_URL = "https://www.instagram.com/zfk.immigration/";
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/ZFK+Immigration/@45.5044461,-73.5576923,17z/data=!3m1!4b1!4m6!3m5!1s0x4cc91be67f9707cb:0x2c8cc7cb52a50b7e!8m2!3d45.5044461!4d-73.5576923!16s%2Fg%2F11ldszg4h0!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQwNi4wIKXMDSoASAFQAw%3D%3D";

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
      title: "Ø´Ø¨Ú©Ù‡ Ù‡Ø§ÛŒ Ø§Ø¬ØªÙ…Ø§Ø¹ÛŒ Ù…Ø§",
      instagramTitle: "Ø§ÛŒÙ†Ø³ØªØ§Ú¯Ø±Ø§Ù…",
      instagramText:
        "Ø¨Ø±Ø§ÛŒ Ø¯Ø±ÛŒØ§ÙØª Ø¨Ù‡ Ø±ÙˆØ²Ø±Ø³Ø§Ù†ÛŒ Ù‡Ø§ØŒ Ù†Ú©Ø§Øª Ù¾Ø±ÙˆÙ†Ø¯Ù‡ Ùˆ Ù…Ø­ØªÙˆØ§ÛŒ Ø¢Ù…ÙˆØ²Ø´ÛŒ Ù…Ù‡Ø§Ø¬Ø±ØªØŒ ØµÙØ­Ù‡ Ø±Ø³Ù…ÛŒ Ù…Ø§ Ø±Ø§ Ø¯Ù†Ø¨Ø§Ù„ Ú©Ù†ÛŒØ¯.",
      instagramCta: "Ø¯Ù†Ø¨Ø§Ù„ Ú©Ø±Ø¯Ù† @zfk.immigration",
      instagramFallback:
        "ÙÛŒØ¯ Ø¯Ø± Ø­Ø§Ù„Øª Ø¬Ø§ÛŒÚ¯Ø²ÛŒÙ† Ù…Ù†ØªØ®Ø¨ Ù†Ù…Ø§ÛŒØ´ Ø¯Ø§Ø¯Ù‡ Ù…ÛŒ Ø´ÙˆØ¯ ØªØ§ Ø³Ø±Ø¹Øª Ùˆ Ù¾Ø§ÛŒØ¯Ø§Ø±ÛŒ Ø­ÙØ¸ Ø´ÙˆØ¯.",
      googleTitle: "Ù†Ø¸Ø±Ø§Øª Ú¯ÙˆÚ¯Ù„",
      googleText:
        "Ø§ÛŒÙ† Ø¨Ø®Ø´ Ø¨Ø§ Ú©Ø§Ø±Øª Ù‡Ø§ÛŒ Ù…Ù†ØªØ®Ø¨ Ø¬Ø§ÛŒÚ¯Ø²ÛŒÙ† Ù†Ù…Ø§ÛŒØ´ Ø¯Ø§Ø¯Ù‡ Ù…ÛŒ Ø´ÙˆØ¯. Ø¨Ø±Ø§ÛŒ Ù…Ø´Ø§Ù‡Ø¯Ù‡ Ø¬Ø¯ÛŒØ¯ØªØ±ÛŒÙ† Ù†Ø¸Ø±Ù‡Ø§ Ø§Ø² Ø¯Ú©Ù…Ù‡ Ø²ÛŒØ± Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯.",
      googleCta: "Ù…Ø´Ø§Ù‡Ø¯Ù‡ Ù†Ø¸Ø±Ø§Øª Ú¯ÙˆÚ¯Ù„",
      googleFallback:
        "API Ø±Ø³Ù…ÛŒ Ù†Ø¸Ø±Ø§Øª Ú¯ÙˆÚ¯Ù„ Ù‡Ù†ÙˆØ² Ù¾ÛŒÚ©Ø±Ø¨Ù†Ø¯ÛŒ Ù†Ø´Ø¯Ù‡ Ø§Ø³Øª. Ù†Ù…Ø§ÛŒØ´ Ø¯Ø± Ø­Ø§Ù„Øª Ù…Ù†ØªØ®Ø¨ Ø§Ù†Ø¬Ø§Ù… Ù…ÛŒ Ø´ÙˆØ¯.",
      ratingSummary: "Ø®Ù„Ø§ØµÙ‡ Ø§Ù…ØªÛŒØ§Ø² (Ù†Ù…ÙˆÙ†Ù‡): 4.9 Ø§Ø² 5",
      youtubeTitle: "ÛŒÙˆØªÛŒÙˆØ¨",
      youtubeText:
        "ÙˆÛŒØ¯ÛŒÙˆÙ‡Ø§ÛŒ Ù…Ù†ØªØ®Ø¨ Ø¯Ø± Ø­Ø§Ù„Øª Ø¯Ø³ØªÛŒ Ù†Ù…Ø§ÛŒØ´ Ø¯Ø§Ø¯Ù‡ Ù…ÛŒ Ø´ÙˆÙ†Ø¯ ØªØ§ Ø´Ù†Ø§Ø³Ù‡ Ù‡Ø§ÛŒ Ø±Ø³Ù…ÛŒ Ú©Ø§Ù†Ø§Ù„ Ùˆ ÙˆÛŒØ¯ÛŒÙˆ Ù†Ù‡Ø§ÛŒÛŒ Ø´ÙˆÙ†Ø¯.",
      youtubeCta: "Ù…Ø´Ø§Ù‡Ø¯Ù‡ ÛŒÙˆØªÛŒÙˆØ¨",
      youtubeFallback:
        "Ø­Ø§Ù„Øª ÙˆÛŒØ¯ÛŒÙˆÛŒ Ø¯Ø³ØªÛŒ ÙØ¹Ø§Ù„ Ø§Ø³Øª. Ù¾Ø³ Ø§Ø² Ù†Ù‡Ø§ÛŒÛŒ Ø´Ø¯Ù†ØŒ Ù„ÛŒÙ†Ú© Ø±Ø³Ù…ÛŒ Ú©Ø§Ù†Ø§Ù„ Ùˆ ÙˆÛŒØ¯ÛŒÙˆÙ‡Ø§ Ø¬Ø§ÛŒÚ¯Ø²ÛŒÙ† Ø´ÙˆÙ†Ø¯.",
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
          ? "Ù†Ú©Ø§Øª Ù…Ù‡Ø§Ø¬Ø±Øª"
          : locale === "fr"
          ? "Conseils immigration"
          : "Immigration Tips",
      text:
        locale === "fa"
          ? "Ø±Ø§Ù‡Ù†Ù…Ø§ÛŒ Ú©ÙˆØªØ§Ù‡ Ø¨Ø±Ø§ÛŒ ØªØµÙ…ÛŒÙ… Ú¯ÛŒØ±ÛŒ Ø¨Ù‡ØªØ± Ø¯Ø± Ù…Ø³ÛŒØ± Ù…Ù‡Ø§Ø¬Ø±Øª."
          : locale === "fr"
          ? "Conseils courts pour mieux orienter votre parcours."
          : "Short guidance to make better immigration decisions.",
    },
    {
      title:
        locale === "fa"
          ? "Ø¨Ù‡ Ø±ÙˆØ²Ø±Ø³Ø§Ù†ÛŒ Ø¨Ø±Ù†Ø§Ù…Ù‡ Ù‡Ø§"
          : locale === "fr"
          ? "Mises a jour des programmes"
          : "Program Updates",
      text:
        locale === "fa"
          ? "ØªØºÛŒÛŒØ±Ø§Øª Ù…Ù‡Ù… Ø¨Ø±Ù†Ø§Ù…Ù‡ Ù‡Ø§ÛŒ Ù…Ù‡Ø§Ø¬Ø±ØªÛŒ Ø¨Ù‡ Ø²Ø¨Ø§Ù† Ø³Ø§Ø¯Ù‡."
          : locale === "fr"
          ? "Changements importants presentes de facon claire."
          : "Important pathway updates in plain language.",
    },
    {
      title:
        locale === "fa"
          ? "Ø¢Ù…ÙˆØ²Ø´ Ù…Ø¯Ø§Ø±Ú©"
          : locale === "fr"
          ? "Preparation des documents"
          : "Document Prep",
      text:
        locale === "fa"
          ? "Ù†Ú©Ø§Øª Ø¹Ù…Ù„ÛŒ Ø¨Ø±Ø§ÛŒ Ø¢Ù…Ø§Ø¯Ù‡ Ø³Ø§Ø²ÛŒ Ù…Ø¯Ø§Ø±Ú© Ù¾Ø±ÙˆÙ†Ø¯Ù‡."
          : locale === "fr"
          ? "Bonnes pratiques pour preparer un dossier solide."
          : "Practical tips for preparing a stronger file.",
    },
  ];

  const googleReviews: ReviewCard[] = [
    {
      name: locale === "fa" ? "Ù…Ø±Ø§Ø¬Ø¹" : locale === "fr" ? "Client" : "Client",
      text:
        locale === "fa"
          ? "ØªÙˆØ¶ÛŒØ­Ø§Øª Ø¨Ø³ÛŒØ§Ø± Ø´ÙØ§Ù Ø¨ÙˆØ¯ Ùˆ Ù…Ø³ÛŒØ± Ù…Ù†Ø§Ø³Ø¨ Ù¾Ø±ÙˆÙ†Ø¯Ù‡ Ù…Ù† Ù…Ø´Ø®Øµ Ø´Ø¯."
          : locale === "fr"
          ? "Accompagnement clair et professionnel, avec une strategie adaptee."
          : "Clear and professional guidance with a realistic strategy.",
    },
    {
      name:
        locale === "fa" ? "Ù…ØªÙ‚Ø§Ø¶ÛŒ" : locale === "fr" ? "Candidat" : "Applicant",
      text:
        locale === "fa"
          ? "Ù¾Ø§Ø³Ø® Ú¯ÙˆÛŒÛŒ Ø¯Ù‚ÛŒÙ‚ Ùˆ Ù…Ù†Ø¸Ù… Ø¨ÙˆØ¯ Ùˆ Ù‡Ù…Ù‡ Ù…Ø±Ø§Ø­Ù„ Ø¨Ø±Ø§ÛŒ Ù…Ù† Ù‚Ø§Ø¨Ù„ Ø¯Ø±Ú© Ø´Ø¯."
          : locale === "fr"
          ? "Reponses precises, suivi regulier et excellente clarte du processus."
          : "Precise answers, consistent follow-up, and excellent process clarity.",
    },
    {
      name:
        locale === "fa"
          ? "Ø®Ø§Ù†ÙˆØ§Ø¯Ù‡"
          : locale === "fr"
          ? "Famille"
          : "Family Client",
      text:
        locale === "fa"
          ? "Ø±ÙˆÛŒÚ©Ø±Ø¯ Ø­Ø±ÙÙ‡ Ø§ÛŒ Ùˆ Ù…Ø³Ø¦ÙˆÙ„Ø§Ù†Ù‡ Ø¨Ø§Ø¹Ø« Ø´Ø¯ Ø¨Ø§ Ø§Ø·Ù…ÛŒÙ†Ø§Ù† ØªØµÙ…ÛŒÙ… Ø¨Ú¯ÛŒØ±ÛŒÙ…."
          : locale === "fr"
          ? "Approche responsable qui nous a permis de decider en confiance."
          : "Responsible advice that helped us make confident decisions.",
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
                  <p className="text-sm text-amber-500">â˜…â˜…â˜…â˜…â˜…</p>
                  <p className="mt-2 text-sm text-slate-600">{review.text}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                    {review.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <CustomerSatisfactionVideos locale={locale} />
        </div>
      </div>
    </section>
  );
}

